<template>
    <swiper-item>
        <view class="swiper-item">
            <scroll-view
                style="width: 100%; min-height: 0; overflow: visible; height: 100%"
                :scroll-y="true">
                <slot />
            </scroll-view>
        </view>
    </swiper-item>
</template>
<script setup lang="ts">
defineProps({
    title: String,
});
</script>
<style scoped lang="scss">
.swiper-item {
    width: 100%;
    height: 100%;
    min-height: 0;
    box-sizing: border-box;
    overflow: visible;
}
</style>
