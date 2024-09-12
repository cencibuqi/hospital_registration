// 引入二次封装axios
import request from '@/utils/request';
import { DepartmentResponseDataInter, HospitalDetailResponseDataInter } from './type';

enum API {
    HOSPITAL_DETAIL_URL = 'hosp/hospital/',
    // 获取某一医院科室信息
    HOSPITAL_DEPARTMENT_URL = `hosp/hospital/department/`
}

// 获取医院详情接口
export const reqHospitalDetail = (hoscode: string) => request.get<any, HospitalDetailResponseDataInter>(API.HOSPITAL_DETAIL_URL + hoscode);

// 获取医院科室接口
export const reqHospitalDepartment = (hoscode: string) => request.get<any, DepartmentResponseDataInter>(API.HOSPITAL_DEPARTMENT_URL + hoscode);