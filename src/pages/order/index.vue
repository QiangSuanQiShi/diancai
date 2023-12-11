<template>
    <view>
        <!--        <u-tabs-->
        <!--            line-color="#12c294"-->
        <!--            :duration="200"-->
        <!--            :scrollable="false"-->
        <!--            :current="current"-->
        <!--            :list="list1">-->
        <!--        </u-tabs>-->
        <!--        <view>-->
        <!--            <mp-order-card-->
        <!--                @onDetail="onOrderDetail"-->
        <!--                @action="onAction"></mp-order-card>-->
        <!--            <mp-order-card></mp-order-card>-->
        <!--            <mp-order-card></mp-order-card>-->
        <!--        </view>-->
        <mp-refresh-list
            auto
            :query="orders.indexPage">
            <template #header>
                <u-tabs
                    line-color="#12c294"
                    :duration="200"
                    :scrollable="false"
                    :current="current"
                    :list="list1">
                </u-tabs>
            </template>
            <template #list="items: any">
                <mp-order-card
                    v-bind="item"
                    v-for="(item, index) in items.items"
                    :key="`order-item${index}`"></mp-order-card>
            </template>
        </mp-refresh-list>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import orders from '@/api/orders';

const current = ref<number>(0);

const list1 = [
    {
        name: '全部订单',
        index: 0,
    },
    {
        name: '待评价',
        index: 1,
    },
];

const onOrderDetail = () => {
    uni.$mp.to('/pages/order/detail');
};

const onAction = (action: string) => {
    if (action === 'comment') {
        uni.$mp.to('/pages/order/comment');
    }
};
</script>

<style lang="scss"></style>
