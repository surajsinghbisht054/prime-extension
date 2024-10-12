import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',  // For JavaScript
        chunkFileNames: '[name].js',  // For JS chunks
        assetFileNames: '[name].[ext]', // For CSS and other assets
      },
      input: 'src/main.js'
    }
  }
});
