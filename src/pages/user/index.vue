<template>
    <view class="content">
        <view
            @click="onLoginOrToUserInfo"
            class="user-info">
            <view class="user-info-avatar">
                <mp-avatar avatar-size="56"></mp-avatar>
            </view>
            <view class="user-info-name">
                <view v-if="!store.isLogin">
                    <text>登录 / 注册</text>
                </view>
                <view v-else>
                    <view class="name">
                        <text>{{ store.user?.userName ?? '微信用户' }}</text>
                    </view>
                    <view class="phone">
                        <mp-phone :phone="store.user?.phone"></mp-phone>
                    </view>
                </view>
            </view>
        </view>
        <mp-sheet
            show-header
            padding="0"
            gap="32rpx"
            title="我的服务">
            <template #header>
                <view class="service">
                    <text>我的服务</text>
                </view>
            </template>
            <view>
                <u-cell
                    :border="false"
                    icon="phone"
                    title="联系我们">
                    <template #value>
                        <u-icon name="arrow-right"></u-icon>
                    </template>
                </u-cell>
                <u-cell
                    :border="false"
                    icon="order"
                    title="我的举报">
                    <template #value>
                        <u-icon name="arrow-right"></u-icon>
                    </template>
                </u-cell>
                <u-cell
                    :border="false"
                    icon="close-circle"
                    title="退出登录">
                    <template #value>
                        <u-icon name="arrow-right"></u-icon>
                    </template>
                </u-cell>
            </view>
        </mp-sheet>
    </view>
</template>

<script setup lang="ts">
import { useMpStore } from '@/store';

const store = useMpStore();
const onLoginOrToUserInfo = () => {
    if (!store.isLogin) {
        uni.$mp.to('/pages/user/login');
    }
};
</script>

<style lang="scss">
.content,
page {
    background-color: $u-bg-color;
}

.content {
    padding: 32rpx;
}
.user-info {
    background-color: $u-primary;
    padding: 32rpx;
    border-radius: 16rpx;
    margin-bottom: 32rpx;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 24rpx;

    & > .user-info-name {
        color: $u-main-color;
        font-size: 32rpx;
        .name {
            margin-top: 16rpx;
            color: #ffffff;
        }

        .phone {
            font-size: 28rpx;
        }
    }
}

.service {
    padding: 32rpx 0 0 32rpx;
}
</style>
