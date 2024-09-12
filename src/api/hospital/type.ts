// 定义详情模块数据ts类型
export interface ResponseDataInter {
    code: number;
    message: string;
    ok: boolean;
}

// 医院详情数据
export interface HospitalDetailInter {
    "bookingRule": {
        "cycle": number,
        "releaseTime": string,
        "stopTime": string,
        "quitDay": number,
        "quitTime": string,
        "rule": string[]
    },
    "hospital": {
        "id": string,
        "createTime": string,
        "updateTime": string,
        "isDeleted": number,
        "param": {
            "hostypeString": string,
            "fullAddress": string
        },
        "hoscode": string,
        "hosname": string,
        "hostype": string,
        "provinceCode": string,
        "cityCode": string,
        "districtCode": string,
        "address": string,
        "logoData": string,
        "intro": string,
        "route": string
        "status": number,
        "bookingRule": null
    }
}

// 医院详情返回数据ts
export interface HospitalDetailResponseDataInter extends ResponseDataInter {
    data: HospitalDetailInter
}

// 医院科室数据
export interface DepartmentInter {
    "depcode": string,
    "depname": string,
    "children"?: DepartmentInter[]
}

// 存储科室数组类型
export type DepartmentArrType = DepartmentInter[];

// 获取科室接口返回数据
export interface DepartmentResponseDataInter extends ResponseDataInter {
    data: DepartmentArrType;
}