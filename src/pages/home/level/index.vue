<template>
    <div class="hospital-level">
        <h1 class="title">医院</h1>
        <div class="level-content">
            <div class="left">等级：</div>
            <ul class="specific-level">
                <li :class="{ active: activeFlag == '' }" @click="changeLevel('')">全部</li>
                <li v-for="level in levelArr" :class="{ active: activeFlag == level.value }" :key="level.value"
                    @click="changeLevel(level.value)">{{ level.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup name="Level">
import { reqHospitalLevelAndRegion } from '@/api/home';
import { HostipalLevelAndRegionResponseDataInter, HostipalLevelAndRegionArrType } from '@/api/home/type';
import { onMounted, ref } from 'vue';

//定义一个数组存储医院等级数据 
let levelArr = ref<HostipalLevelAndRegionArrType>([]);
// 控制医院等级高亮响应式数据
let activeFlag = ref<string>('');

onMounted(() => {
    getLevel();
})

const getLevel = async () => {
    const result: HostipalLevelAndRegionResponseDataInter = await reqHospitalLevelAndRegion('Hostype');
    levelArr.value = result.data;
}

const changeLevel = (level: string) => {
    // 高亮响应式数据存储level数值
    activeFlag.value = level;
    // 触发自定义事件：将医院等级参数传递给父组件
    $emit('getLevel', level);
}

let $emit = defineEmits(['getLevel']);

</script>

<style scoped lang="scss">
.hospital-level {
    color: #666;
    letter-spacing: 1px;

    .title {
        color: #333;
        font-weight: 700;
        margin-bottom: 30px;
    }

    .level-content {
        display: flex;

        .left {
            margin-right: 10px;
            margin-bottom: 20px;
            color: #999;
            font-size: 14px;
        }

        .specific-level {
            display: flex;
            font-size: 14px;

            li {
                margin-right: 20px;

                &.active {
                    color: #55a6fe;
                    font-weight: 700;
                }
            }

            li:hover {
                color: #55a6fe;
                cursor: pointer;
                font-weight: 700;
            }
        }
    }
}
</style>