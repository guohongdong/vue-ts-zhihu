<template>
  <ul class="row">
    <li v-for="item in list" :key="item" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="item.avatar" class="card-img-top mb-4" :alt="item.title" />
          <h5 class="card-title text-truncate">{{ item.title }}</h5>
          <p class="card-text mb-4">{{ item.description }}</p>
          <router-link
            :to="`/column/${item.id}`"
            class="btn btn-outline-primary"
            >进入专栏</router-link
          >
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface ColumnProps {
  id: number;
  avatar: string;
  title: string;
  description: string;
}
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      require: true,
      default: () => []
    }
  }
})
</script>
