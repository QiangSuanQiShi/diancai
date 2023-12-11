<script setup lang="ts">
import type { CSSProperties } from 'vue';
import { computed } from 'vue';

const props = defineProps({
    padding: {
        type: [String],
        default: '32rpx',
    },
    marginBottom: {
        type: [String],
        default: '32rpx',
    },
    gap: {
        type: [String],
        default: '8rpx',
    },

    borderRadius: {
        type: [String],
        default: '8rpx',
    },
    backgroundColor: {
        type: [String],
        default: '#fff',
    },

    title: String,

    extraLabel: String,

    showHeader: Boolean,

    showFooter: Boolean,

    showTitle: {
        type: Boolean,
        default: true,
    },

    showExtra: {
        type: Boolean,
        default: false,
    },
});

const style = computed<CSSProperties>(() => {
    return {
        padding: props.padding,
        'margin-bottom': props.marginBottom,
        gap: props.gap,
        borderRadius: props.borderRadius,
        backgroundColor: props.backgroundColor,
    };
});
</script>

<template>
    <view
        class="mp-sheet"
        :style="style">
        <view
            v-if="showHeader"
            class="mp-sheet-header">
            <view
                v-if="showTitle"
                class="title">
                <slot name="header">
                    <text class="title-label"> {{ title }}</text>
                </slot>
            </view>
            <view
                v-if="showExtra"
                class="extra">
                <view class="extra-label">
                    <text>
                        {{ extraLabel }}
                    </text>
                </view>
                <view>
                    <u-icon name="arrow-right"></u-icon>
                </view>
            </view>
        </view>
        <view class="mp-sheet-body">
            <slot></slot>
        </view>
        <view
            v-if="showFooter"
            class="mp-sheet-footer">
            <slot name="footer"></slot>
        </view>
    </view>
</template>

<style scoped lang="scss">
.mp-sheet {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;

    & > .mp-sheet-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > .title {
            & > .title-label {
                font-size: 26rpx;
                color: $u-text-title;
            }
        }

        & > .extra {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8rpx;

            & > .extra-label {
                font-size: 24rpx;
                color: $u-text-secondary;
            }
        }
    }
}
</style>
