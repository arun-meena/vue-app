<template>
  <div class="header">
    <div class="balance-wrapper">
      Available balance
      <div class="amount"><span class="currency">S$</span> 3,000</div>
    </div>
    <el-button class="hidden-sm-and-down" type="primary" size="medium" icon="el-icon-circle-plus">New Card</el-button>
    <div class="phone-action hidden-md-and-up">
      <img :src="require('@/assets/svg/Logo-Mobile-Small.svg')" alt="">
      <el-button type="text" size="medium" icon="el-icon-circle-plus">New Card</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/main";
@import "~/assets/scss/variables";

.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 34px;
  @include for-phone {
    color: #FFF;
  }
  .balance-wrapper {
    font-size: 14px;
    .amount {
      margin-top: 16px;
      font-size: 24px;
      line-height: 16px;
      font-weight: bold;
      display: flex;
      align-items: center;
    }
    .currency {
      font-size: 13px;
      line-height: 16px;
      text-align: center;
      color: #fff;
      background-color: $--color-primary;
      margin-right: 12px;
      padding: 2px 13px;
      border-radius: 4px;
    }
  }
  .el-button {
    background-color: $--color-secondary-light-9;
    font-weight: bold;
    font-size: 13px;
    border: none;
    padding: 9px 12px;
    @include for-phone {
      background-color: transparent;
    }
  }
}
.phone-action {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      height: 25px;
      width: 25px;
      margin-bottom: 20px;
    }
} 
</style>
