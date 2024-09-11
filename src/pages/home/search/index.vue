<template>
    <div class="search-container">
        <el-autocomplete clearable :trigger-on-focus="false" placeholder="请输入医院名称" v-model="hosName"
            :fetch-suggestions="fetchHosInfo" @select="goDetail" />
        <el-button type="primary" size="default" :icon="Search">搜索</el-button>
    </div>
</template>

<script lang="ts" setup name="Search">
// 引入element-plus提供的图标
import { Search } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// 引入请求方法
import { reqHospitalInfo } from '@/api/home';
import { HostipalInfoResponseDataInter } from '@/api/home/type';

// 创建路由器对象
let $router = useRouter();
// 收集搜索的关键字（医院的名称）
let hosName = ref<string>('');

// 顶部组件的回调
const fetchHosInfo = async (keyword: string, cb: any) => {
    // 当用户输入完关键字后函数会执行一次，发送请求获取需要展示的数据
    let result: HostipalInfoResponseDataInter = await reqHospitalInfo(keyword);
    // 整理数据拼成组件需要的格式
    let showData = result.data.map((item: any) => {
        return {
            value: item.hosname,    //展示医院的名字
            hosCode: item.hoscode   //存储医院的编码
        }
    })
    // 给组件提供展示的数组
    cb(showData);
}

const goDetail = (item: any) => {
    // 点击推荐项进入详情页
    $router.push({ path: '/hospital/register', query: {hoscode: item.hosCode} });
}

</script>

<style scoped lang="scss">
// 深度选择器：>>>  /deep/  ::v-deep
.search-container {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0;

    :deep(.el-autocomplete) {
        width: 600px;
        margin-right: 10px;
    }
}
</style>