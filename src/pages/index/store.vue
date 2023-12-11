<template>
    <view class="content">
        <view class="banner"></view>
        <view class="store-content">
            <view class="store">
                <view class="store-info">
                    <view class="store-info-logo">
                        <u-image
                            radius="4"
                            :show-loading="true"
                            :src="merchant.merchantImg"
                            width="80rpx"
                            height="80rpx"></u-image>
                    </view>
                    <view class="store-info-name">
                        <text class="u-line-1"> {{ merchant.userName }} </text>
                        <view class="tags">
                            <text class="tag-text"> 1人份 </text>
                        </view>
                    </view>
                    <view>
                        <u-button
                            text="收藏"
                            size="mini"
                            plain></u-button>
                    </view>
                </view>
                <view class="store-notice u-line-1">
                    <text>我在这里写公告</text>
                </view>
            </view>
        </view>
        <view class="main-content">
            <view class="tabs">
                <u-tabs
                    :current="current"
                    :duration="200"
                    line-color="#12c294"
                    :list="list1"
                    @change="onTabChange"
                    @click="click"></u-tabs>
            </view>
            <swiper
                :duration="200"
                class="mp-tab-swiper"
                :current="current"
                @change="onPageChange">
                <swiper-item>
                    <view class="swiper-item">
                        <scroll-view
                            style="width: 100%; min-height: 0; overflow: visible; height: 100%"
                            :scroll-y="true">
                            <mp-menu :food-sku-items-menu="createFoodMenu"></mp-menu>
                        </scroll-view>
                    </view>
                </swiper-item>

                <swiper-item>
                    <view class="swiper-item">
                        <scroll-view
                            style="width: 100%; min-height: 0; overflow: visible; height: 100%"
                            :scroll-y="true">
                            <view>
                                <mp-comment></mp-comment>
                                <mp-comment></mp-comment>
                                <mp-comment></mp-comment>
                                <mp-comment></mp-comment>
                                <mp-comment></mp-comment>
                            </view>
                        </scroll-view>
                    </view>
                </swiper-item>
            </swiper>
        </view>
        <view class="store-footer safe-bottom">
            <mp-settlement-bar></mp-settlement-bar>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import merchants from '@/api/merchants';
import foodSkus from '@/api/foodSku';
import { useMpStore } from '@/store';

type foodSkuItemsMenu = {
    type: string;
    items: MpApi.FoodSkuItemResponse[];
};

const merchantId = ref<number>(0);
const id = ref<number>(0);
const loading = ref<boolean>(false);
const store = useMpStore();

const merchant = ref<MpApi.MerchantResponse>({
    id: '',
    userName: '',
    isBrush: 0,
    merchantImg: '',
    phone: '',
    salesNum: 0,
    star: 0,
    createTime: '',
    updateTime: '',
});

const foodSkuItems = ref<MpApi.FoodSkuItemResponse[]>([]);

const current = ref<number>(0);
const list1 = [
    {
        name: '点菜',
    },
    {
        name: '评价',
    },
];

const createFoodMenu = computed<foodSkuItemsMenu[]>(() => {
    const menus: foodSkuItemsMenu[] = [];

    const ms: any = [];
    foodSkuItems.value.forEach((item: MpApi.FoodSkuItemResponse) => {
        if (ms[item.merchantFoodType] != null && ms[item.merchantFoodType].length > 0) {
            ms[item.merchantFoodType] = [...ms[item.merchantFoodType], item];
        } else {
            ms[item.merchantFoodType] = [item];
        }
    });

    for (const key in ms) {
        menus.push({
            type: key,
            items: ms[key],
        });
    }
    return menus;
});

const click = (item: any) => {
    console.log('item', item);
};

const onPageChange = (e: any) => {
    current.value = e.detail.current;
};

const onTabChange = (tab: any) => {
    current.value = tab.index;
};

const initFoodSkus = async () => {
    try {
        loading.value = true;
        foodSkuItems.value = await foodSkus.selectFoodByMerchantID(merchantId.value);
        loading.value = false;
    } catch (e) {
        loading.value = false;
    }
};
const initData = async () => {
    try {
        loading.value = true;
        merchant.value = await merchants.show(merchantId.value);
        loading.value = false;
    } catch (e) {
        loading.value = false;
    }
};

onLoad(async (query: any) => {
    store.clearCart();
    merchantId.value = query?.merchantId;
    id.value = query?.id;
    await initData();
    await initFoodSkus();
});
</script>

<style lang="scss">
.content {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    & > .banner {
        background-color: $u-primary;
        width: 100%;
        height: 160rpx;
        margin-bottom: -160rpx;
    }

    & > .store-content {
        padding: 24rpx;
        width: 100%;
        box-sizing: border-box;

        & > .store {
            box-sizing: border-box;
            width: 100%;
            border-radius: 16rpx;
            background-color: #ffffff;
            padding: 24rpx;
            box-shadow: 0 0 0.2px rgba(0, 0, 0, 0.02), 0 0 0.5px rgba(0, 0, 0, 0.028),
                0 0 1px rgba(0, 0, 0, 0.035), 0 0 1.8px rgba(0, 0, 0, 0.042), 0 0 3.3px rgba(0, 0, 0, 0.05),
                0 0 8px rgba(0, 0, 0, 0.07);
            & > .store-info {
                margin-bottom: 16rpx;
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                gap: 16rpx;

                & > .store-info-name {
                    flex: 1;
                    font-size: 32rpx;
                    display: flex;
                    flex-direction: column;

                    gap: 8rpx;

                    & > .tags {
                        font-size: 20rpx;
                        color: rgba(0, 0, 0, 0.65);
                    }
                }
            }

            & > .store-notice {
                margin-bottom: 24rpx;
                font-size: 24rpx;
                color: rgba(0, 0, 0, 0.65);
            }
        }
    }

    & > .main-content {
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}

.u-line-1 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}

.swiper-item {
    width: 100%;
    height: 100%;
    min-height: 0;
    box-sizing: border-box;
    overflow: visible;
}

.mp-tab-swiper {
    height: auto;
    flex: 1;
}

.store-footer {
    width: 100%;
    box-sizing: border-box;
}

.safe-bottom {
    padding: 0 32rpx;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
}
</style>
