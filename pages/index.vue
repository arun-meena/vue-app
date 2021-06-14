<template>
  <div class="container">
    <Header />
    <Content />
  </div>
</template>

<script>
import Header from "~/components/cards/Header";
import Content from "~/components/cards/contentView/Content";

export default {
  components: {
    Header,
    Content
  }
};
</script>

<style lang="scss" scoped></style>
