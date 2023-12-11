<script setup lang="ts">
interface foodSkuResponse {
    id: string;
    name: string;
    salesNum: number;
    merchantFoodType: string;
    money: null;
    merchantId: string;
    foodImg: string;
    foodStats: string;
    createTime: string;
    updateTime: string;
}

// https://tse4-mm.cn.bing.net/th/id/OIP-C.ly_X2rhcHm8Ds510XnRMlQHaE8?w=296&h=198&c=7&r=0&o=5&pid=1.7
const emits = defineEmits(['click']);

const props = withDefaults(defineProps<foodSkuResponse>(), {});

const onClick = () => {
    emits('click', props);
};
</script>

<template>
    <mp-sheet>
        <view
            @click="onClick"
            class="card">
            <view class="banner">
                <u-image
                    radius="4"
                    :show-loading="true"
                    :src="foodImg"
                    width="160rpx"
                    height="160rpx"></u-image>
            </view>
            <view class="info">
                <slot>
                    <view class="info-title">
                        <text class="u-line-1">{{ name }}</text>
                    </view>
                    <view class="score"> 5分 </view>

                    <view class="sales">
                        <view class="sales-info">
                            <text>月售{{ salesNum }}</text>
                            <text>人均￥11000</text>
                        </view>

                        <view class="map">
                            <u-icon name="map"></u-icon>
                            <text>100m</text>
                        </view>
                    </view>
                </slot>
            </view>
        </view>
    </mp-sheet>
</template>

<style scoped lang="scss">
.card {
    display: flex;
    justify-content: space-between;
    gap: 32rpx;

    & > .banner {
        & > .image {
            border-radius: 8rpx;
        }
    }

    & > .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        & > .info-title {
            font-size: 32rpx;
            font-weight: bold;
        }

        & > .info-desc {
            font-size: 26rpx;
            color: rgba(0, 0, 0, 0.85);
        }

        & > .score {
            color: $u-primary;
            font-size: 28rpx;
        }

        & > .sales {
            & > .map {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 4rpx;
            }

            & > .sales-info {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 8rpx;
            }

            width: 100%;
            font-size: 20rpx;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: rgba(0, 0, 0, 0.65);
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
