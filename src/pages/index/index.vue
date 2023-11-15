<template>
    <view class="content h">
        <mp-test></mp-test>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MpTest from '@/pages/components/mp-test.vue';

const msg = ref<string>('你好');
</script>

<style lang="scss" scoped>
.test {
    background-color: #ffffff;
}
</style>
