<script setup lang="ts"></script>

<template>
    <mp-sheet
        title="本地大牌"
        extra-label="更多"
        show-header
        show-extra
        gap="32rpx">
        <template #header>
            <view>
                <text class="title">本地打牌</text>
            </view>
        </template>

        <view class="items">
            <view class="item">
                <view class="item-image">
                    <image
                        mode="widthFix"
                        src="https://tse4-mm.cn.bing.net/th/id/OIP-C.ly_X2rhcHm8Ds510XnRMlQHaE8?w=296&h=198&c=7&r=0&o=5&pid=1.7"></image>
                </view>
                <view class="item-title">
                    <text>本地大牌</text>
                </view>
            </view>
            <view class="item">
                <view class="item-image">
                    <image
                        mode="widthFix"
                        src="https://tse4-mm.cn.bing.net/th/id/OIP-C.ly_X2rhcHm8Ds510XnRMlQHaE8?w=296&h=198&c=7&r=0&o=5&pid=1.7"></image>
                </view>
                <view class="item-title">
                    <text>本地大牌</text>
                </view>
            </view>
            <view class="item">
                <view class="item-image">
                    <image
                        mode="widthFix"
                        src="https://tse4-mm.cn.bing.net/th/id/OIP-C.ly_X2rhcHm8Ds510XnRMlQHaE8?w=296&h=198&c=7&r=0&o=5&pid=1.7"></image>
                </view>
                <view class="item-title">
                    <text>本地大牌</text>
                </view>
            </view>
        </view>
    </mp-sheet>
</template>

<style scoped lang="scss">
.title {
    font-size: 32rpx;
    font-weight: bold;
}
.items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32rpx;

    & > .item {
        flex: 1;
        & > .item-image {
            width: 100%;
            & > image {
                border-radius: 8rpx;
                width: 100%;
            }
        }
        & > .item-title {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 32rpx;
        }
    }
}
</style>
