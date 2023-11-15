import { resolve } from 'path';
import uni from '@dcloudio/vite-plugin-uni';
import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        Components({
            extensions: ['vue', 'tsx'],
            globs: [
                'src/components/mp-*.vue',
                'node_modules/z-paging/components/z-paging/z-paging.vue',
                'node_modules/z-paging/components/z-paging-*/z-paging-*.vue',
                'node_modules/uview-plus/components/u-*/u-*.vue',
            ],
        }),
        uni(),
        Unocss({
            presets: [presetUno(), presetAttributify(), presetIcons()],
        }),
        vueJsx(),
    ],
    server: {
        port: 1314,
    },
    resolve: {
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
