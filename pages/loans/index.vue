<template>
  <div>
    <h3>Loans</h3>
    <el-card class="loan-card" v-loading="!loanData">
        <!-- here {{ loanData }} -->
      <el-table
        :data="loanData"
        style="width: 100%"
        @row-click="redirect"
      >
        <el-table-column prop="loanDate" label="Date" width="100">
        </el-table-column>
        <el-table-column prop="applicantName" label="Customer Name" width="150">
        </el-table-column>
        <el-table-column prop="address" label="Address"> </el-table-column>
        <el-table-column prop="amount" label="Amount (S$)"> </el-table-column>
        <el-table-column prop="tenure" label="Loan Term">
          <template slot-scope="scope">
            {{ scope.row.tenure }} Months
          </template>
        </el-table-column>
        <el-table-column prop="interest" label="Interest Rate (%)">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
    };
  },
  async fetch({ store, params, error }) {
    await store
      .dispatch("getLoanData")
      .then((res) => {
          console.log('res', res)
      })
      .catch(e => {
        error(e.response.data.error);
      });
  },
  computed: {
    ...mapGetters(["loanData"])
  },
  methods: {
    redirect(row, column, event) {
      this.$router.push(`/loans/${row.id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "~/assets/scss/main";

.loan-card {
  border-radius: 8px;
}
</style>
