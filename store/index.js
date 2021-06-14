import Vuex from "vuex";

const mockData = [
  {
    id: 1,
    loanDate: "2016-05-03",
    applicantName: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    amount: "1000",
    tenure: "12",
    interest: "6",
    approved: true
  },
  {
    id: 2,
    loanDate: "2016-05-03",
    applicantName: "Nik",
    address: "No. 189, Grove St, Los Angeles",
    amount: "1000",
    tenure: "24",
    interest: "10",
    approved: true
  },
  {
    id: 3,
    loanDate: "2016-05-03",
    applicantName: "Nik",
    address: "No. 189, Grove St, Los Angeles",
    amount: "1000",
    tenure: "15",
    interest: "8",
    approved: true
  },
  {
    id: 4,
    loanDate: "2016-05-03",
    applicantName: "Sam",
    address: "No. 189, Grove St, Los Angeles",
    amount: "1000",
    tenure: "12",
    interest: "6",
    approved: false
  },
  {
    id: 5,
    loanDate: "2016-05-03",
    applicantName: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    amount: "1000",
    tenure: "12",
    interest: "6",
    approved: true
  }
];

const createStore = () => {
  return new Vuex.Store({
    state: {
      loanData: null,
      currentLoan: null
    },
    mutations: {
      setLoanData(state, data) {
        state.loanData = data;
      },
      setCurrentLoan(state, data) {
        state.currentLoan = data;
      }
    },
    actions: {
      getLoanData(vuexContext) {
        /* return this.$axios
          .$get("http://localhost:3000/loan")
          .then(res => {
            return res;
          })
          .then(data => {
            vuexContext.commit("setLoanData", data);
            return data;
          }); */
        vuexContext.commit("setLoanData", mockData);
        return mockData;
      },
      getCurrentLoan(vuexContext, id) {
        /* return this.$axios
          .$get("http://localhost:3000/loan/" + id)
          .then(res => {
            return res;
          })
          .then(data => {
            vuexContext.commit("setCurrentLoan", data);
            return data;
          }); */
        let obj;
        for (let i = 0; i < mockData.length; i++) {
          if (mockData[i].id == id) {
            obj = mockData[i];
            break;
          }
        }
        vuexContext.commit("setCurrentLoan", obj);
        return obj;
      }
    },
    getters: {
      loanData(state) {
        return state.loanData;
      },
      currentLoan(state) {
        return state.currentLoan;
      }
    },
    modules: {}
  });
};

export default createStore;
