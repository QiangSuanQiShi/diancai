import { defineStore } from 'pinia';
import accounts from '@/api/accounts';

export const useMpStore = defineStore('app', {
    state: (): MpApi.UserState => ({
        user: null,
    }),

    getters: {
        isLogin: (state) => state.user != null,
    },

    actions: {
        update(response: MpApi.UserResponse) {
            this.user = response;
        },

        init() {
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await accounts.init();
                    this.update(response);
                    resolve(true);
                } catch (e) {
                    reject(e);
                }
            });
        },
    },
});
