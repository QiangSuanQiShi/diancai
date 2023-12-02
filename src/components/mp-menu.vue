<template>
    <view class="u-wrap">
        <view class="u-menu-wrap">
            <scroll-view
                scroll-y
                scroll-with-animation
                class="u-tab-view menu-scroll-view"
                :scroll-top="scrollTop"
                :scroll-into-view="itemId">
                <view
                    v-for="(item, index) in tabber"
                    :key="index"
                    class="u-tab-item"
                    :class="[current == index ? 'u-tab-item-active' : '']"
                    @tap.stop="swichMenu(index)">
                    <text class="u-line-1">{{ item.name }}</text>
                </view>
            </scroll-view>
            <scroll-view
                :scroll-top="scrollRightTop"
                scroll-y
                scroll-with-animation
                class="right-box"
                @scroll="rightScroll">
                <view class="page-view">
                    <view
                        class="class-item"
                        :id="'item' + index"
                        v-for="(item, index) in tabber"
                        :key="index">
                        <view class="item-title">
                            <text>{{ item.name }}</text>
                        </view>
                        <view class="item-container">
                            <mp-commodity-item-card
                                v-for="(item1, index1) in item.foods"
                                :key="index1">
                            </mp-commodity-item-card>
                        </view>
                    </view>
                </view>
            </scroll-view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref, nextTick, getCurrentInstance } from 'vue';
import { onReady } from '@dcloudio/uni-app';

const { proxy } = getCurrentInstance();
// tab标题的滚动条位置
const scrollTop = ref<number>(0);
const oldScrollTop = ref<number>(0);
// 预设当前项的值
const current = ref<number>(0);
const menuHeight = ref<number>(0);
// 左边菜单item的高度
const menuItemHeight = ref<number>(0);
// 栏目右边scroll-view用于滚动的id
const itemId = ref<string>('');

const tabber = ref<any>([
    {
        name: '肉类',
        foods: [
            {
                name: 'A字裙',
                key: 'A字裙',
                icon: 'https://cdn.uviewui.com/uview/common/classify/1/1.jpg',
                cat: 10,
            },
            {
                name: 'A字裙',
                key: 'A字裙',
                icon: 'https://cdn.uviewui.com/uview/common/classify/1/1.jpg',
                cat: 10,
            },
            {
                name: 'A字裙',
                key: 'A字裙',
                icon: 'https://cdn.uviewui.com/uview/common/classify/1/1.jpg',
                cat: 10,
            },
            {
                name: 'A字裙',
                key: 'A字裙',
                icon: 'https://cdn.uviewui.com/uview/common/classify/1/1.jpg',
                cat: 10,
            },
            {
                name: 'A字裙',
                key: 'A字裙',
                icon: 'https://cdn.uviewui.com/uview/common/classify/1/1.jpg',
                cat: 10,
            },
            {
                name: 'A字裙',
                key: 'A字裙',
                icon: 'https://cdn.uviewui.com/uview/common/classify/1/1.jpg',
                cat: 10,
            },
        ],
    },
    {
        name: '蔬菜',
        foods: [
            {
                name: 'A字裙',
                key: 'A字裙',
                icon: 'https://cdn.uviewui.com/uview/common/classify/1/1.jpg',
                cat: 10,
            },
            {
                name: 'A字裙',
                key: 'A字裙',
                icon: 'https://cdn.uviewui.com/uview/common/classify/1/1.jpg',
                cat: 10,
            },
            {
                name: 'A字裙',
                key: 'A字裙',
                icon: 'https://cdn.uviewui.com/uview/common/classify/1/1.jpg',
                cat: 10,
            },
            {
                name: 'A字裙',
                key: 'A字裙',
                icon: 'https://cdn.uviewui.com/uview/common/classify/1/1.jpg',
                cat: 10,
            },
            {
                name: 'A字裙',
                key: 'A字裙',
                icon: 'https://cdn.uviewui.com/uview/common/classify/1/1.jpg',
                cat: 10,
            },
            {
                name: 'A字裙',
                key: 'A字裙',
                icon: 'https://cdn.uviewui.com/uview/common/classify/1/1.jpg',
                cat: 10,
            },
            {
                name: 'A字裙',
                key: 'A字裙',
                icon: 'https://cdn.uviewui.com/uview/common/classify/1/1.jpg',
                cat: 10,
            },
        ],
    },
]);

const menuItemPos = ref<any>([]);

const arr = ref<any>([]);

const scrollRightTop = ref<number>(0);

const timer = ref<object>();

// 获取一个目标元素的高度
const getElRect = (elClass: string): Promise<number> => {
    return new Promise((resolve) => {
        const query = uni.createSelectorQuery().in(proxy);
        query
            .select(`.${elClass}`)
            .boundingClientRect((data: any) => {
                resolve(data.height);
            })
            .exec();
    });
};

