import js from '@eslint/js';
import vue from 'eslint-plugin-vue';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['vendor/**/*', 'node_modules/**/*', 'public/build/**/*'],
  },
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  prettier,
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        // Node.js globals for build tools
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        // Laravel/Vite globals
        route: 'readonly',
        axios: 'readonly',
      },
    },
    rules: {
      // Vue.js specific rules
      'vue/multi-word-component-names': 'warn',
      'vue/no-unused-vars': 'error',
      'vue/no-unused-components': 'warn',

      // General JavaScript rules
      'no-console': 'warn',
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'prefer-const': 'error',
      'no-var': 'error',

      // Code style (handled by Prettier, but some logical rules)
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  {
    // Configuration files
    files: ['*.config.js', '*.config.mjs', 'vite.config.*'],
    languageOptions: {
      globals: {
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
    },
  },
];
