// 统一管理首页模块接口
import request from '@/utils/request';
import { HospitalResponseDataInter, HostipalInfoResponseDataInter, HostipalLevelAndRegionResponseDataInter } from './type';

// 通过枚举管理首页模块的接口地址
enum API {
    // 获取已有的医院数据的接口
    HOSPITAL_URL = `/hosp/hospital/`,
    // 获取医院的等级及地区的接口
    HOSTIPAL_LEVEL_AND_REGION_URL = `/cmn/dict/findByDictCode/`,
    // 根据关键字医院的名称获取数据
    HOSPITAL_INFO_URL = `/hosp/hospital/findByHosname/`,
}

// 获取医院数据
export const reqHospital = (page: number, limit: number, hostype = "", districtCode = "") => request.get<any, HospitalResponseDataInter>(API.HOSPITAL_URL + `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`);

// 获取医院等级及地区
export const reqHospitalLevelAndRegion = (dictCode: string) => request.get<any, HostipalLevelAndRegionResponseDataInter>(API.HOSTIPAL_LEVEL_AND_REGION_URL + dictCode);

// 依据关键字获取医院的数据进行展示
export const reqHospitalInfo = (hosname: string) => request.get<any, HostipalInfoResponseDataInter>(API.HOSPITAL_INFO_URL + hosname);