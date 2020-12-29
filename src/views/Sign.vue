<template>
  <div class="mx-auto p-3 w-500">
    <h2>注册</h2>
    <ValidateForm
    class="mb-4"
    @form-submit="handleFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <ValidateInput
          :rules="emailRules"
          v-model="formData.email"
          placeholder="请输入邮箱地址"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">昵称</label>
        <ValidateInput
          :rules="nameRules"
          v-model="formData.name"
          placeholder="请输入昵称"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <ValidateInput
          :rules="passwordRules"
          v-model="formData.password"
          placeholder="请输入密码"
          type="password"
          autocomplete
        />
      </div>
      <div class="mb-3">
        <label class="form-label">确认密码</label>
        <ValidateInput
          :rules="confirmPasswordRules"
          v-model="formData.confirmPassword"
          placeholder="请再次输入密码"
          type="password"
          autocomplete
        />
      </div>
      <template #submit>
        <button type="submit" class="btn btn-primary btn-block btn-large">
          注册新用户
        </button>
      </template>
    </ValidateForm>
    <router-link to="login">
      <button type="button" class="btn btn-link">有账户，去登录</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import ValidateForm from '../components/ValidateForm.vue'
import ValidateInput, { RuleProps } from '../components/ValidateInput.vue'
import { SignParams, createUser } from '../api/login'
import createMessage from '@/components/createMessage'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {
    ValidateForm,
    ValidateInput
  },
  setup () {
    const router = useRouter()
    const formData = reactive<SignParams>({
      email: '',
      name: '',
      password: '',
      confirmPassword: ''
    })
    const emailRules: RuleProps[] = [
      {
        type: 'requried',
        message: '请输入邮箱'
      },
      {
        type: 'email',
        message: '请检查邮箱格式'
      }
    ]
    const nameRules: RuleProps[] = [
      {
        type: 'requried',
        message: '请输入昵称'
      }
    ]
    const passwordRules: RuleProps[] = [
      {
        type: 'requried',
        message: '请输入密码'
      }
    ]
    const confirmPasswordRules: RuleProps[] = [
      {
        type: 'requried',
        message: '请再次输入密码'
      },
      {
        type: 'confirm',
        validator: () => {
          return formData.password === formData.confirmPassword
        },
        message: '两次密码不相同'
      }
    ]
    const handleFormSubmit = (result: boolean) => {
      if (result) {
        const params: SignParams = {
          email: formData.email,
          password: formData.password,
          name: formData.name
        }
        createUser(params)
          .then(() => {
            createMessage('注册成功，正在跳转登录页面', 'success', 3000)
            setTimeout(() => {
              router.push('/login')
            }, 3000)
          })
          .catch(e => {
            console.log(e)
          })
      }
    }
    return {
      formData,
      emailRules,
      nameRules,
      passwordRules,
      confirmPasswordRules,
      handleFormSubmit
    }
  }
})
</script>

<style>
.w-500 {
  max-width: 500px;
}
</style>
