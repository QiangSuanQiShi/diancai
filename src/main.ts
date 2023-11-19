import { createSSRApp } from 'vue';
import { createPinia } from 'pinia';
import uviewPlus from 'uview-plus';
import App from '@/App.vue';
import { $mp } from '@/plugins/helper';

export function createApp() {
    const app = createSSRApp(App);

    uni.$mp = $mp;

    app.use(uviewPlus);
    app.use(createPinia());

    return {
        app,
    };
}
