<script setup lang="ts">
import type { CSSProperties } from 'vue';
import { computed } from 'vue';
import theme from '@/theme';

const props = defineProps({
    price: {
        type: [String],
        default: '0.00',
    },
    size: {
        type: [String],
        default: '24rpx',
    },
    color: {
        type: [String],
        default: theme.priceColor,
    },
    iconColor: {
        type: [String],
        default: theme.priceColor,
    },
    iconSize: {
        type: [Number, String],
        default: 16,
    },
});

const style = computed<CSSProperties>(() => {
    return {
        fontSize: props.size,
        color: props.color,
    };
});
</script>

<template>
    <view class="mp-price">
        <u-icon
            name="rmb"
            :size="iconSize"
            :color="iconColor"></u-icon>
        <text
            :style="style"
            class="price-color"
            >{{ price }}</text
        >
    </view>
</template>

<style scoped lang="scss">
.mp-price {
    display: flex;
    justify-content: center;
    align-items: center;
    & > .price-color {
    }
}
</style>
