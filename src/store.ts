import { defineStore } from 'pinia';
import accounts from '@/api/accounts';

export const useMpStore = defineStore('app', {
    state: (): MpApi.UserState => ({
        user: null,
        carts: [],
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

        /**
         * 添加购物车
         * @param foodSku
         */
        addCart(foodSku: MpApi.foodSkuResponse) {
            const index = this.carts.findIndex((cart) => {
                return cart.foodSkuId === foodSku.id;
            });

            if (index === -1) {
                const cart: MpApi.Cart = {
                    count: 1,
                    foodSkuId: foodSku.id,
                    foodSku,
                };
                this.carts = [...this.carts, cart];
            } else {
                this.carts[index].count += 1;
            }
        },
        /**
         * 清除购物车
         * @returns
         */
        clearCart() {
            this.carts = [];
        },
        /**
         * 获取购物车数量
         */
        getCartCount() {
            return this.carts.reduce((total, cart) => {
                return total + cart.count;
            }, 0);
        },

        getCartPrice() {
            return this.carts.reduce((total, cart) => {
                return total + cart.foodSku.money * cart.count;
            }, 0);
        },
    },
});
