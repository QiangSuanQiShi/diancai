import { difference } from 'lodash';
import dayjs from 'dayjs';
import { resourceUrl, TAB_PAGES, NO_VERIFICATION_REQUIRED, TOKEN_NAME } from '@/config';
import { useMpStore } from '@/store';
import theme from '@/theme';

export const $mp: MpCore.Helper = {
    /**
     * 获取资源完整路径, 主要是服务端返回的附件,图片地址, 都没有域名前缀
     * 在web端因为是同个站点下可以访问, 在小程序需要加上站点地址, 同时在小程序管理后台放行域名
     * @param url
     */
    src: (url) => {
        if (url == null) return '';
        return `${resourceUrl}${url}`;
    },

    // 页面跳转
    to: (url, type = 'navigate') => {
        let newUrl = url;
        let newType = type;
        /**
         * 是否不需要登录
         */
        const check = NO_VERIFICATION_REQUIRED.some((page) => {
            return url.startsWith(page);
        });

        if (!check) {
            const store = useMpStore();
            // 未登录
            if (!store.isLogin) {
                newUrl = `/pages/user/login?back=${encodeURIComponent(url)}`;
            }
        }

        const tab = TAB_PAGES.some((page) => {
            return newUrl.startsWith(page);
        });

        if (tab) {
            newType = 'tab';
        }

        if (newType === 'redirect') {
            uni.redirectTo({
                url: newUrl,
            });
        } else if (newType === 'tab') {
            uni.switchTab({
                url: newUrl,
            });
        } else {
            uni.navigateTo({
                url: newUrl,
            });
        }
    },
    isCrossArray: (arr1, arr2) => {
        return arr1.length > difference(arr1, arr2).length;
    },
    isPhone: (phone) => {
        const reg = /^[1][3-9][\d]{9}/;
        return reg.test(phone);
    },

    // 设置token
    setToken: (token) => {
        uni.setStorageSync(TOKEN_NAME, token);
        return true;
    },

    removeToken: () => {
        uni.removeStorageSync(TOKEN_NAME);
    },

    /**
     * 一维数组地址转换为树形结构
     * @param nodes 全量数据
     * @param pid 父级ID
     */
    parseTree: (nodes: any[], pid: number | null = null) => {
        const items: any[] = [];
        nodes.forEach((node) => {
            if (node.pid === pid) {
                const children = $mp.parseTree(nodes, node.id);
                if (children.length > 0) {
                    items.push({
                        ...node,
                        children,
                    });
                } else {
                    items.push({
                        ...node,
                    });
                }
            }
        });
        return items;
    },

    phoneNumberConvert: (phone, former = 3, latter = 4) => {
        if (!phone) return '';
        const pat = new RegExp(`(\\d{${former}})\\d*(\\d{${latter}})`);
        return phone.replace(pat, '$1***$2');
    },

    /**
     * HTML转普通文本
     * @param html
     * @param length 截取的字符长度, 0为不限制
     */
    toText: (html, length = 0) => {
        if (!html || html.trim().length === 0) return '';
        const output = html.replace(/<[^>]*>/g, '');
        if (length > 0) {
            const out = output.substring(0, length);
            return out.length === length ? `${out}...` : out;
        }
        return output;
    },

    /**
     * 相对于现在的时间
     * @param date 完整日期时间字符
     * @param withoutSuffix 是否包含 '前' / '后'
     */
    fromNow: (date, withoutSuffix = false) => {
        if (!date) return '';
        return dayjs(date).fromNow(withoutSuffix);
    },

    fromNowDays: (date) => {
        return dayjs().diff(date, 'd');
    },
    /**
     * 转换成服务器识别的坐标数据
     * @param lng 经度
     * @param lat 纬度
     */
    toLngLat: (lng, lat) => {
        return {
            type: 'Point',
            coordinates: [lng, lat],
        };
    },

    showModal: (
        title,
        content,
        confirmText = '确认',
        confirmColor = theme.primary,
        showCancel = true,
        cancelText = '取消',
        cancelColor = theme.mainColor
    ) => {
        return new Promise<boolean>((resolve, reject) => {
            uni.showModal({
                title,
                content,
                confirmText,
                confirmColor,
                showCancel,
                cancelText,
                cancelColor,
                success: (res) => {
                    if (res.confirm) {
                        resolve(true);
                    } else {
                        reject(false);
                    }
                },
                fail: () => {
                    reject(false);
                },
            });
        });
    },

    pxToRem: (px: number) => {
        return px / 16;
    },

    getNoticeType: (type: string) => {
        if (type === 'App\\Notifications\\StockNotice') {
            return '库存预警';
        }
        if (type === 'App\\Notifications\\ExportNotice') {
            return '导出数据';
        }
        if (type === 'App\\Notifications\\OrderNotice') {
            return '工单提醒';
        }
        return '未知';
    },
};
