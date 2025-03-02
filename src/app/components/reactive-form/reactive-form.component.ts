import { Component, inject } from '@angular/core';
import { FormControl, NonNullableFormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  private fb = inject(NonNullableFormBuilder);
  public form = this.fb.group({
    email: new FormControl('e@mail.com'),
    password: new FormControl('pass'),
  });

  constructor() {
    this.form.valueChanges.subscribe(console.log);
  }
}
