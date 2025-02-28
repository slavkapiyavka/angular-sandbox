module.exports = {
    extends: [
      'stylelint-config-standard',
      'stylelint-config-prettier'
    ],
    rules: {
      'selector-pseudo-element-no-unknown': [
        true,
        {
          ignorePseudoElements: ['ng-deep']
        }
      ]
    }
};