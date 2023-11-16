export {};

declare global {
    namespace MpApi {
        interface WxLoginForm {
            js_code: string;
            code: string;
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
             * 完整资源路径
             * @param url
             */
            src: (url: string | undefined | null) => string;

            /**
             * 页面跳转
             * @param url
             * @param type
             */
            to: (url: string, type?: 'navigate' | 'redirect' | 'tab') => void;
        }
    }

    interface Uni {
        $mp: MpCore.Helper;
        $u: any;
    }
}
