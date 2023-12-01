<script setup lang="ts">
defineProps({
    price: {
        type: [String],
        default: '0.00',
    },
    iconColor: {
        type: [String],
        default: '#e1251b',
    },
});
</script>

<template>
    <view class="mp-price">
        <u-icon
            name="rmb"
            size="24"
            :color="iconColor"></u-icon>
        <text class="price-color">{{ price }}</text>
    </view>
</template>

<style scoped lang="scss">
.mp-price {
    display: flex;
    justify-content: center;
    align-items: center;
    & > .price-color {
        color: $u-price-color;
    }
}
</style>
