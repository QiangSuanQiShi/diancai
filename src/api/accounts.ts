import { get, post } from '@/plugins/request';

export default {
    // 账号登录
    login: (data: MpApi.WxLoginForm) => get<MpApi.UserResponse>('/user/login', data),
    // 管理端初始化
    init: () => get<MpApi.UserResponse>('/user/getUserInfoByToken'),
};
