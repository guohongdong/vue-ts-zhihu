<template>
  <div class="validate-input-container pb-3">
    <input
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
      :="$attrs"
    />
    <span v-if="inputRef.error" class="invalid-feedback">
      {{ inputRef.message }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
const pattern = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
export interface RuleProp {
  type: 'requried' | 'email';
  message: string;
  validator?: () => boolean;
}
export default defineComponent({
  name: 'ValidateInput',
  inheritAttrs: false,
  props: {
    rules: Array as PropType<RuleProp[]>,
    modelValue: String
  },
  setup (props, context) {
    console.log(context)
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })
    const updateValue = (e: KeyboardEvent) => {
      console.log((e.target as HTMLInputElement).value)
      const value = (e.target as HTMLInputElement).value
      inputRef.val = value
      context.emit('update:modelValue', value)
    }
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every((rule: RuleProp) => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'requried':
              passed = inputRef.val.trim() !== ''
              break
            case 'email':
              passed = pattern.test(inputRef.val)
              break

            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
      }
    }
    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>

<style></style>
