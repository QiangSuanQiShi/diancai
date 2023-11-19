<template>
    <view class="content">
        <view class="logo">
            <u-icon
                color="#1AAD19"
                name="weixin-fill"
                size="80"></u-icon>
        </view>
        <view class="login-button">
            <mp-login-button @success="onSuccess"></mp-login-button>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';

const url = ref<string>('');

const onSuccess = () => {
    if (url.value) {
        uni.$mp.to(url.value, 'redirect');
    } else {
        uni.navigateBack();
    }
};

onLoad((e: any) => {
    if (e.back && e.back !== '/pages/user/login') {
        url.value = decodeURIComponent(e.back);
    } else {
        url.value = decodeURIComponent('/pages/index/index');
    }
});
</script>

<style lang="scss">
.content,
page {
    background-color: $u-bg-color;
}
.content {
    padding: 48rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > .logo {
        margin: 25% 0;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 16rpx;
        box-shadow: 2.1px 1.6px 2.2px rgba(0, 0, 0, 0.02), 5.1px 3.9px 5.3px rgba(0, 0, 0, 0.028),
            9.6px 7.3px 10px rgba(0, 0, 0, 0.035), 17.2px 13px 17.9px rgba(0, 0, 0, 0.042),
            32.2px 24.2px 33.4px rgba(0, 0, 0, 0.05), 77px 58px 80px rgba(0, 0, 0, 0.07);
    }

    & > .login-button {
        width: 100%;
    }
}
</style>
