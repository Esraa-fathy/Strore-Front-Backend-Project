module.exports = {
    env: {
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        semi: ['error', 'always'],
        'no-console': 'off',
        'no-use-before-define': 'off',
        'no-unused-vars': 'off',
        'no-var': 'off',
        'prefer-const': 'off',
    }
  };
  