import { ColumnProps } from './../data/index'
import { createStore, createLogger } from 'vuex'

import { login as loginFun, getUserInfo } from '../api/login'
import { getColumnsList } from '../api/columns'
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}

export interface StoreDataProps {
  columns: ColumnProps[];
  user: UserProps;
  token: string;
}

const store = createStore<StoreDataProps>({
  plugins: [createLogger()],
  state: {
    columns: [],
    user: {
      isLogin: false
    },
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    login (state, payload) {
      const { token } = payload
      state.token = token
      localStorage.setItem('token', token)
    },
    fetchCurrentUser (state, payload) {
      state.user = { ...state.user, isLogin: true, ...payload }
    },
    fetchColumns (state, payload) {
      state.columns = payload.list
    }
  },
  actions: {
    async getUserInfoACT ({ commit }) {
      const { data } = await getUserInfo()
      commit('fetchCurrentUser', data.data)
    },
    async login ({ commit }, payload) {
      const { data } = await loginFun(payload)
      commit('login', data.data)
    },
    async fetchColumns ({ commit }, payload) {
      const { data } = await getColumnsList(payload)
      commit('fetchColumns', data.data)
    },
    loginAndFetch ({ dispatch }, payload) {
      return dispatch('login', payload).then(() => {
        dispatch('getUserInfoACT')
      })
    }
  }
})

export default store
