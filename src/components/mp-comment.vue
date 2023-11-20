<script setup lang="ts">
import { ref } from 'vue';

const value = ref(3);
</script>

<template>
    <view class="mp-comment">
        <view class="mp-comment-desc">
            <view class="avatar">
                <mp-avatar></mp-avatar>
            </view>
            <view class="info">
                <view class="user-body">
                    <view class="user_name">
                        <text>匿名用户</text>
                        <view class="value">
                            <text>一分钟前</text>
                        </view>
                    </view>
                    <view class="rate">
                        <u-rate
                            :count="5"
                            v-model="value"></u-rate>
                    </view>
                </view>
                <view class="comment">
                    <text>8888888888888888888888888</text>
                </view>
            </view>
        </view>
    </view>
</template>

<style scoped lang="scss">
.mp-comment {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 32rpx;
    display: flex;
    flex-direction: column;
    gap: 32rpx;

    & > .mp-comment-desc {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        gap: 16rpx;

        & > .info {
            flex: 1;
            & > .user-body {
                margin-bottom: 24rpx;
                & > .user_name {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    padding-left: 8rpx;
                    margin-bottom: 8rpx;

                    & > .value {
                        color: $u-main-text;
                        font-size: 20rpx;
                    }
                }
            }

            & > .comment {
                font-size: 28rpx;
            }
        }
    }
}
</style>
