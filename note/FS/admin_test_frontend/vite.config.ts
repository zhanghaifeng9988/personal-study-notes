import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置别名
    alias: {
      '@': resolve(__dirname, './src'),}
  },
  server: {
    headers: {
      "Content-Security-Policy": "script-src 'self' 'unsafe-eval';", // 允许 unsafe-eval
    },
  },
  build: {
    target: 'es2022' // 支持顶级await
  }
})


