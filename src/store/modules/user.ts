import { defineStore } from 'pinia'
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'
import { reqLogin } from '@/api/user'
import { loginFormData, loginResponseData } from '@/api/user/type.ts'
import { UserState } from '@/store/types/type.ts'
import { constantRoute } from '@/router/routes.ts'

let useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute,
    }
  },

  actions: {
    async userLogin(data: loginFormData) {
      let result: loginResponseData = await reqLogin(data)

      console.log(result)
      //登录请求:成功200->token
      //登录请求:失败201->登录失败错误的信息
      if (result.code == 200) {
        //pinia仓库存储一下token
        //由于pinia|vuex存储数据其实利用js对象
        this.token = result.data as string

        console.log('userLogin-token:' + this.token)

        //本地存储持久化存储一份
        SET_TOKEN(this.token)

        return 'OK'
      } else {
        console.log(result.message)
        return Promise.reject(new Error(result.message))
      }
    },
  },

  getters: {},
})

export default useUserStore
