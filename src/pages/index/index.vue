<template>
    <view class="content">
        <view class="search">
            <u-search></u-search>
        </view>
        <view class="list">
            <mp-commodity-item-card @click="onClick"></mp-commodity-item-card>
            <mp-commodity-item-card></mp-commodity-item-card>
            <mp-commodity-item-card></mp-commodity-item-card>
            <mp-commodity-item-card></mp-commodity-item-card>
            <mp-commodity-item-card></mp-commodity-item-card>
            <mp-commodity-item-card></mp-commodity-item-card>
        </view>
    </view>
</template>

<script setup lang="ts">
const onClick = () => {
    uni.$mp.to('/pages/index/store');
};
</script>

<style lang="scss">
.content,
page {
    background-color: $u-bg-color;
}
.content {
    & > .search {
        background-color: #ffffff;
        padding: 32rpx;
        box-sizing: border-box;
    }

    & > .list {
        padding: 32rpx;
    }
}
</style>
