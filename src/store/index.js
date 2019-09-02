import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const testData = []

for (let i = 1; i <= 10; i++) {
  testData.push({
    id: i, name: `Product #${i}`, category: `Category ${i % 3}`, description: `This is Product #${i}`, price: i * 50
  })
}

export default new Vuex.Store({
  state: {
    products: testData,
    pruductsCount: testData.length,
    currentPage: 1,
    pageSize: 4
  },
  getters: {
    processProducts: state => {
      let index = (state.currentPage - 1) * state.pageSize
      return state.products.slice(index, state.pageSize + index)
    },
    pageCount: state => {
      return Math.ceil( state.pruductsCount / state.pageSize)
    }
  },
  mutations: {
    setCurrentPage (state, number) {
      state.currentPage = number
    },
    setPageSize (state, size) {
      state.pageSize = size
      state.currentPage = 1
    }
  }
})
