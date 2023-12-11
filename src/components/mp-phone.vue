<script setup lang="ts">
import type { CSSProperties } from 'vue';
import { computed } from 'vue';
import theme from '@/theme';

const props = defineProps({
    phone: {
        type: String,
    },
    safe: {
        type: Boolean,
        default: true,
    },
    canCall: {
        type: Boolean,
        default: true,
    },
    color: {
        type: String,
        default: theme.mainColor,
    },
    size: {
        type: String,
        default: '24rpx',
    },
});

const style = computed<CSSProperties>(() => {
    return {
        color: props.color,
        fontSize: props.size,
    };
});

const phoneText = computed(() => {
    // 如果启用了安全模式，并且有电话号码
    if (props.safe && props.phone) {
        // 电话号码脱敏
        return uni.$mp.phoneNumberConvert(props.phone);
    }
    // 否则直接返回电话号码
    return props.phone;
});
/**
 * 拨打电话的操作
 */
const onCall = () => {
    // 如果没有电话号码或者不能拨打电话，则不执行
    if (!props.phone || !props.canCall) return;
    // 调用拨打电话的方法
    uni.makePhoneCall({
        phoneNumber: props.phone,
    });
};
</script>

<template>
    <view
        @click="onCall"
        class="color-text">
        <text :style="style">
            {{ phoneText }}
        </text>
    </view>
</template>

<style scoped></style>
