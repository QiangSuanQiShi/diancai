<template>
    <u-popup
        :customStyle="{
            boxSizing: 'border-box',
            padding: '32rpx',
        }"
        :safe-area-inset-bottom="safeAreaInsetBottom"
        :safe-area-inset-top="safeAreaInsetTop"
        :round="round"
        :mode="mode"
        :z-index="zIndex"
        v-model:show="showComputed"
        @close="close">
        <view
            :style="drawerStyle"
            class="drawer box-border">
            <view class="header box-border">
                <view @tap.stop="onCancel">
                    <slot name="cancel">
                        <u-text
                            :color="theme.colorSecondary"
                            v-if="showCancel"
                            :text="cancelText"></u-text>
                    </slot>
                </view>
                <view>
                    <slot name="title">
                        <u-text
                            :color="theme.colorTitle"
                            :text="title"></u-text>
                    </slot>
                </view>
                <view @tap.stop="onOk">
                    <slot name="ok">
                        <u-text
                            :color="okDisabled ? theme.primaryDisabled : theme.primary"
                            v-if="showOk"
                            :text="okText"></u-text>
                    </slot>
                </view>
            </view>

            <scroll-view
                style="flex: 1; width: 100%; min-height: 0; overflow: visible"
                :scroll-y="true">
                <slot />
            </scroll-view>

            <view
                class="footer box-border"
                v-if="showBottom">
                <slot name="footer">
                    <u-button
                        plain
                        type="primary"
                        shape="circle"
                        @click="onCancel">
                        {{ cancelText }}
                    </u-button>
                    <u-button
                        :disabled="okDisabled"
                        type="primary"
                        shape="circle"
                        @click="onOk">
                        {{ okText }}
                    </u-button>
                </slot>
            </view>
        </view>
    </u-popup>
</template>

<script setup lang="ts">
import type { CSSProperties, PropType } from 'vue';
import { computed } from 'vue';
import theme from '@/theme';

const props = defineProps({
    height: {
        type: [String, Number],
        default: '80',
    },
    round: {
        type: [String, Number],
        default: '16',
    },
    /**
     *
     *  取消文本
     */
    cancelText: {
        type: String,
        default: '取消',
    },
    /**
     * 显示取消
     */
    showCancel: {
        type: Boolean,
    },
    /**
     * 标题
     */
    title: String,
    /**
     * 确认文本
     */
    okText: {
        type: String,
        default: '确认',
    },
    /**
     * 显示确认按钮
     */
    showOk: {
        type: Boolean,
        default: true,
    },

    okDisabled: {
        type: Boolean,
        default: false,
    },
    /**
     * 显示底部
     */
    showBottom: {
        type: Boolean,
        default: false,
    },
    show: Boolean,

    safeAreaInsetBottom: {
        type: Boolean,
        default: true,
    },
    safeAreaInsetTop: {
        type: Boolean,
        default: false,
    },
    mode: {
        type: String as PropType<'top' | 'right' | 'left' | 'bottom' | 'center'>,
        default: 'bottom',
    },
    zIndex: {
        type: [Number, String],
        default: '10075',
    },
});

const emits = defineEmits(['update:show', 'cancel', 'ok']);

const showComputed = computed({
    get: () => props.show,
    set: (val) => emits('update:show', val),
});

const drawerStyle = computed<CSSProperties>(() => {
    if (props.mode === 'top' || props.mode === 'bottom') {
        return {
            height: `${props.height}vh`,
        };
    }
    if (props.mode === 'right' || props.mode === 'left') {
        return {
            width: `${props.height}vw`,
        };
    }
    return {
        height: `${props.height}vh`,
    };
});

const onCancel = () => {
    showComputed.value = false;
    emits('cancel');
};

const onOk = () => {
    if (!props.okDisabled) {
        emits('ok');
    }
};
/**
 *  关闭弹窗
 */
const close = () => {
    showComputed.value = false;
};

const open = () => {
    showComputed.value = true;
};

defineExpose({
    open,
    close,
});
</script>

<style scoped lang="scss">
.drawer {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > .header {
        width: 100%;
        margin-bottom: 32rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & > .footer {
        box-sizing: border-box;
        width: 100%;
        margin-top: 32rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16rpx;
    }
}
</style>
