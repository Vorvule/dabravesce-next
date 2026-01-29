const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
  {
    files: [ '**/*.{js,jsx,ts,tsx}' ], ignores: [
      'node_modules/',
      'dist/',
      'build/'
    ]
  },

  {
    rules: {
      'prefer-const': 'error', 'no-console': 'error'
    }
  }
]);
