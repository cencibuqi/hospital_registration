// 引入二次封装axios
import request from '@/utils/request';
import { HospitalDetailResponseDataInter } from './type';

enum API {
    HOSPITAL_DETAIL_URL = 'hosp/hospital/'
}

// 获取医院详情接口
export const reqHospitalDetail = (hoscode: string) => request.get<any, HospitalDetailResponseDataInter>(API.HOSPITAL_DETAIL_URL + hoscode);