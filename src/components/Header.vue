<template>
  <nav class="navbar  navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">知乎</a>
    <ul class="list-inline mb-0" v-if="user.isLogin">
      <li class="list-inline-item">
        <Dropdown :title="`你好 ${user.nickName}`">
          <DropdownItem><a class="dropdown-item" href="#">编辑资料</a></DropdownItem>
          <DropdownItem disabled><a class="dropdown-item" href="#">已购订单</a></DropdownItem>
          <DropdownItem><a class="dropdown-item" href="#">退出登录</a></DropdownItem>
        </Dropdown>
      </li>
    </ul>
    <ul class="list-inline mb-0" v-else>
      <li class="list-inline-item">
        <button type="button" class="btn btn-outline-light">登录</button>
      </li>
      <li class="list-inline-item">
        <button type="button" class="btn btn-outline-light">注册</button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
export interface UserProps {
  isLogin: boolean;
  nickName: string;
  id?: string;
}
export default defineComponent({
  name: 'Header',
  components: {
    Dropdown,
    DropdownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      require: true
    }
  }
})
</script>
