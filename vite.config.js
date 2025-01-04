import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Increase the assets inline limit for larger images
    assetsInlineLimit: 4096,  // 4KB (default), adjust as needed

    // Customize the output directory structure for assets and filenames
    rollupOptions: {
      output: {
        // Ensure the assets are placed into the assets folder with hashed filenames
        assetFileNames: 'assets/[name].[hash][extname]',
      },
    },
  },
  // Base URL configuration for deployment
  base: '/',  // Adjust the base URL if deploying to a subdirectory (e.g., '/myapp/')

  // Optimize dependencies if needed
  optimizeDeps: {
    include: ['react'], // Add specific dependencies if needed
  },

  // Server configuration (useful for local dev)
  server: {
    port: 3000, // Customize the port if needed
    open: true,  // Automatically open the browser when the server starts
  },
});
