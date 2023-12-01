<script setup lang="ts">
const emits = defineEmits(['onDetail']);
</script>

<template>
    <view class="mp-order-card">
        <view class="store-info">
            <view class="store-logo">
                <u-image
                    show-loading
                    width="64rpx"
                    height="64rpx"
                    src="data:image/jpeg;base64,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">
                </u-image>
            </view>
            <view class="mp-order-value">
                <view class="store-info-desc">
                    <view class="title">
                        <view class="u-line-1">
                            <text>麦当劳金拱门(这里可以写地址)</text>
                        </view>
                        <view>
                            <u-icon name="arrow-right"></u-icon>
                        </view>
                    </view>
                    <view class="status">
                        <text>已完成</text>
                    </view>
                </view>

                <view
                    @click="emits('onDetail')"
                    class="mp-order">
                    <view class="mp-order-items">
                        <view class="mp-order-item">
                            <view class="mp-order-label">
                                <text>薯条</text>
                            </view>
                            <view class="mp-order-count">
                                <u-icon
                                    name="close"
                                    size="12"></u-icon>
                                <text>1</text>
                            </view>
                        </view>
                        <view class="mp-order-item">
                            <view class="mp-order-label">
                                <text>薯条</text>
                            </view>
                            <view class="mp-order-count">
                                <u-icon
                                    name="close"
                                    size="12"></u-icon>
                                <text>1</text>
                            </view>
                        </view>
                        <view class="mp-order-item">
                            <view class="mp-order-label">
                                <text>薯条</text>
                            </view>
                            <view class="mp-order-count">
                                <u-icon
                                    name="close"
                                    size="12"></u-icon>
                                <text>1</text>
                            </view>
                        </view>
                    </view>
                    <view class="mp-order-count">
                        <text>共2件商品，实付</text>
                        <view class="price">
                            <u-icon
                                name="rmb"
                                color="#000"></u-icon>
                            <text>22.8</text>
                        </view>
                    </view>
                    <view class="mp-order-operation">
                        <u-button
                            custom-style="width: auto;  margin: 0;"
                            size="normal"
                            type="primary"
                            icon="chat"
                            plain>
                            评价
                        </u-button>
                        <u-button
                            custom-style="width: auto;  margin: 0;"
                            size="normal"
                            type="primary"
                            plain>
                            再来一单
                        </u-button>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<style scoped lang="scss">
.mp-order-card {
    padding: 32rpx;
    border-bottom: 1px solid $u-border-color;

    & > .store-info {
        display: flex;
        justify-content: space-between;
        align-items: start;
        gap: 32rpx;

        & > .mp-order-value {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 32rpx;

            & > .store-info-desc {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 64rpx;

                & > .title {
                    max-width: 380rpx;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 32rpx;
                    font-weight: bold;
                }
                & > .title {
                    flex: 1;
                }

                & > .status {
                    font-size: 28rpx;
                }
            }

            & > .mp-order {
                & > .mp-order-items {
                    display: flex;
                    flex-direction: column;
                    gap: 8rpx;

                    & > .mp-order-item {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        & > .mp-order-label {
                            color: $u-main-text;
                        }

                        & > .mp-order-count {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            color: $u-main-text;
                        }
                    }
                }

                & > .mp-order-count {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    color: $u-main-text;
                    & > .price {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: $u-text-title;
                    }
                }

                & > .mp-order-operation {
                    margin-top: 32rpx;
                    display: flex;
                    justify-content: flex-end;
                    gap: 32rpx;
                }
            }
        }
    }
}

.u-line-1 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
</style>
