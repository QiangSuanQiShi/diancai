export {};

declare global {
    namespace MpApi {
        interface WxLoginForm {
            js_code: string;
            code: string;
        }

        interface UserResponse {
            id: string;
            openId: string;
            userName: string;
            phone: string;
            foodStats: string;
            authority: number;
            isBan: number;
            collectFoodSku: string;
            createTime: string;
            updateTime: string;
            token: string;
        }

        interface AccountInitInfo {
            user: UserResponse;
            token: string;
            createdAt: string;
            tokenExpiration: string;
        }

        interface foodSkuResponse {
            id: string;
            name: string;
            salesNum: number;
            merchantFoodType: string;
            money: number;
            merchantId: string;
            foodImg: string;
            foodStats: string;
            createTime: string;
            updateTime: string;
        }

        interface Cart {
            count: number;
            foodSkuId: string;
            foodSku: foodSkuResponse;
        }

        interface UserState {
            user: UserResponse | null;
            carts: Cart[];
        }

        interface OrderResponse {
            id: string;
            userId: string;
            userPhone: string;
            foodSkuId: string;
            foodName: string;
            foodTaste: string;
            merchantId: number;
            merchantPhone: string;
            isBrush: number;
            address: string;
            createTime: string;
            updateTime: string;
            mark: number;
        }

        interface MerchantResponse {
            id: string;
            userName: string;
            isBrush: number;
            merchantImg: string;
            phone: string;
            salesNum: number;
            star: number;
            createTime: string;
            updateTime: string;
        }

        interface FoodSkuItemResponse {
            id: string;
            createTime: string;
            foodImg: string;
            foodStats: string;
            merchantFoodType: string;
            merchantId: string;
            money: number;
            name: string;
            salesNum: number;
            updateTime: string;
        }
    }

    namespace MpUi {}

    namespace MpCore {
        /**
         * 服务器返回信息
         */
        interface Response {
            // 服务器返回状态码
            code: number;

            // 服务器返回提示信息
            message: string;

            // 服务器返回数据
            data: any;
        }

        /**
         * 分页数据
         */
        interface Paginate<T> {
            // 服务器返回的数据
            records: T;
            // 当前页码数
            current: number;
            // 总页数
            total: number;
            // 每页显示条数
            size: number;
        }

        interface Helper {
            /**
             * 页面跳转
             * @param url
             * @param type
             */
            to: (url: string, type?: 'navigate' | 'redirect' | 'tab') => void;

            /**
             * 手机号码脱敏
             * @param phone
             * @param former
             * @param latter
             */
            phoneNumberConvert: (phone: string, former?: number, latter?: number) => string;
        }
    }

    interface Uni {
        $mp: MpCore.Helper;
        $u: any;
    }
}
