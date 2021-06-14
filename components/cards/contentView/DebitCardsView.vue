<template>
  <div>
    <el-carousel
      trigger="click"
      indicator-position="outside"
      :autoplay="false"
      arrow="never"
    >
      <el-carousel-item v-for="item in 3" :key="item">
        <aspire-card
          class="custom-card"
          cust-name="Mark Henry"
          card-no="1234-5678-9087-6543"
          valid-date="12/28"
          brand-file-name="Visa Logo.svg"
        />
      </el-carousel-item>
    </el-carousel>
    <card-action :actions="cardActionList" />
  </div>
</template>

<script>
import AspireCard from "../../common/AspireCard.vue";
import CardAction from "./CardAction.vue";
export default {
  components: { AspireCard, CardAction },
  data() {
    return {
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
