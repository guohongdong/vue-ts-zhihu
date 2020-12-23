<template>
  <div class="validate-input-container pb-3">
    <input
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      v-model="inputRef.val"
      @blur="validateInput"
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
  props: {
    rules: Array as PropType<RuleProp[]>
  },
  setup (props) {
    const inputRef = reactive({
      val: '',
      error: false,
      message: ''
    })
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
      validateInput
    }
  }
})
</script>

<style></style>
