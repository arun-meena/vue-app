<template>
  <el-collapse v-model="activeName" class="collapse">
    <el-collapse-item name="1">
      <template slot="title">
        <div class="title">
          <div class="title-icon">
            <img :src="require('@/assets/svg/Card Details.svg')" />
          </div>
          Card details
        </div>
      </template>
      <div class="collapse-content">All Card details</div>
    </el-collapse-item>
    <el-collapse-item name="2">
      <template slot="title">
        <div class="title">
          <div class="title-icon">
            <img :src="require('@/assets/svg/Recent Transactions.svg')" />
          </div>
          Recent transactions
        </div>
      </template>
      <div class="collapse-content">
        <recent-transactions :transaction-list="cardTransactions"/>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
import RecentTransactions from "./RecentTransactions.vue";

export default {
  components: { RecentTransactions },
  data() {
    return {
      activeName: "2",
      cardTransactions: [
        {
          name: "Hamleys",
          type: "purchase",
          date: "20 May 2020",
          decsription: "Refund on debit card",
          credit: "150",
          debit: null
        },
        {
          name: "Hamleys",
          type: "travel",
          date: "20 May 2020",
          decsription: "Charged to debit card",
          credit: null,
          debit: "150"
        },
        {
          name: "Hamleys",
          type: "emi",
          date: "20 May 2020",
          decsription: "Charged to debit card",
          credit: null,
          debit: "150"
        },
        {
          name: "Hamleys",
          type: "purchase",
          date: "20 May 2020",
          decsription: "Charged to debit card",
          credit: null,
          debit: "150"
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";
@import "~/assets/scss/main";

.collapse {
  border: none;
  @include for-phone {
    padding: 24px;
    margin: -10px -24px 24px;
    background-color: #fff;
  }
  .el-collapse-item {
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    margin-bottom: 24px;
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.04);
  }
  .title {
    display: flex;
    align-items: center;
    .title-icon {
      margin-right: 12px;
    }
  }
  .collapse-content {
    padding: 24px;
  }
}
::v-deep .el-collapse-item__header {
  padding: 24px;
  font-size: 14px;
  line-height: 18px;
  height: 72px;
  color: $--color-secondary;
  background-color: $--color-secondary-light-1;
  border-radius: 8px;
  border: 1px solid #f5f5f5;
}
::v-deep .el-collapse-item__arrow {
  color: #fff;
  background-color: #d8e1f3;
  border-radius: 50%;
  padding: 3px;
  font-weight: bold;
}

::v-deep .el-collapse-item__content {
  padding-bottom: 0;
}

::v-deep .el-collapse-item__wrap {
  border-radius: 8px;
}
.card-action {
  margin-top: 32px;
  padding: 20px 27px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  background-color: $--color-secondary-light-2;

  .name {
    margin-top: 7px;
    color: $--color-secondary;
    font-size: 13px;
    line-height: 14px;
  }
}
</style>
