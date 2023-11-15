/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    'extends': [
        'airbnb-base',
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:prettier/recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    parser: 'vue-eslint-parser',
    plugins: ['vue', 'prettier', '@typescript-eslint'],
    rules: {
        'vue/multi-word-component-names': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-console': 'off',
        'no-undef': 'off',
        'linebreak-style': 'off',
        'prefer-promise-reject-errors': 'off',
        'consistent-return': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'max-len': ['error', 240],
        'no-new': 'off',
        'no-async-promise-executor': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        camelcase: 'off',
        indent: ['error', 4],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'prettier/prettier': 'error',
    }
}