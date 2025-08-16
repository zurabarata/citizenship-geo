import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        react(),
    ],
    define: {
        'process.env.TAMAGUI_TARGET': JSON.stringify('web'),
        'process.env.NODE_ENV': JSON.stringify('development'),
    },
    resolve: {
        alias: {
            '@': '/',
            'react-native': 'react-native-web',
            'tamagui': '@tamagui/web',
        },
        extensions: ['.web.js', '.web.jsx', '.web.ts', '.web.tsx', '.js', '.jsx', '.ts', '.tsx'],
    },
    optimizeDeps: {
        include: ['react-native-web', '@tamagui/web'],
        exclude: ['@tamagui/core', '@tamagui/config', '@tamagui/themes'],
    },
    server: {
        port: 3000,
        host: true,
    },
    build: {
        target: 'esnext',
        minify: 'esbuild',
    },
});
