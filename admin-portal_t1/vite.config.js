import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    //host: '0.0.0.0',    //npm run dev -- --host 0.0.0.0
    port: 5173,
    // optional HMR settings for some networks/containers:
    // hmr: {
    //   host: '<your-machine-ip-or-domain>',
    //   port: 5173,
    // }
  }
})
