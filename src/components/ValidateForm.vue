<template>
  <form>
    <slot name="default"></slot>
    <div class="mb-3" @click.prevent="handleFormSubmit">
      <slot name="submit">
        <button type="button" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
export const emitter = mitt()
type ValidateFunc = () => boolean
export default defineComponent({
  emits: ['form-submit'],
  setup (props, context) {
    let funArr: ValidateFunc[] = []
    const handleFormSubmit = () => {
      const result = funArr.map(func => func()).every(res => res)
      context.emit('form-submit', result)
    }
    const callback = (func?: ValidateFunc) => {
      if (func) {
        funArr.push(func)
      }
    }
    emitter.on('form-create-item', callback)
    onUnmounted(() => {
      emitter.off('form-create-item', callback)
      funArr = []
    })
    return { handleFormSubmit }
  }

})
</script>
