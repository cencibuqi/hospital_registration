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
    color: #7f7f7f;
    margin-top: 10px;

    .region-content {
        display: flex;

        .left {
            margin-right: 10px;
            min-width: 48px;
        }

        .specific-area {
            display: flex;
            flex-wrap: wrap;

            li {
                margin-right: 10px;
                margin-bottom: 10px;

                &.active {
                    color: #55a6fe;
                }
            }

            li:hover {
                color: #55a6fe;
            }
        }
    }
}
</style>