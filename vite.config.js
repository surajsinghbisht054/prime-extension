import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'static/primeflex-extension/assets/[name].js',  // For JavaScript
        chunkFileNames: 'static/primeflex-extension/assets/[name].js',  // For JS chunks
        assetFileNames: 'static/primeflex-extension/assets/[name].[ext]', // For CSS and other assets
      }
    }
  }
});
