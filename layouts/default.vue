<template>
  <div>
    <el-container class="main-container">
      <el-aside class="aside hidden-sm-and-down">
        <div class="top-nav">
          <div class="logo-wrapper">
            <img class="logo" :src="logoUrl" />
          </div>
          <div>
            Trusted way of banking for 3,000+ SMEs and startups in Singapore
          </div>
        </div>
        <el-menu
          :default-active="$route.path"
          class="menu"
          text-color="#fff"
          active-text-color="#01D167"
          background-color="#0C365A"
          :router="true"
        >
          <el-menu-item
            v-for="(item, idx) in navList"
            :index="item.to"
            :key="idx"
            class="menu-item"
            :route="item.to"
          >
            <img v-if="idx < navList.length-1" :src="require(`@/assets/svg/${item.icon}`)" />
            <i v-else class="el-icon-money"></i>
            <span>{{ item.text }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-menu
        :default-active="$route.path"
        class="phone-nav hidden-md-and-up"
        mode="horizontal"
        text-color="#DDD"
        active-text-color="#01D167"
        background-color="#FFF"
        :router="true"
      >
        <el-menu-item
          v-for="(item, idx) in navListMobile"
          :index="item.to"
          :key="idx"
          class="menu-item"
          :route="item.to"
        >
          <img v-if="idx < navList.length-1" :src="require(`@/assets/svg/${item.icon}`)" />
          <i v-else class="el-icon-money"></i>
          <span>{{ item.text }}</span>
        </el-menu-item>
      </el-menu>

      <el-container class="content-wrapper">
        <el-main>
          <Nuxt />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          icon: "Home.svg",
          text: "Home",
          to: ""
        },
        {
          icon: "Card.svg",
          text: "Cards",
          to: "/"
        },
        {
          icon: "Payments.svg",
          text: "Payments",
          to: ""
        },
        {
          icon: "Credit.svg",
          text: "Credit",
          to: ""
        },
        {
          icon: "Account.svg",
          text: "Settings",
          to: ""
        },
        {
          icon: "Account.svg",
          text: "Loans",
          to: "/loans"
        }
      ],
      navListMobile: [
        {
          icon: "Logo-Mobile.svg",
          text: "Home",
          to: ""
        },
        {
          icon: "Card.svg",
          text: "Cards",
          to: "/"
        },
        {
          icon: "Payments-Mobile.svg",
          text: "Payments",
          to: ""
        },
        {
          icon: "Credit-Mobile.svg",
          text: "Credit",
          to: ""
        },
        {
          icon: "Account-Mobile.svg",
          text: "Settings",
          to: ""
        },
        {
          icon: "Account-Mobile.svg",
          text: "Loans",
          to: "/loans"
        }
      ],
      logoUrl: require("@/assets/svg/Logo.svg"),
      activeLink: null
    };
  },
  mounted() {
    this.activeLink = this.$route.path;
  },
  watch: {
    $route(newVal, oldVal) {
      this.activeLink = newVal.path;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main";
@import "~/assets/scss/variables";

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.aside {
  width: 340px !important;
  background-color: #0c365a;
}

.menu {
  border: none;
  .menu-item {
    font-size: 16px;
    line-height: 32px;
    padding: 30px 48px !important;
    display: flex;
    align-items: center;
    height: auto;
    img {
      margin-right: 16px;
    }
    i {
      font-size: 24px;
      font-weight: bold;
      margin-right: 16px;
    }
    &:not(.is-active) {
      i {
        color: #fff;
      }
    }
  }
}


.phone-nav {
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 9;
  bottom: 20px;
  .menu-item {
    display: flex;
    flex-direction: column;
    font-size: 9px;
    line-height: 13px;
    height: auto;
    text-align: center;
    justify-content: center;
    padding-bottom: 9px;
    padding-top: 9px;
    img {
      height: 23px;
      width: 23px;
    }
  }
}

.top-nav {
  font-size: 15px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.3);
  padding: 48px;
  .logo-wrapper {
    margin-bottom: 19px;
  }
}
.content-wrapper {
  height: 100vh;
  .el-main {
    padding: 60px;
    @include for-phone {
      padding: 24px;
      background-color: $--color-secondary;
    }
  }
}
</style>
