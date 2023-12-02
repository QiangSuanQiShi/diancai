<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
    /**
     *  不展示数字，只有一个小点
     */
    isDot: Boolean,
    /**
     * 	展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为0且show-zero为false时隐藏
     */
    value: [String, Number],
    /**
     *  组件是否显示
     */
    show: {
        type: Boolean,
        default: true,
    },
    /**
     *  最大值，超过最大值会显示 '{max}+'
     */
    max: {
        type: [String, Number],
        default: 99,
    },
    /**
     *  主题类型
     */
    type: {
        type: String as PropType<'warning' | 'success' | 'primary' | 'info'>,
        default: 'primary',
    },
    /**
     * 	当数值为 0 时，是否展示 Badge
     */
    showZero: Boolean,
    /**
     * 	背景颜色，优先级比type高，如设置，type参数会失效
     */
    bgColor: String,
    /**
     *  字体颜色
     */
    color: {
        type: String,
        default: '#fff',
    },
    /**
     *  徽标形状，circle-四角均为圆角，horn-左下角为直角
     */
    shape: {
        type: String as PropType<'circle' | 'horn'>,
        default: 'circle',
    },
    /**
     *  置数字的显示方式
     */
    numberType: {
        type: String as PropType<'overflow' | 'ellipsis' | 'limit'>,
        default: 'overflow',
    },
    /**
     * 设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效
     */
    offset: {
        type: Array,
    },
    /**
     *  	是否反转背景和字体颜色
     */
    inverted: Boolean,
    /**
     *  	组件是否绝对定位，为true时，offset参数才有效
     */
    absolute: Boolean,
});
</script>

<template>
    <view class="mp-badge">
        <view class="badge">
            <u-badge
                custom-class="badge"
                :is-dot="isDot"
                :show="show"
                :type="type"
                :max="max"
                :value="value"
                :show-zero="showZero"
                :bg-color="bgColor"
                :color="color"
                :shape="shape"
                :number-type="numberType"
                :offset="offset"
                :inverted="inverted"
                :absolute="absolute"></u-badge>
        </view>
        <slot></slot>
    </view>
</template>

<style scoped lang="scss">
.mp-badge {
    position: relative;
    & > .badge {
        z-index: 999;
        position: absolute;
        top: 0;
        right: 0;
    }
}
</style>
