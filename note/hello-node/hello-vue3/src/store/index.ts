import { createStore } from 'vuex'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: {
    // doubleCount(state:{count: number}) {
    //   return state.count * 2
    // }
  },
  mutations: {
    increment(state:{count: number}) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
//state: 状态，实际上就是应用中组件需要共享的数据,可以是对象、数组、字符串等。
//Vuex中采用单一状态树来存储状态数据，即只有一个store，所有的状态都存在这个store中。
//Vuex的核心就是state，通过state管理数据，
//getters可以对state进行计算，mutations可以修改state，actions可以触发mutations，modules可以将store分割成模块。

