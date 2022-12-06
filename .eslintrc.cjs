module.exports = {
  root: true,
  plugins: [
    "eslint-plugin-import",
    "filename-rules",
    "lodash",
    "simple-import-sort",
    "sort-destructure-keys",
    "sort-keys-fix",
    "import",
    "prettier",
    "formatjs",
  ],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:typescript-sort-keys/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
    project: ["tsconfig.json"],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/no-unsafe-assignment": "error",
        // revert airbnb rule that was disabled by eslint-config-prettier
        // https://eslint.org/docs/rules/arrow-body-style
        // https://github.com/prettier/eslint-config-prettier/blob/master/index.js
        "arrow-body-style": [
          "error",
          "as-needed",
          {
            requireReturnForObjectLiteral: false,
          },
        ],

        // more strict than the airbnb rule
        // https://eslint.org/docs/rules/camelcase
        camelcase: [
          "off",
          {
            properties: "always",
          },
        ],

        // disable consistent returns, since we typically do not return explicit undefined
        // https://eslint.org/docs/rules/consistent-return
        "consistent-return": "off",

        // https://eslint.org/docs/rules/curly
        curly: "error",

        // allow disabling a rule in the beginning of a file without re-enabling the rule
        // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
        "eslint-comments/disable-enable-pair": [
          "error",
          { allowWholeFile: true },
        ],

        // check obsolete eslint-disables
        // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html
        "eslint-comments/no-unused-disable": "error",

        "formatjs/enforce-id": [
          "warn",
          {
            idInterpolationPattern: "[sha512:contenthash:base64:6]",
          },
        ],
        "formatjs/enforce-placeholders": "error",
        "formatjs/no-emoji": "error",
        "formatjs/no-multiple-plurals": "error",
        "formatjs/no-multiple-whitespaces": "error",
        "formatjs/no-offset": "error",

        // airbnb contradicts with nx's output
        "import/prefer-default-export": "off",
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            js: "never",
            jsx: "never",
            mjs: "never",
            ts: "never",
            tsx: "never",
            "spec.tsx": "never",
          },
        ],
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true },
        ],
        "import/no-named-as-default": "off",
        // eslint seems unable to find a file with ".po.ts" extension
        "import/no-unresolved": [
          2,
          { ignore: ["\\.po$"], caseSensitive: false },
        ],
        // disabled in favor of sort-imports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
        "import/order": "off",

        // add exception after single line
        // https://eslint.org/docs/rules/lines-between-class-members
        "lines-between-class-members": [
          "error",
          "always",
          { exceptAfterSingleLine: true },
        ],

        "lodash/import-scope": [2, "method"],

        // increase max classes per file from 1 (airbnb) to 3
        // https://eslint.org/docs/rules/max-classes-per-file
        "max-classes-per-file": ["error", 3],

        // extend airbnb rule by adding "collection", "document", "modifier" and "toolbox" into ignored properties
        // https://eslint.org/docs/rules/no-param-reassign.html
        "no-param-reassign": [
          "error",
          {
            ignorePropertyModificationsFor: [
              "acc", // for reduce accumulators
              "accumulator", // for reduce accumulators
              "e", // for e.returnvalue
              "collection", // for Meteor hooks
              "ctx", // for Koa routing
              "context", // for Koa routing
              "document", // for Meteor hooks
              "modifier", // for Meteor hooks
              "req", // for Express requests
              "request", // for Express requests
              "res", // for Express responses
              "ref", // for Ref
              "response", // for Express responses
              "$scope", // for Angular 1 scopes
              "staticContext", // for ReactRouter context,
              "state", // for /redux/slices/breadcrumbsSlice.ts as state is WriteableDraft ?
              "toolbox", // for Gluegun toolbox
            ],
            props: true,
          },
        ],

        // remove ForOfStatement from airbnb rule to allow clear syntax for async for-of loops
        // https://eslint.org/docs/rules/no-restricted-syntax
        "no-restricted-syntax": [
          "error",
          {
            message:
              "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
            selector: "ForInStatement",
          },
          {
            message:
              "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
            selector: "LabeledStatement",
          },
          {
            message:
              "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
            selector: "WithStatement",
          },
        ],

        // tidy up if/else https://eslint.org/docs/rules/no-else-return
        "no-else-return": ["error", { allowElseIf: false }],

        // we have plenty of MongoDB fields prefixed with underscore, hence this rule is disabled
        // https://eslint.org/docs/rules/no-underscore-dangle
        "no-underscore-dangle": "off",

        "no-unreachable": "error",

        // disable in favor of @typescript-eslint/no-unused-expressions
        // https://eslint.org/docs/rules/no-unused-expressions
        "no-unused-expressions": "off",

        // disable in favor of @typescript-eslint/no-use-before-define
        // https://eslint.org/docs/rules/no-use-before-define
        "no-use-before-define": "off",

        // disable in favor of @typescript-eslint/no-useless-constructor
        // https://eslint.org/docs/rules/no-useless-constructor
        "no-useless-constructor": "off",

        // Prefer destructuring for objects only
        // https://eslint.org/docs/rules/prefer-destructuring
        "prefer-destructuring": [
          "error",
          {
            AssignmentExpression: {
              array: false,
              object: false,
            },
            VariableDeclarator: {
              array: false,
              object: true,
            },
          },
          {
            enforceForRenamedProperties: false,
          },
        ],
        "prefer-object-spread": 1,
        "prettier/prettier": "error",

        // prefer other styling method than the style attribute
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
        "react/forbid-component-props": [
          "warn",
          {
            forbid: [
              {
                message:
                  "Avoid inline styles and consider other means for styling your components",
                propName: "style",
              },
            ],
          },
        ],
        // less strict than airbnb (allows any)
        // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/forbid-prop-types.md
        "react/forbid-prop-types": [
          "error",
          {
            checkChildContextTypes: true,
            checkContextTypes: true,
            forbid: ["array", "object"],
          },
        ],
        "react/function-component-definition": [
          2,
          { namedComponents: "arrow-function" },
        ],
        "react/jsx-boolean-value": [1, "always"],
        "react/jsx-curly-brace-presence": [
          1,
          { props: "never", children: "never" },
        ],
        // airbnb restrict extensions allowed to contain JSX syntax
        "react/jsx-filename-extension": [
          2,
          { extensions: [".js", ".jsx", ".ts", ".tsx"] },
        ],
        // make case sensitive due to Material-UI (was ignoreCase: true)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
        "react/jsx-no-duplicate-props": ["error", { ignoreCase: false }],
        "react/jsx-props-no-spreading": "off",
        // force props sorting since we like to sort
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
        "react/jsx-sort-props": [
          "error",
          {
            callbacksLast: false,
            ignoreCase: true,
            noSortAlphabetically: false,
            reservedFirst: false,
            shorthandFirst: false,
            shorthandLast: false,
          },
        ],
        "react/jsx-no-bind": [
          1,
          {
            allowArrowFunctions: true,
            allowFunctions: true,
          },
        ],
        "react/jsx-no-target-blank": [
          1,
          {
            allowReferrer: true,
          },
        ],

        "react/no-unknown-property": ["error", { ignore: ["qa-id"] }],

        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off", // not needed with next.js
        // we accept undefined non-required props
        // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/require-default-props.md
        "react/require-default-props": "off",

        "react/self-closing-comp": [1],

        // force prop types sorting since we like to sort
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
        "react/sort-prop-types": [
          "error",
          {
            callbacksLast: false,
            ignoreCase: true,
            requiredFirst: false,
            sortShapeProp: true,
          },
        ],

        // airbnb has TODO: set to "never", so we set it already
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
        "react/state-in-constructor": ["error", "never"],

        // airbnb has TODO: set to "static public field", so we set it already
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
        "react/static-property-placement": ["error", "static public field"],

        // force import sorting since we like to sort (uses plugin instead of sort-imports for proper autofix)
        // https://github.com/lydell/eslint-plugin-simple-import-sort
        //
        "simple-import-sort/imports": "error",
        // "simple-import-sort/imports": [
        //   "error",
        //   {
        //     "groups": [["^\\u0000", "^@?\\w", "^[^.]", "^\\."]]
        //   }
        // ],

        // force keys sorting in destructuring since we like to sort
        // https://github.com/mthadley/eslint-plugin-sort-destructure-keys
        "sort-destructure-keys/sort-destructure-keys": [
          "error",
          {
            caseSensitive: false,
          },
        ],
      },
    },
  ],
  settings: {
    react: {
      version: "detect", // React version. "detect" automatically picks the version you have installed.
    },
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
