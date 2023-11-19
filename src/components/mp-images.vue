<template>
    <u-album
        :urls="imagesUrl"
        :key-name="keyName"
        :single-size="singleSize"
        :multiple-size="multipleSize"
        :space="space"
        :single-mode="singleMode"
        :multiple-mode="multipleMode"
        :max-count="maxCount"
        :preview-full-image="previewFullImage"
        :row-count="rowCount"
        :show-model="showModel"></u-album>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { computed } from 'vue';

const props = defineProps({
    /**
     * 图片地址
     */
    urls: {
        type: Array as PropType<string[]>,
    },

    /**
     * 	指定从数组的对象元素中读取哪个属性作为图片地址
     */
    keyName: String,

    /**
     * 		单图时，图片长边的长度
     */
    singleSize: {
        type: [Number, String],
        default: 180,
    },

    /**
     * 		多图时，图片长边的长度
     */
    multipleSize: {
        type: [Number, String],
        default: 70,
    },

    /**
     * 		多图时，图片水平和垂直之间的间隔
     */
    space: {
        type: [Number, String],
        default: 6,
    },

    /**
     * 			单图时，图片缩放裁剪的模式
     */
    singleMode: {
        type: String,
        default: 'scaleToFill',
    },

    /**
     * 		多图时，图片缩放裁剪的模式
     */
    multipleMode: {
        type: String,
        default: 'aspectFill',
    },

    /**
     * 		最多展示的图片数量，超出时最后一个位置将会显示剩余图片数量
     */
    maxCount: {
        type: [Number, String],
        default: 9,
    },

    /**
     * 			是否可以预览图片
     */
    previewFullImage: {
        type: Boolean,
        default: true,
    },

    /**
     * 		每行展示图片数量，如设置，singleSize和multipleSize将会无效
     */
    rowCount: {
        type: [Number, String],
        default: 3,
    },

    /**
     * 		每行展示图片数量，如设置，singleSize和multipleSize将会无效
     */
    showModel: {
        type: Boolean,
        default: true,
    },
});

const imagesUrl = computed(() => {
    const { urls } = props;

    return urls;
});
</script>

<style scoped lang="scss"></style>
