<template>
    <div class="hospital-region">
        <div class="region-content">
            <div class="left">地区：</div>
            <ul class="specific-area">
                <li :class="{ active: activeFlag == '' }" @click="changeRegion('')">全部</li>
                <li v-for="region in regionArr" :class="{ active: activeFlag == region.value }" :key="region.value"
                    @click="changeRegion(region.value)">{{ region.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup name="Region">
import { reqHospitalLevelAndRegion } from '@/api/home';
import { HostipalLevelAndRegionResponseDataInter, HostipalLevelAndRegionArrType } from '@/api/home/type';
import { onMounted, ref } from 'vue';

//定义一个数组存储医院等级数据 
let regionArr = ref<HostipalLevelAndRegionArrType>([]);
// 控制医院等级高亮响应式数据
let activeFlag = ref<string>('');

onMounted(() => {
    getRegion();
})

// 获取地区数据
const getRegion = async () => {
    const result: HostipalLevelAndRegionResponseDataInter = await reqHospitalLevelAndRegion('Beijin');
    regionArr.value = result.data;
}

// 点击不同地区按钮回调
const changeRegion = (region: string) => {
    activeFlag.value = region;
    // 触发自定义事件：将医院地区参数传递给父组件
    $emit('getRegion', region);
}

const $emit = defineEmits(['getRegion']);

</script>

<style scoped lang="scss">
.hospital-region {
    color: #666;
    margin-top: 10px;
    letter-spacing: 1px;

    .region-content {
        display: flex;

        .left {
            margin-right: 10px;
            min-width: 48px;
            margin-bottom: 20px;
            color: #999;
            font-size: 14px;
        }

        .specific-area {
            display: flex;
            flex-wrap: wrap;
            font-size: 14px;

            li {
                margin-right: 20px;
                margin-bottom: 15px;

                &.active {
                    color: #55a6fe;
                    font-weight: 700;
                }
            }

            li:hover {
                color: #55a6fe;
                font-weight: 700;
            }
        }
    }
}
</style>