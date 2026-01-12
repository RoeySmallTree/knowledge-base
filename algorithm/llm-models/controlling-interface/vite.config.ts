import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': join(__dirname, './src'),
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3006',
                changeOrigin: true,
            }
        }
    }
})
