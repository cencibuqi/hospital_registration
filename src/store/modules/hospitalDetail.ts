import { defineStore } from "pinia";
import { reqHospitalDepartment, reqHospitalDetail } from "@/api/hospital";
import type { HospitalDetailResponseDataInter, HospitalDetailInter, DepartmentResponseDataInter } from "@/api/hospital/type";
import type { DetailStateInter } from "./interface";
// import { ref } from "vue";

// 选项式
const useHospitalDetailStore = defineStore('hospitalDetail', {
    state: (): DetailStateInter => {
        return {
            // 医院详情的数据
            hospitalInfo: ({} as HospitalDetailInter),
            departmentInfoArr: [],
        }
    },
    actions: {
        // 获取医院详情的方法
        async getHospitalDetail(hoscode: string) {
            let result: HospitalDetailResponseDataInter = await reqHospitalDetail(hoscode);
            if (result.code === 200) {
                this.hospitalInfo = result.data;
            }
        },
        async getDepartmentDetail(hoscode: string) {
            let result: DepartmentResponseDataInter = await reqHospitalDepartment(hoscode);
            if (result.code === 200) {
                this.departmentInfoArr = result.data;
            }
        }
    },
    getters: {

    }
})

// 组合式
// const useHospitalDetailStore = defineStore('hospitalDetail', () => {
//     const hospitalInfo = ref({});

//     async function getHospitalDetail(hoscode: string) {
//         let result: HospitalDetailResponseDataInter = await reqHospitalDetail(hoscode);
//         switch (result.code) {
//             case 200:
//                 hospitalInfo.value = result.data;
//                 break;
//         }
//     }

//     return { hospitalInfo, getHospitalDetail };
// })

// 获取仓库的方法对外暴露
export default useHospitalDetailStore;