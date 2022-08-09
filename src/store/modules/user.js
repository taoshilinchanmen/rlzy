import { login } from '@/api/user.js'
import { getToken,setToken,removeToken } from '@/utils/auth.js';
export default {
  state: {
    token:getToken(),
  },
  mutations: {
    setToken (state, token) {
      state.token = token;
      setToken(token)
    },
    removeToken(state) {
      state.token = undefined
      removeToken()// 数据持久化
    }
  },
  actions: {
    async login (context,data) {
     /*  try {
        let { data: { success, message, data } } = await login(data)
        if (success) {
          context.commit('setToken',token)
        } else{
          this.$message.erroe(message)
        }
      } catch (error) {
        this.$message.erroe('服务器报错请稍后重试')
      } */
      const token = await login(data)
      // context.commit相当于$store.comit 直接调用模块中同步方法setToken
      context.commit('setToken', token)
     }
  }
}
