import Request from 'luch-request';
import type { HttpRequestConfig, HttpResponse, HttpError, HttpParams, HttpData } from 'luch-request';
import { baseURL, timeout, TOKEN_NAME } from '@/config';

// 请求实例
const service = new Request({
    baseURL,
    timeout,
    header: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
} as HttpRequestConfig);
// 请求拦截器
service.interceptors.request.use((config: HttpRequestConfig) => {
    const token = uni.getStorageSync(TOKEN_NAME);
    if (token) {
        config.header = {
            ...config.header,
            token: `${token}`,
        };
    }
    return config;
});
// 响应拦截器
service.interceptors.response.use(
    (response: HttpResponse) =>
        new Promise((resolve, reject) => {
            if (response.statusCode !== 200) {
                reject(response.errMsg);
            }
            const res = response.data as MpCore.Response;
            if (res.code !== 200) {
                uni.showToast({
                    title: res.message,
                    position: 'bottom',
                    icon: 'none',
                    duration: 3000,
                });
                reject(res.message);
            } else {
                if (res.message) {
                    uni.showToast({
                        position: 'center',
                        icon: 'success',
                        title: res.message,
                        duration: 3000,
                    });
                }
                resolve(res.data);
            }
        }),
    (error: HttpError) =>
        new Promise((reject) => {
            console.log(error);
            let msg = '未知错误';
            if (error.statusCode === 500) {
                msg = '[500]接口错误';
            }
            uni.showToast({
                icon: 'error',
                title: msg,
                duration: 3000,
            });
            reject(msg);
        })
);
/**
 * HTTP Get请求
 * @param url 地址
 * @param params 附加参数
 */
export function get<T = any>(url: string, params?: HttpParams) {
    return service.get<T, T>(url, {
        params,
    });
}

/**
 * HTTP Post请求
 * @param url 地址
 * @param data 附加数据
 */
export function post<T = any>(url: string, data?: HttpData) {
    return service.post<T, T>(url, data);
}

/**
 * HTTP Patch请求
 * @param url 地址
 * @param data 附加数据
 */
export function patch<T = any>(url: string, data?: HttpData) {
    return post<T>(url, {
        ...data,
        _method: 'PATCH',
    });
}

/**
 * HTTP Put请求
 * @param url 地址
 * @param data 附加数据
 */
export function put<T = any>(url: string, data?: HttpData) {
    return post<T>(url, {
        ...data,
        _method: 'PUT',
    });
}

/**
 * HTTP Delete请求
 * @param url 地址
 * @param data 附加数据
 */
export function del<T = any>(url: string, data?: HttpData) {
    return service.delete<T, T>(url, data);
}

/**
 * HTTP Upload请求
 * @param url
 * @param filePath 需要上传的文件路径地址
 * @param name 服务器接收的上传key名称
 */
export function upload<T = any>(url: string, filePath: string, name: string = 'file') {
    return service.upload<T, T>(url, {
        filePath,
        name,
    });
}

// Laravel api控制器封装, 返回接口请求对象
export function resource<T = any>(name: string) {
    return {
        // 获取服务器数据
        index: (params?: any) => get<T[]>(`/${name}`, params),
        // 获取服务器分页数据
        indexPage: (params: any) => get<MpCore.Paginate<T[]>>(`/${name}`, params),
        // 保存数据
        store: (data: any) => post(`/${name}`, data),
        // 修改数据
        update: (id: number, data: any) => patch(`/${name}/${id}`, data),
        // 删除数据
        destroy: (id: number) => del(`/${name}/${id}`),
        // 获取详细
        show: (id: number) => get<T>(`/${name}/${id}`),
    };
}
