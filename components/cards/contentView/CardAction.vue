<template>
  <div class="card-action">
    <div v-for="item in actions" :key="item.label">
      <div class="icon-wrapper">
        <img :src="require(`@/assets/svg/${item.icon}`)" />
      </div>
      <div class="name">{{ item.label }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    actions: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";
@import "~/assets/scss/main";

.card-action {
  margin-top: 32px;
  padding: 20px 27px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  background-color: $--color-secondary-light-2;
  
  @include for-phone {
    margin: 20px -24px 0;
  }

  .name {
    margin-top: 7px;
    color: $--color-secondary;
    font-size: 13px;
    line-height: 14px;
  }
}
</style>
