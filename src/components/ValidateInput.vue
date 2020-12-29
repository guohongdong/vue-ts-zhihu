<template>
  <div class="validate-input-container pb-3">
    <textarea
    v-if="tag==='textarea'"
    class="form-control"
    :class="{
    'is-invalid': inputRef.error }"
    :="$attrs"
    v-model="inputRef.val"
    @blur="validateInput"
     />
     <input v-else
     class="form-control"
     :class="{ 'is-invalid': inputRef.error }"
     :="$attrs"
     v-model="inputRef.val"
     @blur="validateInput"
     />
    <span v-if="inputRef.error" class="invalid-feedback">
      {{ inputRef.message }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, computed, onMounted } from 'vue'
import { emitter } from './ValidateForm.vue'
const pattern = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
export interface RuleProps {
  type: 'requried' | 'email'|'confirm';
  message: string;
  validator?: () => boolean;
}
type InputType = 'input' | 'textarea';
export default defineComponent({
  name: 'ValidateInput',
  inheritAttrs: false,
  props: {
    rules: Array as PropType<RuleProps[]>,
    modelValue: String,
    tag: {
      type: String as PropType<InputType>,
      default: 'input'
    }
  },
  setup (props, context) {
    const inputRef = reactive({
      val: computed({
        get: () => props.modelValue || '',
        set: val => {
          context.emit('update:modelValue', val)
        }
      }),
      error: false,
      message: ''
    })
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every((rule: RuleProps) => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'requried':
              passed = inputRef.val.trim() !== ''
              break
            case 'email':
              passed = pattern.test(inputRef.val)
              break
            case 'confirm':
              passed = rule.validator ? rule.validator() : true
              break

            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
        return allPassed
      }
      return true
    }
    onMounted(() => {
      emitter.emit('form-create-item', validateInput)
    })
    return {
      inputRef,
      validateInput
    }
  }
})
</script>

<style></style>
