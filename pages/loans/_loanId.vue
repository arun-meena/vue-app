<template>
  <div v-if="currentLoan">
    <div class="header">
      <h3>Loan ID: {{ currentLoan.id }}</h3>
      <el-button :disabled="!currentLoan.approved" type="success" size="small" @click="openConfirmBox">
        Repay
      </el-button>
    </div>
    <el-card class="loan-card">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-row :gutter="16">
            <el-col :span="10" class="label">
              Customer Name
            </el-col>
            <el-col :span="14" class="value">
              {{ currentLoan.applicantName }}
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <el-row :gutter="16">
            <el-col :span="10" class="label">
              Loan Amount
            </el-col>
            <el-col :span="14" class="value">
              S$ {{ currentLoan.amount }}
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <el-row :gutter="16">
            <el-col :span="10" class="label">
              Loan Term
            </el-col>
            <el-col :span="14" class="value">
              {{ currentLoan.tenure }} Months
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <el-row :gutter="16">
            <el-col :span="10" class="label">
              Intreset Rate
            </el-col>
            <el-col :span="14" class="value">
              {{ currentLoan.interest }} %
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <el-row :gutter="16">
            <el-col :span="10" class="label">
              Customer Address
            </el-col>
            <el-col :span="14" class="value">
              {{ currentLoan.address }}
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  async fetch({ store, params, error }) {
    await store
      .dispatch("getCurrentLoan", params.loanId)
      .then((res) => {
          console.log('res', res)
      })
      .catch(e => {
        error(e.response.data.error);
      });
  },
  computed: {
    ...mapGetters(["currentLoan"])
  },
  methods: {
      openConfirmBox() {
        this.$confirm(`Are you sure you want to pay the ${this.currentLoan.amount}?`, 'Repayments', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'success'
        }).then(() => {
          this.$message({
            type: 'success',
            message: 'Payment completed'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Payment canceled'
          });          
        });
      }
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h3 {
    margin: 0;
  }
  .el-button {
    background-color: $--color-primary;
    border: 1px solid transparent;
    &:hover {
      background-color: transparent;
      color: $--color-primary;
      border-color: $--color-primary;
    }
    &.is-disabled {
      opacity: 0.7;
    }
  }
}

.label {
  font-weight: 600;
  color: $--color-text;
  margin-bottom: 20px;
}
.value {
  color: $--color-text-light;
}
</style>
