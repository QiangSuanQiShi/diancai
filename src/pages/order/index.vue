<template>
    <view>
        <u-tabs
            line-color="#12c294"
            :duration="200"
            :scrollable="false"
            :current="current"
            :list="list1">
        </u-tabs>
        <view>
            <mp-order-card @onDetail="onOrderDetail"></mp-order-card>
            <mp-order-card></mp-order-card>
            <mp-order-card></mp-order-card>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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
</script>

<style lang="scss"></style>
