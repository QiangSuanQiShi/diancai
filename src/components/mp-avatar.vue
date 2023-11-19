<template>
    <view
        class="mp-avatar"
        @tap.stop="emits('click')">
        <u-avatar
            :src="avatarImg"
            :size="avatarSize"></u-avatar>

        <u-text
            v-if="showName"
            :custom-style="{
                paddingLeft: '16rpx',
            }"
            :color="color"
            :bold="bold"
            :size="nameSize"
            :text="name"></u-text>
        <slot name="state"></slot>
    </view>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    /**
     *  头像图片的URL
     */
    avatar: {
        type: String,
    },
    /**
     * 默认头像
     */
    defaultAvatar: {
        type: String,
        default: '/static/images/avatar.png',
    },
    /**
     *     头像尺寸
     */
    avatarSize: {
        type: [Number, String],
        default: 42,
    },

    /**
     * 名称
     */
    name: String,

    /**
     * 名称字体大小
     */
    nameSize: {
        type: Number,
        default: 14,
    },

    /**
     * 名称是否加粗
     */
    bold: {
        type: Boolean,
        default: true,
    },

    /**
     * 名称颜色
     */
    color: {
        type: String,
        default: 'rgba(0 , 0 , 0 , 1)',
    },

    /**
     *  是否显示名称
     */
    showName: {
        type: Boolean,
        default: false,
    },
});

// 定义事件
const emits = defineEmits(['click']);

// 计算属性：根据头像URL和默认头像URL计算头像图片的URL
const avatarImg = computed(() => (props.avatar ? props.avatar : props.defaultAvatar));
</script>

<style scoped lang="scss">
.mp-avatar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
</style>
