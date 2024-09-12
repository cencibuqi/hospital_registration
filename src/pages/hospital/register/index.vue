<template>
  <div class="register-container">
    <div class="top">
      <div class="title">{{ hospitalDetail.hospitalInfo.hospital?.hosname }}</div>
      <div class="level">
        <svg t="1725948238825" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="4525" width="16" height="16">
          <path
            d="M153.6 449.163636H209.454545c109.381818 0 167.563636-86.109091 167.563637-176.872727V174.545455c0-4.654545 0-11.636364 2.327273-16.29091 9.309091-51.2 58.181818-86.109091 109.381818-76.8l13.963636 2.327273c46.545455 6.981818 86.109091 37.236364 104.727273 79.127273 18.618182 39.563636 25.6 83.781818 18.618182 125.672727l-9.309091 72.145455v2.327272c0 6.981818 4.654545 11.636364 11.636363 11.636364h244.363637c44.218182 6.981818 74.472727 46.545455 69.818182 93.090909L861.090909 872.727273c-4.654545 39.563636-39.563636 69.818182-81.454545 69.818182H172.218182c-37.236364 0-67.490909-30.254545-69.818182-67.49091l-18.618182-353.745454c-2.327273-39.563636 27.927273-72.145455 67.490909-72.145455h2.327273z m160.581818 423.563637h465.454546c4.654545 0 11.636364-4.654545 11.636363-9.309091l81.454546-402.618182c0-6.981818-4.654545-11.636364-9.309091-13.963636H628.363636c-44.218182 0-81.454545-37.236364-81.454545-81.454546v-11.636363l9.309091-72.145455c4.654545-30.254545 0-60.509091-13.963637-86.109091-9.309091-23.272727-30.254545-37.236364-53.527272-41.890909l-13.963637-2.327273c-13.963636-2.327273-25.6 6.981818-27.927272 18.618182v100.072727c0 100.072727-53.527273 200.145455-158.254546 235.054546l25.6 367.709091zM200.145455 516.654545h-23.272728c-13.963636 0-23.272727 11.636364-23.272727 23.272728L162.909091 849.454545c0 11.636364 11.636364 23.272727 23.272727 23.272728h34.909091c13.963636 0 23.272727-9.309091 23.272727-23.272728v-2.327272l-20.945454-307.2c-2.327273-11.636364-11.636364-23.272727-23.272727-23.272728z"
            fill="#333333" p-id="4526"></path>
        </svg>
        <span>{{ hospitalDetail.hospitalInfo.hospital?.param.hostypeString }}</span>
      </div>
    </div>
    <!-- 展示内容区域 -->
    <div class="content">
      <div class="left">
        <img :src="'data:image/jpeg;base64,' + hospitalDetail.hospitalInfo.hospital?.logoData" alt="">
      </div>
      <div class="right">
        <div class="rule">挂号规则</div>
        <div class="time">
          <span class="label">预约周期：</span><span>10天</span>
          <span class="label space">放号时间：</span><span>{{ hospitalDetail.hospitalInfo.bookingRule?.releaseTime }}</span>
          <span class="label space">停挂时间：</span><span>{{ hospitalDetail.hospitalInfo.bookingRule?.stopTime }}</span>
        </div>
        <div class="address">
          <span class="label">具体位置：</span><span>{{ hospitalDetail.hospitalInfo.hospital?.param.fullAddress }}</span>
        </div>
        <div class="route">
          <span class="label">具体路线：</span><span>{{ hospitalDetail.hospitalInfo.hospital?.route }}</span>
        </div>
        <div class="quit-time mb-20">
          <span class="label">退号时间：</span><span>就诊前一个工作日{{ hospitalDetail.hospitalInfo.bookingRule?.quitTime
            }}前取消</span>
        </div>
        <div class="rule">医院预约规则</div>
        <div class="rule-info" v-for="(item, index) in hospitalDetail.hospitalInfo.bookingRule?.rule" :key="index"><span
            class='label'>{{ `${index + 1}.${item}` }}</span></div>
      </div>
    </div>
    <!-- 放置科室结构 -->
    <div class="department-title">选择科室</div>
    <div class="department-container">
      <div class="left-nav">
        <ul>
          <li v-for="department in hospitalDetail.departmentInfoArr" :key="department.depcode">
            {{ department.depname }}
          </li>
        </ul>
      </div>
      <div class="right-content">
        456
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="Register">
// 引入医院详情仓库数据
import useHospitalDetailStore from '@/store/modules/hospitalDetail';

const hospitalDetail = useHospitalDetailStore();

</script>

<style scoped lang="scss">
.register-container {
  .top {
    display: flex;

    .title {
      color: #333;
      font-size: 20px;
      font-weight: 700;
      margin-right: 15px;
    }

    .level {
      color: #7f7f7f;
      height: 24px;
      text-align: center;
      line-height: 24px;
      display: flex;
      align-items: center;

      span {
        margin-left: 5px;
      }
    }
  }

  .content {
    display: flex;
    margin-top: 30px;

    .left {
      min-width: 80px;

      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }

    .right {
      flex: 1;
      margin-left: 30px;

      .time,
      .address,
      .route,
      .quit-time,
      .rule-info {
        font-size: 12px;
        margin-top: 10px;

        span {
          line-height: 20px;
        }

        .label {
          color: #7f7f7f;
        }

        .space {
          margin-left: 50px;
        }
      }

      .rule {
        margin-bottom: 15px;
      }

      .mb-20 {
        margin-bottom: 20px;
      }
    }
  }

  .department-title {
    padding-top: 50px;
    padding-bottom: 20px;
    background: #fff;
    letter-spacing: 1px;
    font-weight: 700;
    color: #333;
    font-size: 16px;
  }

  .department-container {
    width: 100%;
    height: 500px;
    display: flex;

    .left-nav {
      width: 170px;
      height: 100%;

      ul {
        width: 100%;
        height: 100%;
        background-color: #f4f9ff;
        display: flex;
        flex-direction: column;

        li {
          flex: 1;
          text-align: center;
          color: #333;
          font-size: 14px;
          line-height: 40px;

          &:hover {
            background: #fff;
          }
        }
      }
    }

    .right-content {
      flex: 1;
      margin-left: 30px;
    }
  }
}
</style>