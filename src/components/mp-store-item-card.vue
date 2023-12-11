<script setup lang="ts">
import { computed } from 'vue';
import MpAdd from '@/components/mp-add.vue';
import { useMpStore } from '@/store';

type FoodSkuItemResponse = {
    id: string;
    createTime: string;
    foodImg: string;
    foodStats: string;
    merchantFoodType: string;
    merchantId: string;
    money: number;
    name: string;
    salesNum: number;
    updateTime: string;
};
const props = withDefaults(defineProps<FoodSkuItemResponse>(), {});

const store = useMpStore();

const tags = computed<string[]>(() => {
    let ts: string[] = [];
    ts = props.foodStats.split(',').map((item) => {
        return item.split(':')[1].replaceAll('"', '').replaceAll('}', '');
    });
    return ts;
});

const onClick = () => {
    store.addCart(props);
};
</script>

<template>
    <mp-sheet>
        <view class="mp-store-item-card">
            <view class="banner">
                <u-image
                    radius="4"
                    :show-loading="true"
                    :src="foodImg"
                    width="160rpx"
                    height="160rpx"></u-image>
            </view>

            <view class="info">
                <view class="title">
                    <text>{{ name }}</text>
                </view>
                <view class="tags">
                    <text
                        v-for="(tag, index) in tags"
                        :key="index">
                        {{ tag }}
                    </text>
                </view>

                <view class="label">
                    <view class="value">
                        <text>月销{{ salesNum }}</text>
                    </view>
                </view>

                <view class="price">
                    <mp-price
                        size="32rpx"
                        icon-size="18"
                        :price="money + ''"></mp-price>
                    <view> <mp-add @click="onClick"></mp-add> </view>
                </view>
            </view>
        </view>
    </mp-sheet>
</template>

<style scoped lang="scss">
.mp-store-item-card {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 32rpx;

    & > .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & > .title {
            font-size: 32rpx;
            font-weight: bold;
        }

        & > .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8rpx;
            font-size: 20rpx;
            & > .tag-text {
                padding: 4rpx;
                color: $u-text-title;
                background-color: #e3e3e3;
                border-radius: 8rpx;
            }
        }

        & > .price {
            display: flex;
            justify-content: space-between;
        }
    }

    .label {
        & > .value {
            font-size: 20rpx;
            color: $u-main-text;
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
