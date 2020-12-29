<template>
  <div class="container create-post-page">
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
interface ResponseType<P = {}> {
  code: number;
  message: string;
  data: P;
}
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

<style>
.create-post-page .file-upload-container {
  height: 200px;
  cursor: pointer;
  overflow: hidden;
}
.create-post-page .file-upload-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.uploaded-area {
  position: relative;
}
.uploaded-area:hover h3 {
  display: block;
}
.uploaded-area h3 {
  display: none;
  position: absolute;
  color: #999;
  text-align: center;
  width: 100%;
  top: 50%;
}
</style>
