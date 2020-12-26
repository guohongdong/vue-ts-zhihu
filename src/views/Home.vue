<template>
  <div>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
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
    return {
      list
    }
  }
})
</script>

<style></style>
