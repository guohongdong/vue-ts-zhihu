<template>
  <div class="create-post-page">
    <h4>添加文章</h4>
    <Uploader
      actions="/upload"
      :beforeUpload="beforeUpload"
      @file-upload="handleUploaded"
      class="d-flex align-items-center justify-content-center bg-light text-secondary w-100 my-4"
    >
      <h2>点击上传头图</h2>
      <template #loading>
        <div class="d-flex">
          <div class="spinner-border text-secondary" role="status"></div>
          <h2>正在上传</h2>
        </div>
      </template>
      <template #uploaded="dataProps">
        <div class="uploaded-area">
          <img :src="dataProps.uploadedData.data.url" />
          <h3>点击重新上传</h3>
        </div>
      </template>
    </Uploader>
    <ValidateForm
    @form-submit="handelSubmit"
    >
      <div class="mb-3">
        <label class="form-label">文章标题：</label>
        <ValidateInput
          :rules="titleRules"
          v-model="titleVal"
          placeholder="请输入文章标题"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">文章详情：</label>
        <ValidateInput
          rows="10"
          tag="textarea"
          placeholder="请输入文章详情"
          :rules="contentRules"
          v-model="contentVal"
        />
      </div>
      <template #submit>
        <button class="btn btn-primary btn-large">
          发表文章
        </button>
      </template>
    </ValidateForm>
  </div>
</template>

<script lang="ts">
import createMessage from '@/components/createMessage'
import { defineComponent, ref } from 'vue'
import Uploader from '../components/Uploader.vue'
import ValidateForm from '../components/ValidateForm.vue'
import ValidateInput, { RuleProps } from '../components/ValidateInput.vue'
import { beforeUploadCheck } from '../utils/helper'
interface ResponseType<P = {}> {
  code: number;
  message: string;
  data: P;
}
interface ImageProps {
  _id?: string;
  url?: string;
  createdAt?: string;
  fitUrl?: string;
}
export default defineComponent({
  components: {
    Uploader,
    ValidateForm,
    ValidateInput
  },
  setup () {
    let imageId = ''
    const uploadedData = ref('')
    const titleVal = ref('')
    const titleRules: RuleProps[] = [{
      type: 'requried',
      message: '请输入文章标题'
    }]
    const contentVal = ref('')
    const contentRules: RuleProps[] = [{
      type: 'requried',
      message: '请输入文章详情'
    }]
    const beforeUpload = (file: File) => {
      const result = beforeUploadCheck(file, { format: ['image/jpeg', 'image/png'], size: 1 })
      const { passed, error } = result
      if (error === 'format') {
        createMessage('上传图片只支持JPG、PNG格式', 'error')
      }
      if (error === 'size') {
        createMessage('上传图片大小不能超过 1 Mb', 'error')
      }
      return passed
    }
    const handleUploaded = (res: ResponseType<ImageProps>) => {
      if (res.data._id) {
        imageId = res.data._id
      }
    }
    const handelSubmit = () => {
      console.log(titleVal.value, contentVal.value)
    }
    return {
      titleVal,
      titleRules,
      contentVal,
      contentRules,
      beforeUpload,
      handleUploaded,
      uploadedData,
      handelSubmit
    }
  }
})
</script>

<style>
.create-post-page .file-upload-container {
  height: 200px;
  cursor: pointer;
  overflow: hidden;
}
.create-post-page .file-upload-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.uploaded-area {
  position: relative;
}
.uploaded-area:hover h3 {
  display: block;
}
.uploaded-area h3 {
  display: none;
  position: absolute;
  color: #999;
  text-align: center;
  width: 100%;
  top: 50%;
}
</style>
