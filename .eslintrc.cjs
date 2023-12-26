/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'max-lines-per-function': 'off',
      },
    },
    {
      files: ['*.cjs'],
      rules: {
        'max-lines': 'off',
      },
    },
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
  "env": {
    "es2024": true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  plugins: ["@typescript-eslint", "unicorn", "sonarjs"],
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended", "plugin:unicorn/recommended", "plugin:sonarjs/recommended"],
  rules: {
    "unicorn/no-useless-undefined": "off",
    "unicorn/no-null": "off",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-misused-promises": [2, {
      "checksVoidReturn": {
        "attributes": false
      }
    }],
    "unicorn/prevent-abbreviations": [
      "error",
      {
        "replacements": {
          "props": false,
          "ref": false,
          "src": false,
        }
      }
    ],
    "unicorn/no-keyword-prefix": "off",
    "unicorn/no-array-for-each": "off",
    "unicorn/better-regex": "error",
    'max-lines-per-function': [
      'error',
      {
        max: 30,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      }],
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn"],
    "unicorn/no-await-expression-member": "off",
  },
};

module.exports = config;
