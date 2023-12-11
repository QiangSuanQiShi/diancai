<template>
    <view class="content">
        <view class="list">
            <mp-refresh-list
                auto
                :query="foodSku.getYouWantEat">
                <template #header>
                    <view class="search">
                        <u-search
                            border-color="#12c294"
                            :show-action="false"></u-search>
                    </view>
                </template>
                <template #list="items: Item">
                    <view
                        class="list"
                        :key="index"
                        v-for="(item, index) in items?.items">
                        <mp-commodity-item-card
                            :key="i"
                            v-for="(p, i) in item['汇总（去重，不足15个追加口味）']"
                            v-bind="p"
                            @click="onClick"></mp-commodity-item-card>
                    </view>
                    <mp-local-cuisine></mp-local-cuisine>
                </template>
            </mp-refresh-list>
        </view>
    </view>
</template>

<script setup lang="ts">
import foodSku from '@/api/foodSku';

type Item = {
    items: any[];
};

const onClick = (response: any) => {
    console.log(response.merchantId);
    console.log(response.id);
    uni.$mp.to(`/pages/index/store?merchantId=${response.merchantId}&id=${response.id}`);
};
</script>

<style lang="scss">
.content,
page {
    background-color: $u-bg-color;
}
.content {
}

.search {
    padding: 32rpx;
    box-sizing: border-box;
}

.list {
    padding: 32rpx;
}
</style>
