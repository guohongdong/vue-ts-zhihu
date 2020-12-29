<template>
  <nav class="navbar  navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">知乎</a>
    <ul class="list-inline mb-0" v-if="user.isLogin">
      <li class="list-inline-item">
        <Dropdown :title="`你好 ${user.name}`">
          <DropdownItem
            ><a class="dropdown-item" href="#">编辑资料</a></DropdownItem
          >
          <DropdownItem disabled
            ><a class="dropdown-item" href="#">已购订单</a></DropdownItem
          >
          <DropdownItem
            ><a class="dropdown-item" href="#">退出登录</a></DropdownItem
          >
        </Dropdown>
      </li>
    </ul>
    <ul class="list-inline mb-0" v-else>
      <li class="list-inline-item">
        <router-link :to="`/login`">
          <button type="button" class="btn btn-outline-light">登录</button>
        </router-link>
      </li>
      <li class="list-inline-item">
        <router-link :to="`/sign`">
          <button type="button" class="btn btn-outline-light">注册</button>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
import { UserProps } from '../store/index'
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
