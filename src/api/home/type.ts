// 定义首页模块ts数据类型
export interface ResponseDataInter {
    code: number;
    message: string;
    ok: boolean;
}

// 已有医院数据的ts类型
export interface HospitalInter {
    "id": string;
    "createTime": string;
    "updateTime": string;
    "isDeleted": number;
    "param": {
        "hostypeString": string,
        "fullAddress": string
    };
    "hoscode": string;
    "hosname": string;
    "hostype": string;
    "provinceCode": string;
    "cityCode": string;
    "districtCode": string;
    "address": string;
    "logoData": string;
    "intro": string;
    "route": string;
    "status": number;
    "bookingRule": {
        "cycle": number,
        "releaseTime": string,
        "stopTime": string,
        "quitDay": number,
        "quitTime": string,
        "rule": string[]
    };
}

// 存储全部已有医院的数据类型
export type ContentType = HospitalInter[];

// 获取已有医院接口返回的数据的ts类型
export interface HospitalResponseDataInter extends ResponseDataInter {
    "data": {
        "content": ContentType,
        "pageable": {
            "sort": {
                "sorted": boolean,
                "unsorted": boolean,
                "empty": boolean
            },
            "pageNumber": number,
            "pageSize": number,
            "offset": number,
            "paged": boolean,
            "unpaged": boolean
        },
        "totalPages": number,
        "totalElements": number,
        "last": boolean,
        "first": boolean,
        "sort": {
            "sorted": boolean,
            "unsorted": boolean,
            "empty": boolean
        },
        "numberOfElements": number,
        "size": number,
        "number": number,
        "empty": boolean
    }
}

// 医院的等级或地区数据的ts类型
export interface HostipalLevelAndRegionInter {
    "id": number,
    "createTime": string,
    "updateTime": string,
    "isDeleted": number,
    "param": {},
    "parentId": number,
    "name": string,
    "value": string,
    "dictCode": string,
    "hasChildren": boolean
}

export type HostipalLevelAndRegionArrType = HostipalLevelAndRegionInter[];

// 获取等级或地区接口返回数据类型
export interface HostipalLevelAndRegionResponseDataInter extends ResponseDataInter {
    data: HostipalLevelAndRegionArrType;
}

export interface HostipalInfoResponseDataInter extends ResponseDataInter {
    data: ContentType[]
}