import js from '@eslint/js';
import vue from 'eslint-plugin-vue';
import prettier from 'eslint-config-prettier';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import vueParser from 'vue-eslint-parser';

export default [
  {
    ignores: ['vendor/**/*', 'node_modules/**/*', 'public/build/**/*'],
  },
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  prettier,
  {
    files: ['**/*.{js,mjs,cjs,vue,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        // Node.js globals for build tools
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        // Laravel/Vite globals
        route: 'readonly',
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
    // Vue files with proper parser
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: typescriptParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      // Vue specific rules
      'vue/multi-word-component-names': 'warn',
      // TypeScript rules for Vue
      '@typescript-eslint/no-unused-vars': 'error',
      'no-unused-vars': 'off', // Turn off base rule as @typescript-eslint rule is used
    },
  },
  {
    // TypeScript files (non-Vue)
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      // Override base rules that don't work well with TypeScript
      'no-unused-vars': 'off',
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
