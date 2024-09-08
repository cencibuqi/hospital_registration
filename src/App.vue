<template>
  <div class="container">
    <!-- 展示顶部组件区域 -->
    <HospitalTop />
    <!-- 展示路由组件区域 -->
    <div class="content">
      <!-- 展示路由组件的区域 -->
      <RouterView></RouterView>
    </div>
    <!-- 展示底部组件区域 -->
    <HospitalBottom />
  </div>
</template>

<script lang="ts" setup name="App">
import request from '@/utils/request';
import { onMounted } from 'vue';

onMounted(() => {
  request.get('/hos/hospital/1/10').then(res => {
    console.log(res);
  })
})
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 700px;
  }
}
</style>
