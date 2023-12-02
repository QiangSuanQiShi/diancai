<script setup lang="ts">
defineProps({
    showIcon: {
        type: Boolean,
        default: true,
    },
});
</script>

<template>
    <view class="settlement-bar">
        <view class="settlement-bar-count">
            <view class="settlement-bar-price">
                <view
                    v-if="showIcon"
                    class="icon">
                    <mp-badge value="3">
                        <u-icon
                            color="#fff"
                            size="40"
                            name="shopping-cart"></u-icon>
                    </mp-badge>
                </view>
                <text>合计</text>
                <mp-price
                    icon-size="16"
                    size="40rpx"
                    price="112"
                    color="#fff"
                    icon-color="#fff"></mp-price>
            </view>
        </view>
        <view class="settlement-bar-but">
            <text>提交订单</text>
        </view>
    </view>
</template>

<style scoped lang="scss">
.settlement-bar {
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    background-color: #323232;
    border-radius: 64rpx;
    display: flex;
    height: 96rpx;
    & > .settlement-bar-count {
        flex: 1;
        color: #ffffff;
        font-size: 28rpx;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        padding: 0 32rpx;

        & > .settlement-bar-price {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    & > .settlement-bar-but {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0 32rpx;
        background-color: $u-primary;
        font-weight: bold;
        font-size: 32rpx;
    }
}

.icon {
    margin-right: 16rpx;
}
</style>
