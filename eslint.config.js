// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const esLintImportPlugin = require('eslint-plugin-import');


module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    plugins: {
      esLintImportPlugin
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      eslintPluginPrettierRecommended,
      esLintImportPlugin.flatConfigs?.recommended
    ],
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/prefer-inject": "off",      
      "prettier/prettier": ["error", { "endOfLine": "auto" }],
      "no-console": ["error", { allow: ["warn", "error"] }],
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "kitsoone",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "kitsoone",
          style: "kebab-case",
        },
      ],
      "@angular-eslint/prefer-on-push-component-change-detection": ["error"],
      "@angular-eslint/contextual-lifecycle": ["error"],
      "@angular-eslint/no-async-lifecycle-method": ["error"],
      "@angular-eslint/no-conflicting-lifecycle": ["error"],
      "@angular-eslint/no-empty-lifecycle-method": ["error"],
      "@angular-eslint/no-lifecycle-call": ["error"],
      "@angular-eslint/sort-lifecycle-methods": ["error"],
      "@angular-eslint/use-lifecycle-interface": ["error"],
      "@angular-eslint/relative-url-prefix": "error",
      "@typescript-eslint/no-inferrable-types": 'off',
      "@angular-eslint/no-host-metadata-property": "off",
      "@typescript-eslint/member-ordering": [
        "error",
        {
          "default": [
            "private-decorated-field",
            "protected-decorated-field",
            "public-decorated-field",
            "private-readonly-field",
            "private-field",
            "protected-readonly-field",
            "protected-field",
            "public-readonly-field",
            "public-field",
            "get",
            "set",
            "constructor",
            "instance-method",
            "protected-method",
            "public-method",
            "private-method"
          ]
        }
      ],
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          "allowExpressions": true
        }
      ],
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          "accessibility": "explicit",
          "overrides": {
            "constructors": "no-public",
            "properties": "explicit",
            "methods": "explicit",
            "parameterProperties": "explicit"
          }
        }
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "args": "all",
          "argsIgnorePattern": "^_",
          "caughtErrors": "all",
          "caughtErrorsIgnorePattern": "^_",
          "destructuredArrayIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "ignoreRestSiblings": true
        }
      ],
      "@typescript-eslint/no-empty-object-type": ["error", { allowInterfaces: "always" }],
      "@typescript-eslint/consistent-type-definitions": "off",      
      "import/no-unresolved": "off",
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            {
              target: "./src/app/modules/*/**",
              from: "../*",
              except: ["./", "../"],
              message: "Modules cannot import directly from other modules.",
            },
            {
              target: "./src/app/core/**",
              from: "./src/app/modules/**",
              message: "Core cannot import from modules.",
            },
            {
              target: "./src/app/core/**",
              from: "./src/app/layout/**",
              message: "Core cannot import from layout.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
    ],
    rules: {},
  }
);
