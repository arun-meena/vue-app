<template>
  <div>
    <div class="action-btn">
      <el-button
        type="text"
        size="small"
        @click="cardNoMasking = !cardNoMasking"
      >
        <i class="el-icon-view"></i>
        Show card number
      </el-button>
    </div>
    <div class="card">
      <div class="logo-wrapper">
        <img class="logo" :src="logoUrl" />
      </div>
      <div class="cust-name">{{ custName }}</div>
      <div class="card-no">
        <div class="digits" v-for="(item, index) in cardNoArray" :key="item">
          <div v-if="cardNoMasking && index < 3">
            <span class="circle" v-for="el in 4" :key="el"></span>
          </div>
          <div v-else>{{ item }}</div>
        </div>
      </div>
      <div class="valid-cvv-wrapper">
        <div class="valid-date">
          Thru: <span class="date">{{ validDate }}</span>
        </div>
        <div class="cvv">CVV: <span class="cvv-no">***</span></div>
      </div>
      <div class="brand">
        <img :src="brandUrl" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    custName: {
      type: String,
      required: true
    },
    cardNo: {
      type: String,
      required: true
    },
    validDate: {
      type: String,
      required: true
    },
    brandFileName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      logoUrl: require("@/assets/svg/Aspire Logo.svg"),
      brandUrl: require(`@/assets/svg/${this.brandFileName}`),
      cardNoMasking: true
    };
  },
  computed: {
    cardNoArray() {
      return this.cardNo.split("-");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";
@import "~/assets/scss/main";

.action-btn {
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  .el-button {
    color: $--color-primary;
    font-weight: bold;
    @include for-phone {
      background-color: #fff;
      margin-bottom: -10px;
      z-index: -1;
      padding: 9px 15px 20px;
    }
  }
  i {
    font-weight: bold;
    margin-right: 5px;
  }
}

.card {
  border-radius: 12px;
  background-color: $--color-primary;
  color: #fff;
  padding: 27px;
  font-weight: bold;
  z-index: 2;
  .logo-wrapper {
    display: flex;
    justify-content: flex-end;
  }
  .cust-name {
    padding: 27px 0;
    font-size: 24px;
    line-height: 20px;
    letter-spacing: 0.58px;
  }
  .card-no {
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 3.46px;
    display: flex;
    .digits {
      margin-right: 27px;
      &:last-child() {
        margin-right: 0;
      }
      .circle {
        height: 8px;
        width: 8px;
        background-color: #fff;
        border-radius: 50%;
        margin-right: 3px;
        display: inline-block;
        &:last-child() {
          margin-right: 0;
        }
      }
    }
  }
  .valid-cvv-wrapper {
    padding: 17px 0 4px;
    letter-spacing: 0.31px;
    display: flex;
    align-items: center;
    .valid-date {
      margin-right: 36px;
      .date {
        letter-spacing: 1.56px;
      }
    }
    .cvv-no {
      font-size: 20px;
      letter-spacing: 2.88px;
      vertical-align: middle;
      display: inline-block;
      padding-top: 5px;
    }
  }
  .brand {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
