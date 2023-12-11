<template>
    <view class="content">
        <u-form
            label-position="top"
            :model="form"
            :rules="rules">
            <u-form-item label="评分">
                <u-rate
                    :count="5"
                    v-model="form.score"></u-rate>
            </u-form-item>
            <u-form-item
                label="评论"
                prop="comment">
                <u-textarea
                    v-model="form.comment"
                    height="80"
                    count></u-textarea>
            </u-form-item>
        </u-form>
        <view class="button">
            <u-button
                type="primary"
                text="提交"></u-button>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const rules = ref({});

const form = ref<any>({
    score: 0,
    comment: '',
});
</script>

<style lang="scss">
.content,
page {
    background-color: $u-bg-color;
}

.content {
    padding: 32rpx;
}
.button {
    margin-top: 240rpx;
}
</style>
