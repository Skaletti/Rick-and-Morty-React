/// <reference types="vite/client" />
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '') as ImportMetaEnv

  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: 4173,
      proxy: {
        '/api': {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@@': fileURLToPath(new URL('./', import.meta.url)),
        public: fileURLToPath(new URL('./public', import.meta.url)),
        app: fileURLToPath(new URL('./src/app', import.meta.url)),
        '#processes': fileURLToPath(new URL('./src/processes', import.meta.url)),
        '#pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
        '#widgets': fileURLToPath(new URL('./src/widgets', import.meta.url)),
        '#features': fileURLToPath(new URL('./src/features', import.meta.url)),
        '#entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
        '#shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
      },
    },
  }
})
