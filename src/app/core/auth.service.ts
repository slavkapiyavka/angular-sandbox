import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Constants } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly constants = Constants;

  public login(payload: { email: string, password: string }) {
    return this.http.post(`${this.constants.API_URL}/auth/login`, payload);
  }
}
