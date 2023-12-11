<script setup lang="ts">
import { computed } from 'vue';

type Cart = {
    count: number;
    foodSkuId: string;
    foodSku: MpApi.foodSkuResponse;
};
const props = withDefaults(defineProps<Cart>(), {});

const tags = computed<string[]>(() => {
    let ts: string[] = [];
    ts = props.foodSku.foodStats.split(',').map((item) => {
        return item.split(':')[1].replaceAll('"', '').replaceAll('}', '');
    });
    return ts;
});
</script>

<template>
    <view class="cart-item">
        <view class="cart-item-image">
            <u-image
                radius="4"
                :show-loading="true"
                :src="foodSku.foodImg"
                width="80rpx"
                height="80rpx"></u-image>
        </view>
        <view class="cart-item-info">
            <view class="title u-line-2">
                <text>{{ foodSku.name }}</text>
            </view>
            <view class="tags">
                <text
                    v-for="(tag, index) in tags"
                    :key="index">
                    {{ tag }}
                </text>
            </view>
            <view class="cart-item-info-b">
                <mp-price
                    size="32rpx"
                    icon-size="16"
                    :price="foodSku.money + ''"></mp-price>
                <view>
                    <mp-steps-teller></mp-steps-teller>
                </view>
            </view>
        </view>
    </view>
</template>

<style scoped lang="scss">
.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16rpx;
    padding: 32rpx 0;
    border-bottom: 1px solid $u-border-color;
    & > .cart-item-image {
    }

    & > .cart-item-info {
        flex: 1;

        & > .title {
            font-size: 32rpx;
        }

        & > .tags {
            font-size: 24rpx;
            color: $u-main-text;
            display: flex;
            flex-flow: wrap;
            gap: 8rpx;
        }

        & > .cart-item-info-b {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
}

.u-line-2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>
