import { get } from '@/plugins/request';

export default {
    // 账号登录
    login: (params: MpApi.WxLoginForm) => get<string>('/user/login', params),
};
