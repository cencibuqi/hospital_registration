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
        <Level />
        <!-- 地区子组件 -->
        <Region />
        <!-- 展示医院的结构 -->
        <div class="hospital-info-card">
          <Card class="card-item" v-for="item in 10" :key="item" />
        </div>
        <!-- 分页 -->
        <div class="pagination-container">
          <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
            layout="prev, pager, next, jumper, ->, sizes, total" :total="13" background />
        </div>
      </el-col>
      <el-col :span="4">456</el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
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
import { ref } from 'vue';
// 分页器页码
let pageNo = ref<number>(1);
// 一页展示几条数据
let pageSize = ref<number>(10);
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

.pagination-container{
  margin: 10px 0;
}
</style>