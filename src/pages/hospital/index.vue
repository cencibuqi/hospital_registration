<template>
  <div class="hospital-container">
    <!-- 导航区 -->
    <div class="menu">
      <div class="top">
        <el-icon>
          <HomeFilled />
        </el-icon>
        <span>/ 医院信息</span>
      </div>
      <!-- :router="true" 添加路由模式以index为path -->
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
        <el-menu-item index="/hospital/register" @click="changeActive('/hospital/register')">
          <el-icon><icon-menu /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="/hospital/detail" @click="changeActive('/hospital/detail')">
          <el-icon>
            <document />
          </el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="/hospital/notice" @click="changeActive('/hospital/notice')">
          <el-icon>
            <setting />
          </el-icon>
          <span>预约通知</span>
        </el-menu-item>
        <el-menu-item index="/hospital/close" @click="changeActive('/hospital/close')">
          <el-icon>
            <InfoFilled />
          </el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item index="/hospital/search" @click="changeActive('/hospital/search')">
          <el-icon>
            <Search />
          </el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 内容展示 -->
    <div class="content">
      <!-- 子组件结构展示区 -->
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="Hospital">
// 左侧菜单所需图标
import {
  Document,
  Menu as IconMenu,
  InfoFilled,
  Setting,
  Search,
  HomeFilled,
} from '@element-plus/icons-vue'
import { RouterView, useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';
import useHospitalDetailStore from '@/store/modules/hospitalDetail';

let detailStore = useHospitalDetailStore();

// 组件挂载完毕通知pinia仓库发送请求获取医院详情数据，并存储
onMounted(() => {
  detailStore.getHospitalDetail($route.query.hoscode as string);
})

let $route = useRoute();
let $router = useRouter();

const changeActive = (path: string) => {
  $router.push({ path, query: { hoscode: $route.query.hoscode } });
}
</script>

<style scoped lang="scss">
.hospital-container {
  display: flex;

  .menu {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;

    .top {
      color: #7f7f7f;
      margin-bottom: 10px;
      font-size: 14px;
    }
  }

  .content {
    flex: 8
  }
}
</style>