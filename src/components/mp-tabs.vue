vue
<template>
    <view class="container">
        {{ defaults }}
        <view
            flex
            :class="_class">
            <view class="mp-tab-header">
                <slot name="header"></slot>
            </view>
            <view flex-1>
                <u-tabs
                    v-if="!sticky"
                    :current="current"
                    :scrollable="scrollable"
                    :list="tabList"
                    :lineWidth="lineWidth"
                    @change="onTabChange"
                    :activeStyle="activeStyle"
                    :inactiveStyle="inactiveStyle"
                    line-color="#12c294"></u-tabs>
                <u-sticky v-else>
                    <u-tabs
                        :current="current"
                        :scrollable="scrollable"
                        :list="tabList"
                        :lineWidth="lineWidth"
                        @change="onTabChange"
                        :activeStyle="activeStyle"
                        :inactiveStyle="inactiveStyle"
                        line-color="#12c294"></u-tabs>
                </u-sticky>
            </view>
            <view
                class="mp-padding-x-md flex flex-justify-center"
                v-if="tabRight">
                <slot name="tab-right"></slot>
            </view>
        </view>
        <swiper
            :duration="duration"
            class="mp-tab-swiper"
            :current="current"
            @change="onPageChange">
            <slot></slot>
        </swiper>

        <view
            v-if="showFooter"
            class="footer">
            <slot name="footer"></slot>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref, computed, useSlots, useAttrs } from 'vue';

const props = defineProps({
    _class: String,
    scrollable: {
        type: Boolean,
        default: true,
    },
    itemStyle: String,
    lineWidth: {
        type: String,
    },
    duration: {
        type: Number,
        default: 200,
    },
    current: {
        type: Number,
        default: 0,
    },
    activeColor: {
        type: String,
        default: '#303133',
    },
    inactiveColor: {
        type: String,
        default: '#c8c9cc',
    },
    showFooter: Boolean,
    tabRight: Boolean,
    sticky: Boolean,
});

const emits = defineEmits(['change', 'update:current']);

// eslint-disable-next-line vue/no-dupe-keys
const current = ref<number>(0);

const slots = useAttrs();

/**
 * 获取默认slots，用于生成tabs标题
 */
const defaults = computed(() => {
    console.log(slots);
    return [];
});

/**
 * 从默认slots获取tabs标题
 */
const tabList = computed(() => {
    const tab = [];

    // defaults.value.forEach((t) => {
    //     if (Array.isArray(t?.children) && t?.children?.length > 0) {
    //         t?.children?.forEach((t2) => {
    //             tab.push({
    //                 name: t2?.props?.title,
    //             });
    //         });
    //     } else {
    //         tab.push({
    //             name: t?.props?.title,
    //         });
    //     }
    // });

    return tab;
});

/**
 *  被选择的tab-item样式
 */
const activeStyle = computed(() => {
    return {
        color: props.activeColor,
        fontWeight: 'bold',
        transform: 'scale(1.05)',
    };
});

/**
 *  未被选择的tab-item样式
 */
const inactiveStyle = computed(() => {
    return {
        color: props.inactiveColor,
        transform: 'scale(1)',
    };
});

/**
 * tab栏切换
 * @param tab
 */
const onTabChange = (tab: any) => {
    current.value = tab.index;
    emits('change', { current: current.value });
    emits('update:current', current.value);
};

/**
 * 页面切换
 * @param e
 */
const onPageChange = (e: any) => {
    current.value = e.detail.current;
    emits('change', { current: current.value });
    emits('update:current', current.value);
};
</script>

<style scoped lang="scss">
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.mp-tab-swiper {
    height: auto;
    flex: 1;
}
</style>
