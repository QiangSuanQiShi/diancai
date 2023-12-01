<template>
    <view class="content">
        <view class="state">
            <text class="state-title">订单已完成</text>
            <u-icon
                size="18"
                name="arrow-right"
                color="black"></u-icon>
        </view>

        <mp-sheet>
            <text>感谢您的购买</text>
            <u-divider></u-divider>
            <view class="operate">
                <view class="operate-item">
                    <u-icon
                        name="phone"
                        size="26"></u-icon>
                    <text>联系客服</text>
                </view>
                <view class="operate-item">
                    <u-icon
                        name="phone"
                        size="26"></u-icon>
                    <text>联系客服</text>
                </view>
            </view>
        </mp-sheet>

        <mp-sheet show-header>
            <template #header>
                <view class="store-title">
                    <view class="title-text u-line-1">
                        <text>麦当劳金拱门(这里可以写地址)</text>
                    </view>
                    <view>
                        <u-icon name="arrow-right"></u-icon>
                    </view>
                </view>
            </template>
            <view>
                <u-divider></u-divider>
                <view class="order-items">
                    <view class="order-item">
                        <view class="order-item-image">
                            <u-image
                                show-loading
                                width="80rpx"
                                height="80rpx"
                                src="data:image/jpeg;base64,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">
                            </u-image>
                        </view>
                        <view class="order-item-info">
                            <view class="order-item-info-header">
                                <view class="order-item-title">
                                    <text>全鸡汉堡</text>
                                </view>
                                <view class="price">
                                    <mp-price price="20.00"></mp-price>
                                </view>
                            </view>
                            <view class="tags">
                                <text>微辣,1人份</text>
                            </view>

                            <view class="count">
                                <u-icon
                                    name="close"
                                    size="12"></u-icon>
                                <text>1</text>
                            </view>
                        </view>
                    </view>
                </view>
                <u-divider></u-divider>
                <view class="order-count">
                    <text>合计</text>
                    <mp-price price="20.00"></mp-price>
                </view>
            </view>
        </mp-sheet>

        <mp-sheet padding="0">
            <view>
                <u-cell
                    :border="false"
                    title="期望时间">
                    <template #value>
                        <view class="cell-value">
                            <text>立刻</text>
                        </view>
                    </template>
                </u-cell>
                <u-cell
                    :border="false"
                    title="订单编号">
                    <template #value>
                        <view class="cell-value">
                            <text>123123124123123</text>
                        </view>
                    </template>
                </u-cell>
                <u-cell
                    :border="false"
                    title="下单时间">
                    <template #value>
                        <view class="cell-value">
                            <text>2023-10-10 10：00：00</text>
                        </view>
                    </template>
                </u-cell>
                <u-cell
                    :border="false"
                    title="支付方式">
                    <template #value>
                        <view class="cell-value">
                            <text>微信支付</text>
                        </view>
                    </template>
                </u-cell>
                <u-cell
                    :border="false"
                    title="餐具数量">
                    <template #value>
                        <view class="cell-value">
                            <text>按产量决定</text>
                        </view>
                    </template>
                </u-cell>
            </view>
        </mp-sheet>
    </view>
</template>

<script setup lang="ts">
import MpPrice from '@/components/mp-price.vue';
</script>

<style lang="scss">
.content,
page {
    background-color: $u-bg-color;
}

.content {
    padding: 32rpx;
    & > .state {
        margin-bottom: 32rpx;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 16rpx;
        & > .state-title {
            font-size: 40rpx;
            color: $u-text-title;
        }
    }
}

.operate {
    display: flex;
    justify-content: space-around;
    & > .operate-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 20rpx;
    }
}

.store-title {
    font-size: 28rpx;
    font-weight: bold;
    max-width: 300rpx;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & > .title-text {
        width: 100%;
    }
}

.order-items {
    & > .order-item {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 32rpx;
        & > .order-item-info {
            flex: 1;
            & > .order-item-info-header {
                display: flex;
                justify-content: space-between;
            }

            & > .tags {
                font-size: 24rpx;
                color: $u-text-secondary;
            }

            & > .count {
                font-size: 24rpx;
                color: $u-text-secondary;
                display: flex;
            }
        }
    }
}

.order-count {
    display: flex;
    justify-content: flex-end;
}

.cell-value {
    max-width: 400rpx;
}

.u-line-1 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
</style>
