<template>
    <view>
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
        <mp-gap></mp-gap>

        <u-cell-group>
            <u-cell
                is-link
                icon="setting-fill"
                title="个人设置"></u-cell>
            <u-cell
                is-link
                icon="setting-fill"
                title="个人设置"></u-cell>
            <u-cell
                is-link
                icon="setting-fill"
                title="个人设置"></u-cell>
            <u-cell
                is-link
                icon="setting-fill"
                title="个人设置"></u-cell>
        </u-cell-group>
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
.user-info {
    background-color: $u-primary;
    padding: 32rpx;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 24rpx;

    & > .user-info-name {
        color: $u-main-color;
        font-size: 32rpx;
        .name {
            font-weight: 600;
            color: $u-text-title;
            margin-bottom: 8rpx;
        }

        .phone {
            font-size: 28rpx;
        }
    }
}
</style>
