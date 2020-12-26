import { columns, ColumnProps } from './../data/index'
import { createStore } from 'vuex'
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}

export interface StoreDataProps {
  columns: ColumnProps[];
  user: UserProps;
}

const store = createStore<StoreDataProps>({
  state: {
    columns: columns,
    user: {
      isLogin: false
    }
  },
  mutations: {
    login (state) {
      state.user = { ...state.user, isLogin: true, name: 'hongdong' }
    }
  }
})

export default store
