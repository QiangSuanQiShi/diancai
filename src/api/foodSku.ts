import { get, post } from '@/plugins/request';

export default {
    getYouWantEat: (params: any) => post('/foodSku/getYouWantEat', params),
    selectFoodByMerchantID: (merchant_id: number) => get(`/foodSku/selectFoodByMerchantID/${merchant_id}`),
};
