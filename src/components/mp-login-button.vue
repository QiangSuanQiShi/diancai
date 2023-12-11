<script setup lang="ts">
import type { PropType } from 'vue';
import { ref } from 'vue';
import accounts from '@/api/accounts';
import { useMpStore } from '@/store';
import { TOKEN_NAME } from '@/config';

defineProps({
    type: {
        type: String as PropType<'info' | 'primary' | 'error' | 'warning' | 'success'>,
        default: 'primary',
    },
    text: {
        type: String,
        default: '登录按钮',
    },
    openType: {
        type: String,
        default: 'getPhoneNumber',
    },
    plain: {
        type: Boolean,
        default: false,
    },
    icon: {
        type: String,
        default: 'weixin-fill',
    },
});

const emits = defineEmits(['success']);

const loading = ref<boolean>(false);
const store = useMpStore();

const getUserPhoneNumber = (res: any) => {
    if (res.detail.code) {
        uni.login({
            provider: 'weixin',
            async success(loginRes: any) {
                try {
                    loading.value = true;
                    const data: MpApi.UserResponse = await accounts.login({
                        js_code: loginRes.code,
                        code: res.detail.code,
                    });
                    store.update(data);
                    uni.setStorageSync(TOKEN_NAME, data.token);
                    loading.value = false;
                    emits('success');
                } catch (e) {
                    loading.value = false;
                }
            },
        });
    }
};
</script>

<template>
    <u-button
        :loading="loading"
        :type="type"
        :text="text"
        :openType="openType"
        :plain="plain"
        :icon="icon"
        @getphonenumber="getUserPhoneNumber"></u-button>
</template>

<style scoped lang="scss"></style>
