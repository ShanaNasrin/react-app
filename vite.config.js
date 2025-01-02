import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});



// // vite.config.js
// export default {
//   server: {
//     host: '0.0.0.0',  // This makes the app accessible on any device in the network
//     port: 3000,        // You can change this to any port you like
//   },
// };