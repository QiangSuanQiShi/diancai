<script>
import { useMpStore } from '@/store';

export default {
    onLaunch() {
        console.log('App Launch');
    },
    async onShow() {
        const store = useMpStore();

        if (!store.isLogin) {
            await store.init();
        }
    },
    onHide() {
        console.log('App Hide');
    },
};
</script>

<style scoped lang="scss"></style>
