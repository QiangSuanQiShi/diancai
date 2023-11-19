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
        }

        interface AccountInitInfo {
            user: UserResponse;
            token: string;
            createdAt: string;
            tokenExpiration: string;
        }

        interface UserState {
            user: UserResponse | null;
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
