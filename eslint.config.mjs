import tsParser from '@typescript-eslint/parser'; // Importa el parser de TypeScript

export default [
  {
    ignores: ['node_modules', 'dist'], // Archivos y carpetas a ignorar
    files: ['**/*.ts'], // Archivos TypeScript
    languageOptions: {
      parser: tsParser, // Usamos el parser de TypeScript
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module', // Soporte para módulos ECMAScript
        project: './tsconfig.json',
      },
    },
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      '@typescript-eslint/no-explicit-any': ['off', { ignoreRestArgs: true }],
      // "no-unused-vars": "error",
    },
  },
];
