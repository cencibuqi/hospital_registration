<template>
  <div class="top">
    <div class="content">
      <div class="left" @click="goHome">
        <img src="../../assets/images/logo.png" alt="logo">
        <p>尚医通 预约挂号统一平台</p>
      </div>
      <div class="right">
        <p class="help clickable">帮助中心</p>
        <p class="login clickable">登录/注册</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

let $router = useRouter();

// 点击返回首页
const goHome = () => {
  $router.push({ path: '/home' });
}
</script>

<style scoped lang="scss">
.top {
  letter-spacing: 1px;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);

  .content {
    width: 1200px;
    height: 70px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }

      p {
        font-size: 22px;
        color: #4490F3;
        // font-weight: bold;
      }
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #666;

      .clickable {
        cursor: pointer;

        &:hover {
          color: #95c0f7;
        }
      }

      .help {
        margin-right: 40px;
      }
    }
  }
}
</style>