import expoConfig from 'eslint-config-expo/flat.js';
import stylistic from '@stylistic/eslint-plugin';

export default [
  ...expoConfig,
  {
    ignores: [
      '.expo/**',
      '.idea/**',
      '.netlify/**',
      'dist/*',
      'node_modules/**',
    ],
  },
  {
    plugins: {
      '@stylistic': stylistic,
    },
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-multi-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
    },
  },
];