// 设置左边菜单的滚动状态
const leftMenuStatus = async (index) => {
    current.value = index;
    // 如果为0，意味着尚未初始化
    // eslint-disable-next-line eqeqeq
    if (menuHeight.value == 0 || menuItemHeight.value == 0) {
        menuHeight.value = await getElRect('menu-scroll-view');
        menuItemHeight.value = await getElRect('u-tab-item');
    }
    // 将菜单活动item垂直居中
    scrollTop.value = index * menuItemHeight.value + menuItemHeight.value / 2 - menuHeight.value / 2;
};

const getMenuItemTop = () => {
    new Promise((resolve) => {
        const selectorQuery = uni.createSelectorQuery().in(proxy);
        selectorQuery
            .selectAll('.class-item')
            .boundingClientRect((rects: any) => {
                // 如果节点尚未生成，rects值为[](因为用selectAll，所以返回的是数组)，循环调用执行
                if (!rects.length) {
                    setTimeout(() => {
                        getMenuItemTop();
                    }, 10);
                    return;
                }
                rects.forEach((rect: any) => {
                    // 这里减去rects[0].top，是因为第一项顶部可能不是贴到导航栏(比如有个搜索框的情况)
                    arr.value.push(rect.top - rects[0].top);
                    resolve();
                });
            })
            .exec();
    });
};

const rightScroll = async (e: any) => {
    oldScrollTop.value = e.detail.scrollTop;
    // eslint-disable-next-line eqeqeq
    if (arr.value.length == 0) {
        await getMenuItemTop();
    }
    if (timer.value) return;
    if (!menuHeight.value) {
        menuHeight.value = await getElRect('menu-scroll-view');
    }
    setTimeout(() => {
        // 节流
        timer.value = null;
        // scrollHeight为右边菜单垂直中点位置
        const scrollHeight = e.detail.scrollTop + menuHeight.value / 2;
        for (let i = 0; i < arr.value.length; i++) {
            const height1 = arr.value[i];
            const height2 = arr.value[i + 1];
            // 如果不存在height2，意味着数据循环已经到了最后一个，设置左边菜单为最后一项即可
            if (!height2 || (scrollHeight >= height1 && scrollHeight < height2)) {
                leftMenuStatus(i);
                return;
            }
        }
    }, 10);
};

const observer = () => {
    tabber.value.map((val, index) => {
        const observer = uni.createIntersectionObserver(this);
        // 检测右边scroll-view的id为itemxx的元素与right-box的相交状态
        // 如果跟.right-box底部相交，就动态设置左边栏目的活动状态
        observer
            .relativeTo('.right-box', {
                top: 0,
            })
            .observe(`#item${index}`, (res: any) => {
                if (res.intersectionRatio > 0) {
                    const id = res.id.substring(4);
                    leftMenuStatus(id);
                }
            });
    });
};

const swichMenu = async (index: number) => {
    if (arr.value.length == 0) {
        await getMenuItemTop();
    }
    if (index == current.value) return;
    scrollRightTop.value = oldScrollTop.value;

    nextTick(function () {
        scrollRightTop.value = arr.value[index];
        current.value = index;
        leftMenuStatus(index);
    });
};

onReady(() => {
    getMenuItemTop();
});
</script>

<style lang="scss" scoped>
.u-wrap {
    height: 100%;

    display: flex;
    flex-direction: column;
}

.u-search-box {
    padding: 18rpx 30rpx;
}

.u-menu-wrap {
    flex: 1;
    display: flex;
    overflow: hidden;
}

.u-search-inner {
    background-color: rgb(234, 234, 234);
    border-radius: 100rpx;
    display: flex;
    align-items: center;
    padding: 10rpx 16rpx;
}

.u-search-text {
    font-size: 26rpx;
    color: $u-tips-color;
    margin-left: 10rpx;
}

.u-tab-view {
    width: 200rpx;
    height: 100%;
}

.u-tab-item {
    height: 110rpx;
    background: #f6f6f6;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26rpx;
    color: #444;
    font-weight: 400;
    line-height: 1;
}

.u-tab-item-active {
    position: relative;
    color: #000;
    font-size: 30rpx;
    font-weight: 600;
    background: #fff;
}

.u-tab-item-active::before {
    content: '';
    position: absolute;
    border-left: 4px solid $u-primary;
    height: 32rpx;
    left: 0;
    top: 39rpx;
}

.u-tab-view {
    height: 100%;
}

.right-box {
    background-color: rgb(250, 250, 250);
}

.page-view {
    padding: 16rpx;
}

.class-item {
    margin-bottom: 30rpx;
    background-color: #fff;
    padding: 16rpx;
    border-radius: 8rpx;
}

.class-item:last-child {
    min-height: 100vh;
}

.item-title {
    font-size: 26rpx;
    color: $u-main-color;
    font-weight: bold;
}

.item-menu-name {
    font-weight: normal;
    font-size: 24rpx;
    color: $u-main-color;
}

.item-container {
    display: flex;
    flex-wrap: wrap;
}

.thumb-box {
    width: 33.333333%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20rpx;
}

.item-menu-image {
    width: 120rpx;
    height: 120rpx;
}
</style>
