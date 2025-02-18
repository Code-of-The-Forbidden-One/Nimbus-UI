import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';

const baseConfig = {
  ignores: ['dist'],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: {
      ... globals.browser,
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
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': 'warn',
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2],
    'max-len': ['warn', { code: 80 }],
    'prettier/prettier': ['error'],
    'eol-last': ['error', 'always'],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'no-duplicate-imports': 'error',
    'no-magic-numbers': ['warn', { ignore: [0, 1] }],
    'curly': 'error',
    'prefer-const': 'error',
    'no-throw-literal': 'error',
  },
};

export default [
  js.configs.recommended,
  {
    ...baseConfig,
    rules: {
      ...baseConfig.rules,
      ...reactHooks.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
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
