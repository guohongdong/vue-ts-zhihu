<template>
  <div class="dropdown" ref="dropdownRef">
    <button
      class="btn dropdown-toggle btn-outline-light"
      type="button"
      @click="handleDropdownToggle"
    >
      {{ title }}
    </button>
    <ul class="dropdown-menu" style="display:block" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, watch } from 'vue'
import useClickOutside from '../hooks/useClickOutside'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const isOpen = ref(false)
    const dropdownRef = ref<null | HTMLElement>(null)
    const handleDropdownToggle = () => {
      isOpen.value = !isOpen.value
    }
    const isClickOutside = useClickOutside(dropdownRef)
    watch(isClickOutside, () => {
      if (isClickOutside.value && isOpen.value) {
        isOpen.value = false
      }
    })
    return {
      isOpen,
      dropdownRef,
      handleDropdownToggle
    }
  }
})
</script>

<style></style>
