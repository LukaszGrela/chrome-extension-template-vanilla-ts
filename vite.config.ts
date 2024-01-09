import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: ['popup.html', 'src/background.ts'],
      output: {
        entryFileNames: 'js/[name].js',
        assetFileNames: 'assets/[name][extname]',
        dir: 'extension',
      },
    },
  },
});
