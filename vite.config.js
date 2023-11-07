import { resolve } from 'path';
import uni from '@dcloudio/vite-plugin-uni';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [uni()],
    server: {
        port: 1314,
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('./src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                // 两种方式都可以
                additionalData: '@import "@/theme.scss";',
            },
        },
    },
});
