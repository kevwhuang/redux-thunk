import autoprefixer from 'autoprefixer';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
    appType: 'spa',
    base: '/',
    envDir: '.',
    envPrefix: 'VITE_',
    logLevel: 'info',
    publicDir: 'public',
    root: process.cwd(),
    plugins: [
        react(),
    ],
    build: {
        outDir: 'dist',
    },
    css: {
        postcss: {
            plugins: [
                autoprefixer,
            ],
        },
    },
    preview: {
        port: 3001,
    },
    server: {
        port: 3000,
    },
});
