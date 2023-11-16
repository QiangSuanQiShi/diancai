<template>
    <view class="content">
        <view>
            <u-button
                type="primary"
                text="微信用户一键登录"
                open-type="getPhoneNumber"
                :plain="true"
                @getphonenumber="getUserPhoneNumber"></u-button>
        </view>
    </view>
</template>

<script setup lang="ts">
import accounts from '@/api/accounts';

const getUserPhoneNumber = (res: any) => {
    uni.login({
        provider: 'weixin',
        async success(loginRes) {
            const data: any = await accounts.login({
                js_code: loginRes.code,
                code: res.detail.code,
            });
            console.log(data);
        },
    });
};
</script>

<style lang="scss" scoped>
.test {
    background-color: #ffffff;
}
</style>
