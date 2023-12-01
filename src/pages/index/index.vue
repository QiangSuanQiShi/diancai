<template>
    <view class="content">
        <view class="search">
            <u-search
                border-color="#12c294"
                :show-action="false"></u-search>
        </view>
        <view>
            <swiper autoplay>
                <swiper-item>1</swiper-item>
                <swiper-item>2</swiper-item>
                <swiper-item>3</swiper-item>
            </swiper>
        </view>
        <view class="list">
            <mp-commodity-item-card @click="onClick"></mp-commodity-item-card>
            <mp-local-cuisine></mp-local-cuisine>
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
        padding: 32rpx;
        box-sizing: border-box;
    }

    & > .list {
        padding: 32rpx;
    }
}
</style>
