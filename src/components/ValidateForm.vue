<template>
  <form>
    <slot name="default"></slot>
    <div class="mb-3" @click="handleFormSubmit">
      <slot name="submit">
        <button type="button" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  emits: ['form-submit'],
  setup (props, context) {
    const handleFormSubmit = () => {
      context.emit('form-submit', true)
    }
    return { handleFormSubmit }
  }
})
</script>
