<template>
  <div>
    <!-- 首页轮播图区域 -->
    <Carousel />
    <!-- 首页搜索框表单区域 -->
    <Search />
    <!-- 底部展示医院的结构 -->
    <el-row :gutter="20">
      <el-col :span="20">
        <!-- 等级子组件 -->
        <Level @getLevel="getLevel" />
        <!-- 地区子组件 -->
        <Region @getRegion="getRegion" />
        <!-- 展示医院的结构 -->
        <div class="hospital-info-card" v-if="hasHospitalArr.length > 0">
          <Card class="card-item" v-for="(item, index) in hasHospitalArr" :key="index" :hospitalInfo="item" />
        </div>
        <el-empty v-else description="暂无数据" />
        <!-- 分页 -->
        <div class="pagination-container">
          <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
            layout="prev, pager, next, jumper, ->, sizes, total" :total="total" background
            @current-change="currentChange" @size-change="sizeChange" />
        </div>
      </el-col>
      <el-col :span="4">456</el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup name="Home">
// 引入首页轮播图组件
import Carousel from './carousel/index.vue';
// 引入首页搜索组件
import Search from './search/index.vue';
// 引入首页等级的组件
import Level from './level/index.vue';
// 引入首页地区的组件
import Region from './region/index.vue';
// 引入展示医院信息的卡片组件
import Card from './card/index.vue';
// 分页器需要的数据
import { ref, onMounted } from 'vue';
import { reqHospital } from '@/api/home';
import { ContentType, HospitalResponseDataInter } from '@/api/home/type';
// 分页器页码
let pageNo = ref<number>(1);
// 一页展示几条数据
let pageSize = ref<number>(10);
// 存储已有的医院数据
let hasHospitalArr = ref<ContentType>([]);
// 存储医院总数
let total = ref<number>(0);
// 存储医院的等级
let hostype = ref<string>('');
// 存储医院的地区
let districtCode = ref<string>('');

// 组件挂载完毕，发一次请求
onMounted(() => {
  getHospitalInfo();
})

// 获取已有医院数据
const getHospitalInfo = async () => {
  // 获取医院数据默认第一页，一页十条数据
  let result: HospitalResponseDataInter = await reqHospital(pageNo.value, pageSize.value, hostype.value, districtCode.value);
  if (result.code === 200) {
    // 存储已有的医院数组
    hasHospitalArr.value = result.data.content;
    // 存储医院总个数
    total.value = result.data.totalElements;
  }
}

// 分页器页码发生变化的回调
const currentChange = () => {
  getHospitalInfo();
}
// 分页器下拉菜单发生变化时会触发
const sizeChange = () => {
  getHospitalInfo();
}

// 子组件自定义事件: 获取子组件传递给父组件的等级参数
const getLevel = (level: string) => {
  // 收集等级参数
  hostype.value = level;
  // 再次发请求
  getHospitalInfo();
}

// 子组件自定义事件: 获取子组件传递给父组件的地区参数
const getRegion = (region: string) => {
  districtCode.value = region;
  getHospitalInfo();
}

</script>

<style scoped lang="scss">
.hospital-info-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .card-item {
    width: 48%;
    margin: 10px 0;
  }
}

.pagination-container {
  margin: 10px 0;
}
</style>