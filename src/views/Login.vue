<template>
  <div>
    <ValidateForm @form-submit="handleFormSubmit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <ValidateInput
          placeholder="请输入邮箱"
          type="text"
          :rules="emailRules"
          v-model="emailVal"
        ></ValidateInput>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <ValidateInput
          placeholder="请输入密码"
          type="password"
          :rules="passwordRules"
          v-model="passwordVal"
        ></ValidateInput>
      </div>
    </ValidateForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateForm from '../components/ValidateForm.vue'
import ValidateInput, { RuleProps } from '../components/ValidateInput.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    ValidateForm,
    ValidateInput
  },
  setup () {
    const router = useRouter()
    const emailVal = ref('')
    const emailRules: RuleProps[] = [
      {
        type: 'requried',
        message: '请输入邮箱'
      },
      {
        type: 'email',
        message: '邮箱地址错误'
      }
    ]
    const passwordVal = ref('')
    const passwordRules: RuleProps[] = [
      {
        type: 'requried',
        message: '请输入密码'
      }
    ]
    const store = useStore()
    const handleFormSubmit = (flag: boolean) => {
      console.log(flag)
      if (flag) {
        store.dispatch('loginAndFetch')
        router.push('/')
      }
    }
    return {
      emailRules,
      emailVal,
      passwordVal,
      passwordRules,
      handleFormSubmit
    }
  }
})
</script>

<style></style>
