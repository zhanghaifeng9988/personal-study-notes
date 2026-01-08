import { createStore } from 'vuex'

/* export default createStore<UserInfo>({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
}) */

interface  UserInfo {
  account:string;
  nickname: string;
  id:number
}

const store = createStore<UserInfo>({//函数用于创建一个 store 实例
  //进行状态数据初始化
  state() {
    return {
      account: '',
      nickname: '',
      id: NaN //表示 “Not a Number”
    }
  },
  getters: {
    //提供1个getters方法，用于获取state中的数据，用于获取登录状态
    isLogin: (state) => {
      return !isNaN(state.id)//判断 state.id 是否是一个有效的数字，并返回一个布尔值。
    }
  },
  //提供1个方mutations法，用于修改state中的数据和清空用户信息的方法
  mutations: {
    clearUserInfo(state) {
      state.account = ''
      state.nickname = ''
      state.id = NaN //表示 “Not a Number”
    },
    registerInfo(state,userinfo:UserInfo){
      state.account = userinfo.account
      state.nickname = userinfo.nickname
      state.id = userinfo.id
    }
  },
})

export default store
export type { UserInfo }
//这里我们定义1个用户信息接口，当用户登录成功后，用户数据会全局进行保存，
//只要本地有存储用户的id数据，就认为当前用户已经处于登录状态。