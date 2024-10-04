// packages/package-a/vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,       // Ativa variáveis globais como `describe`, `it`, e `expect`
    environment: 'jsdom', // Define o ambiente como jsdom para simular o navegador7
    setupFiles: './setupTests.js' // Certifique-se de que o caminho está correto
  },
});
