<template>
  <div class="bottom">
    <div class="content">
      <div class="left">
        <span class="record">京ICP备13018369号</span>
        <span class="tel">电话挂号010-56253825</span>
      </div>
      <div class="right">
        <span class="clickable">联系我们</span>
        <span class="clickable">合作伙伴</span>
        <span class="clickable">用户协议</span>
        <span class="clickable">隐私协议</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.bottom {
  width: 100%;
  height: 50px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;

  .content {
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;

    .left {
      .record {
        color: #bbb;
      }

      .tel {
        margin-left: 42px;
        color: #666;
      }
    }

    .right {
      width: 341px;
      display: flex;
      justify-content: space-between;

      span {
        color: #666;
      }

      .clickable {
        cursor: pointer;

        &:hover {
          color: #95c0f7;
        }
      }
    }
  }
}
</style>