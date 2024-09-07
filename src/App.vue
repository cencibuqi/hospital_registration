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
