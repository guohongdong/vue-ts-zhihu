<template>
  <div class="container">
    <Header :user="user"></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { useStore } from 'vuex'
import { StoreDataProps } from './store/index'

import './assets/style/reset.css'
import './assets/style/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup () {
    const store = useStore<StoreDataProps>()
    const user = computed(() => store.state.user)
    return {
      user
    }
  }
})
</script>

<style></style>
