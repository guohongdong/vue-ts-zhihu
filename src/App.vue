<template>
  <div class="container">
    <Header :user="userInfo"></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header, { UserProps } from './components/Header.vue'
import Footer from './components/Footer.vue'

import './assets/style/reset.css'
import './assets/style/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const userInfo: UserProps = {
  isLogin: false,
  nickName: 'hongdong'
}

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup () {
    const handleFormSubmit = (e: boolean) => {
      console.log(e)
    }
    return {
      userInfo,
      handleFormSubmit
    }
  }
})
</script>

<style></style>
