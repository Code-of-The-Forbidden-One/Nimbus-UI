import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import preferArrow from 'eslint-plugin-prefer-arrow';

const baseConfig = {
  ignores: ['dist'],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: {
      ...globals.browser,
      ...globals.node,
    },
    parser: tsParser,
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    '@typescript-eslint': tseslint,
    'import': importPlugin,
    'prettier': prettier,
    'prefer-arrow': preferArrow,
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'quotes': ['error', 'single'],
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^h$',
      }
    ],
    'no-console': 'error',
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2],
    'max-len': ['warn', { code: 80 }],
    'prettier/prettier': ['error'],
    'eol-last': ['error', 'always'],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^h$',
      }
    ],
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'no-duplicate-imports': 'error',
    'no-magic-numbers': ['warn', { ignore: [0, 1] }],
    'curly': 'error',
    'prefer-const': 'error',
    'no-throw-literal': 'error',
    'func-style': ['error', 'expression'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'space-before-function-paren': ['error', 'never'],
    'no-extra-semi': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'class',
        'format': ['PascalCase']
      },
      {
        'selector': 'interface',
        'format': ['PascalCase']
      },
      {
        'selector': 'enum',
        'format': ['PascalCase']
      }
    ],
    'import/prefer-default-export': 'error',
    'import/no-duplicates': 'error',
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        allowStandaloneDeclarations: false,
      },
    ],
  },
};

const extendedConfig = {
  rules: {
    'max-lines': ['warn', { 'max': 300, 'skipBlankLines': true, 'skipComments': true }],
    'max-lines-per-function': ['warn', { 'max': 50, 'skipComments': true }],
    'complexity': ['warn', { 'max': 10 }],
    'import/no-cycle': ['error', { 'maxDepth': 1 }],
    'no-unnecessary-condition': 'error',
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    'prettier/prettier': ['error', { 'singleQuote': true, 'trailingComma': 'all' }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'variable',
        'format': ['camelCase'],
        'leadingUnderscore': 'allow',
        'filter': {
          'regex': '^(data|temp|foo|bar)$',
          'match': false
        }
      }
    ],
    'import/no-named-as-default-member': 'error',
    'sort-imports': ['error', { 'ignoreCase': false, 'ignoreDeclarationSort': true }]
  }
};

export default [
  js.configs.recommended,
  {
    ...baseConfig,
    rules: {
      ...baseConfig.rules,
      ...reactHooks.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...extendedConfig.rules,
    },
  },
  {
    files: ['**/*.{ts,tsx}', 'packages/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },
];
