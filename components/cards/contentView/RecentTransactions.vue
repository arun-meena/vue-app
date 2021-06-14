<template>
  <div class="transactions-wrapper">
    <div class="transaction" v-for="item in transactionList" :key="item.id">
      <div :class="iconType(item.type).className">
        <img :src="iconType(item.type).icon" />
      </div>
      <div class="details">
        <div class="attributes">
          <div>
            <div class="name">{{ item.name }}</div>
            <div class="date">{{ item.date }}</div>
          </div>
          <div :class="['price', { success: item.credit }]">
            {{ item.credit ? "+ S$" + item.credit : "- S$" + item.debit }}
          </div>
        </div>
        <div class="decsription">
          <div class="icon">
            <img :src="require('@/assets/svg/business-and-finance.svg')" />
          </div>
          {{ item.decsription }}
        </div>
      </div>
    </div>
    <div class="view-all">
      View all card transaction
    </div>
  </div>
</template>

<script>
export default {
  props: {
    transactionList: {
      type: Array,
      required: true
    }
  },
  methods: {
    iconType(transType) {
      let iconType;
      let className = "";
      switch (transType) {
        case "purchase":
          iconType = "file-storage.svg";
          break;
        case "travel":
          iconType = "flights.svg";
          className = "green";
          break;
        case "emi":
          iconType = "megaphone.svg";
          className = "red";
          break;
        default:
          iconType = "file-storage.svg";
          break;
      }
      return {
        icon: require(`@/assets/svg/${iconType}`),
        className: "icon " + className
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";

.transaction {
  padding: 16px 0;
  display: flex;
  border-bottom: 1px solid #f5f5f5;
  &:last-child {
    border-bottom: none;
  }
  .icon {
    height: 48px;
    width: 48px;
    padding: 16px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    background-color: #009dff1a;
    &.green {
      background-color: #00d6b51a;
    }
    &.red {
      background-color: #f251951a;
    }
  }
  .details {
    margin-left: 12px;
    display: flex;
    flex: 1;
    flex-direction: column;
    .attributes {
      font-size: 14px;
      line-height: 18px;
      display: flex;
      justify-content: space-between;
      .name {
        font-weight: 600;
      }
      .date {
        color: $--color-text-light;
        font-size: 13px;
      }
      .price {
        font-weight: bold;
        &.success {
          color: $--color-primary;
        }
      }
    }
  }
  .decsription {
    color: $--color-secondary-light-9;
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    display: flex;
    align-items: center;
    margin-top: 12px;
    .icon {
      width: 24px;
      height: 20px;
      padding: 6px;
      margin: 0 8px 0 0;
      background-color: $--color-secondary-light-9;
    }
  }
}
.view-all {
    font-size: 13px;
    line-height: 18px;
    font-weight: 600;
    margin: -1px -25px -25px;
    cursor: pointer;
    text-align: center;
    color: $--color-primary;
    background-color: #EDFFF5;
    padding: 16px;
    border: 1px solid #DDFFEC;
}
</style>
