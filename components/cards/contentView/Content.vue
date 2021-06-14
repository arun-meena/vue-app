<template>
  <el-tabs class="tab" v-model="activeName">
    <el-tab-pane label="My debit cards" name="dcCards">
      <el-card class="content-card hidden-sm-and-down">
        <el-row :gutter="46">
          <el-col :span="12" :xs="24">
            <debit-cards-view />
          </el-col>
          <el-col :span="12" :xs="24">
            <card-details />
          </el-col>
        </el-row>
      </el-card>
      <debit-cards-view class="hidden-md-and-up"/>
      <card-details class="hidden-md-and-up"/>
    </el-tab-pane>
    <el-tab-pane label="All company cards" name="allCards">
      <el-card class="content-card">
        All Company cards
      </el-card>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import CardDetails from "./CardDetailsTransactions.vue";
import DebitCardsView from './DebitCardsView.vue';
export default {
  components: { DebitCardsView, CardDetails },
  data() {
    return {
      activeName: "dcCards",
      cardActionList: [
        {
          icon: "Freeze card.svg",
          label: "Freeze card"
        },
        {
          icon: "Set spend limit.svg",
          label: "Set spend limit"
        },
        {
          icon: "GPay.svg",
          label: "Add to GPay"
        },
        {
          icon: "Replace card.svg",
          label: "Replace card"
        },
        {
          icon: "Deactivate card.svg",
          label: "Cancel card"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";
@import "~/assets/scss/main";

.content-card {
  border-radius: 8px;
  border: none;
  padding: 40px 20px;
  @include for-phone {
    padding: 0;
  }
  .el-card__body {
    @include for-phone {
      padding: 0;
    }
  }
}
.custom-card {
  width: 100%;
  flex: 0 0 auto;
  margin-left: 20px;
  &:first-child {
    // background-color: #536DFF;
    margin-left: 0;
  }
}

::v-deep .el-tabs__item.is-active {
  font-weight: bold;
  font-size: 14px;
  color: $--color-text;
  @include for-phone {
    color: #FFF;
  }
}
::v-deep .el-tabs__item {
  font-size: 14px;
  color: $--color-text-light;
  @include for-phone {
    color: #FFF;
  }
}
::v-deep .el-tabs__nav-wrap::after {
  display: none;
}

::v-deep .el-carousel__indicator--horizontal {
  height: 8px;
  width: 8px;
  background-color: $--color-primary;
  border-radius: 8px;
  opacity: 0.2;
  margin-right: 6px;
  display: inline-block;
  padding: 0;
  transition: width 0.2s ease-in-out;
}

::v-deep .el-carousel__indicator--horizontal.is-active {
  opacity: 1;
  width: 16px;
  transition: width 0.2s ease-in-out;
}

::v-deep .el-carousel__button {
  display: none;
}
</style>
