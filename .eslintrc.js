module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true,
    "jest": true
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
      "jest"
  ],
  "globals": {
    "VERSION": true,
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
    RequestInterceptor: true,
    RequestSpy: true,
    ResponseFaker: true
  },
  "rules": {
    "accessor-pairs": "error",
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "array-callback-return": "error",
    "arrow-parens": "off",
    "arrow-spacing": [
      "error",
      {
        "after": true,
        "before": true
      }
    ],
    "block-scoped-var": "error",
    "block-spacing": "error",
    "brace-style": [
      "error",
      "1tbs"
    ],
    "callback-return": "off",
    "camelcase": "off",
    "comma-dangle": "error",
    "comma-spacing": [
      "error",
      {
        "after": true,
        "before": false
      }
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "complexity": "error",
    "computed-property-spacing": [
      "error",
      "never"
    ],
    "consistent-return": "off",
    "consistent-this": "off",
    "curly": "error",
    "default-case": "error",
    "dot-location": [
      "error",
      "property"
    ],
    "dot-notation": "error",
    "eol-last": "off",
    "eqeqeq": "error",
    "func-names": [
      "off",
      "never"
    ],
    "func-style": [
      "off",
      "expression"
    ],
    "generator-star-spacing": "error",
    "global-require": "error",
    "guard-for-in": "error",
    "handle-callback-err": "error",
    "id-blacklist": "error",
    "id-length": "off",
    "id-match": "error",
    "indent": ["error", 2, {"SwitchCase": 1}],
    "init-declarations": "error",
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "key-spacing": "error",
    "keyword-spacing": [
      "error",
      {
        "after": true,
        "before": true
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "lines-around-comment": "error",
    "max-depth": "error",
    "max-len": "off",
    "max-lines": "off",
    "max-nested-callbacks": "error",
    "max-params": "off",
    "max-statements": "off",
    "max-statements-per-line": "error",
    "new-cap": "error",
    "new-parens": "error",
    "newline-after-var": "off",
    "newline-before-return": "off",
    "newline-per-chained-call": "off",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-catch-shadow": "error",
    "no-confusing-arrow": "off",
    "no-continue": "error",
    "no-console": "off",
    "no-div-regex": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "off",
    "no-empty-function": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-extra-parens": "off",
    "no-floating-decimal": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "off",
    "no-invalid-this": "off",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "off",
    "no-mixed-operators": "off",
    "no-mixed-requires": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": "error",
    "no-negated-condition": "off",
    "no-nested-ternary": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "off",
    "no-path-concat": "error",
    "no-plusplus": "off",
    "no-process-env": "off",
    "no-process-exit": "error",
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-modules": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "off",
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "error",
    "no-sync": "error",
    "no-ternary": "off",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-undefined": "off",
    "no-underscore-dangle": "off",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "off",
    "no-unused-vars": "warn",
    "no-use-before-define": "off",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "off",
    "no-useless-rename": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": "off",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "object-curly-spacing": [
      "warn",
      "always"
    ],
    "object-property-newline": [
      "error",
      {
        "allowMultiplePropertiesPerLine": true
      }
    ],
    "one-var": "off",
    "one-var-declaration-per-line": "error",
    "operator-assignment": "error",
    "operator-linebreak": "error",
    "padded-blocks": "off",
    "prefer-arrow-callback": "off",
    "prefer-const": "off",
    "prefer-reflect": "off",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "off",
    "quote-props": "off",
    "quotes": [
      "error",
      "single"
    ],
    "no-this-before-super": "off",
    "radix": "error",
    "rest-spread-spacing": "error",
    "semi": ["warn", "always"],
    "semi-spacing": "error",
    "sort-imports": "off",
    "sort-vars": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": "off",
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": [
      "error",
      "always"
    ],
    "strict": "error",
    "template-curly-spacing": [
      "error",
      "never"
    ],
    "unicode-bom": [
      "error",
      "never"
    ],
    "valid-jsdoc": "off",
    "vars-on-top": "error",
    "wrap-iife": "error",
    "wrap-regex": "off",
    "yield-star-spacing": "error",
    "yoda": [
      "error",
      "never"
    ]
  }
};
