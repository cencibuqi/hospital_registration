<template>
    <div>
        <el-card class="box-card" shadow="hover" @click="goDetail">
            <div class="card-content">
                <div class="left">
                    <div class="hospital-name">
                        {{ hospitalInfo?.hosname }}
                    </div>
                    <div class="hospital-tip">
                        <div class="hospital-level">
                            <el-icon :size="20">
                                <Histogram />
                            </el-icon>
                            <span>{{ hospitalInfo?.param.hostypeString }}</span>
                        </div>
                        <div class="open-time">
                            <el-icon :size="20">
                                <Clock />
                            </el-icon>
                            <span>每天{{ hospitalInfo?.bookingRule.releaseTime }}放号</span>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <img :src="`data:image/jpeg;base64,${hospitalInfo?.logoData}`" alt="">
                </div>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup name="Card">
import { Clock, Histogram } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';

let $router = useRouter();

const goDetail = () => {
    $router.push({ path: '/hospital/register', query: { hoscode: props.hospitalInfo.hoscode } });
}

// 接受父组件传递的props->即为已有医院信息
let props = defineProps(['hospitalInfo']);
</script>

<style scoped lang="scss">
.card-content {
    height: 58px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
        width: 60%;

        .hospital-name {
            display: flex;
            height: 42px;
            font-weight: 500;
            font-size: 16px;
            align-items: center;
            width: 100%;
        }

        .hospital-tip {
            width: 250px;
            color: #999;
            margin-top: 10px;
            display: flex;
            justify-content: space-between;

            .hospital-level,
            .open-time {
                font-size: 14px;
                display: flex;
                align-items: center;

                span {
                    margin-left: 3px;
                }
            }
        }
    }

    .right {
        img {
            width: 80px;
            height: 80px;
            border-radius: 40px;
            margin-left: 12px;
        }
    }
}
</style>