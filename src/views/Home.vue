<template>
  <div>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import ColumnList from '../components/ColumnList.vue'
import { useStore } from 'vuex'
import { StoreDataProps } from '../store/index'

export default defineComponent({
  components: {
    ColumnList
  },
  setup () {
    const store = useStore<StoreDataProps>()
    const list = computed(() => store.state.columns)
    onMounted(() => {
      store.dispatch('fetchColumns', {
        page: 1
      })
    })
    return {
      list
    }
  }
})
</script>

<style></style>
