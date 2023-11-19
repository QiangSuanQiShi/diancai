import { TAB_PAGES, NO_VERIFICATION_REQUIRED } from '@/config';
import { useMpStore } from '@/store';

export const $mp: MpCore.Helper = {
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

    phoneNumberConvert: (phone, former = 3, latter = 4) => {
        if (!phone) return '';
        const pat = new RegExp(`(\\d{${former}})\\d*(\\d{${latter}})`);
        return phone.replace(pat, '$1***$2');
    },
};
