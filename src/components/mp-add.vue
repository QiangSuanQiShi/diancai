<script setup lang="ts">
import theme from '@/theme';

const emits = defineEmits(['click']);
</script>

<template>
    <view
        @click="emits('click')"
        class="mp-add">
        <u-icon
            bold
            size="12"
            name="plus"
            :color="theme.white"></u-icon>
    </view>
</template>

<style scoped lang="scss">
.mp-add {
    background-color: $u-primary;
    padding: 8rpx;
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
