import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import vue from '@vitejs/plugin-vue' plugins: [ vue() ] ,

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react() ] ,
  server: {
    port: 3000,
  },
});
