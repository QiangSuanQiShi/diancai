<template>
    <z-paging
        ref="paging"
        v-model="dataList"
        :default-page-size="perPage"
        :auto-show-back-to-top="backTop"
        :safe-area-inset-bottom="safeBottom"
        :use-safe-area-placeholder="safeBottom"
        :use-virtual-list="useVirtualList"
        :cell-height-mode="heightMode"
        :auto="auto"
        :auto-height="autoHeight"
        :fixed="fixed"
        loading-more-default-text="正在加载..."
        @onRefresh="like_list = []"
        @query="onQuery">
        <template #top>
            <slot name="header" />
        </template>
        <view class="refresh-list">
            <slot
                name="list"
                :items="dataList" />
        </view>
    </z-paging>
</template>

<script setup lang="ts">
import { PropType, ref, watch } from 'vue';

/**
 * 插件导出方法
 */
type ZPaging = {
    /**
     * 请求结束失败调用此方法，将请求的结果传递给z-paging处理
     * @param success
     */
    complete: (success: boolean) => void;
    /**
     * 【通过total判断是否有更多数据】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理
     * @param data
     * @param total
     */
    completeByTotal: (data: any[], total: number) => void;
    /**
     * 重新加载分页数据，page恢复为默认值，相当于下拉刷新的效果
     * @param {boolean} ani 是否启用动画
     */
    reload: (ani: boolean) => void;
    /**
     * 刷新列表数据，page和size不会重置，列表数据会重新从服务端获取。
     */
    refresh: () => void;
};
/**
 * 插件实例
 */
const paging = ref<ZPaging>();

const props = defineProps({
    /**
     * 请求异步方法
     */
    query: {
        type: Function,
        required: true,
    },
    /**
     * 请求附加参数 (page分页数, per_page每页显示数为系统预留, 如果参数中存在这两个将被覆盖)
     */
    params: Object,
    /**
     * 每页显示数
     */
    perPage: {
        type: Number,
        default: 15,
    },
    averagePage: {
        type: Number,
        default: 15,
    },
    /**
     *
     */
    /**
     * 是否启用返回顶部按钮
     */
    backTop: {
        type: Boolean,
        default: true,
    },
    /**
     * 是否启动底部安全区域 (适配IOS手机)
     */
    safeBottom: {
        type: Boolean,
        default: true,
    },
    /**
     * 是否启用虚拟列表
     */
    useVirtualList: {
        type: Boolean,
        default: true,
    },
    /**
     * 虚拟列表高度模式, 只在启用虚拟列表后生效
     * fixed: 静态高度
     * dynamic: 动态高度
     */
    heightMode: {
        type: String as PropType<'fixed' | 'dynamic'>,
        default: 'dynamic',
    },
    /**
     * 是否自动监听参数变化后执行重新加载
     */
    watchParams: {
        type: Boolean,
        default: true,
    },
    /**
     * 参数变化时重新加载的防抖时间间隔, 默认: 300 毫秒
     * 如input连续输入内容时, 只取最后一次的结果然后重载
     */
    debounceTime: {
        type: Number,
        default: 300,
    },
    /**
     * 初始化后自动执行reload
     * 注意: 如不监听参数变化时需要启用, 监听后需要禁用, 否则会首次加载两次数据
     */
    auto: {
        type: Boolean,
        default: false,
    },

    autoHeight: {
        type: Boolean,
        default: false,
    },

    fixed: {
        type: Boolean,
        default: true,
    },
});
/**
 * @event sucess 数据加载成功后事件
 * @event fail 数据加载失败后事件
 */
const emits = defineEmits(['success', 'fail']);
// 数据正在加载中
const loading = ref<boolean>(false);

const like_list = ref<number[]>([]);
// 返回数据数组.
/**
 * 返回数据数组
 * 此变量由z-pagin维护, 请勿更改
 */
const dataList = ref<any[]>([]);
/**
 * 加载数据
 * @param page 当前请求页
 * @param per_page 分页显示数
 */
const onQuery = async () => {
    if (!props.query) return;
    loading.value = true;
    console.log();
    try {
        const res = (await props.query(like_list.value)) as MpCore.Paginate<any[]>;
        // 数据请求成功触发
        const paginateElement = res['汇总（去重）'];

        const ids = paginateElement.map((res: any) => {
            return res.id;
        });

        like_list.value = [like_list, ...ids];

        paging.value?.completeByTotal(paginateElement, paginateElement.length);

        loading.value = false;

        emits('success');
    } catch (e) {
        // 数据请求失败触发
        paging.value?.complete(false);
        loading.value = false;
        emits('fail');
    }
};
/**
 * 监听参数变化
 */
watch(
    () => props.params,
    () => {
        if (props.watchParams) {
            uni.$u.debounce(() => {
                paging.value?.reload(false);
            }, props.debounceTime ?? 200);
        }
    },
    { deep: true }
);
/**
 * 导出组件方法
 */
defineExpose({
    reload: (ani: boolean = true) => paging.value?.reload(ani),
    refresh: () => paging.value?.refresh(),
});
</script>

<style scoped lang="scss">
.refresh-list {
}
</style>
