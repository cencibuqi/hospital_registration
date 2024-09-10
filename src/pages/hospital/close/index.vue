<template>
  <div class="close-container">
    <div class="info">
      <h1>{{ hospitalDetail.hospitalInfo.hospital?.hosname }}停诊信息</h1>
      <el-empty description="暂无信息"></el-empty>
    </div>
  </div>
</template>

<script lang="ts" setup name="Close">
// 引入医院详情仓库数据
import useHospitalDetailStore from '@/store/modules/hospitalDetail';

const hospitalDetail = useHospitalDetailStore();

</script>

<style scoped lang="scss">
.close-container {
  .info {
    h1 {
      font-size: 22px;
      font-weight: bold;
      text-align: center;
    }
  }
}
</style>