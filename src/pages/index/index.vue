<template>
    <view class="content">
        <mp-test></mp-test>
        123
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const msg = ref<string>('你好');
</script>

<style lang="scss" scoped>
.test {
    background-color: #ffffff;
}
</style>
