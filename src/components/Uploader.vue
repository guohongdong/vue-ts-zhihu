<template>
  <div>
    <div @click.prevent="toggleUpload" v-bind="$attrs">
      <slot v-if="fileStatus === 'loading'" name="loading">
        <span>上传中......</span>
      </slot>
      <slot
        v-else-if="fileStatus === 'success'"
        name="uploaded"
        :uploadedData="uploadedData"
      >
        <button class="btn btn-primary">上传成功</button>
      </slot>
      <slot v-else name="default">
        <button class="btn btn-primary">点击上传</button>
      </slot>
    </div>
    <input
      type="file"
      class="file-input d-none"
      ref="fileInput"
      @change="handleFileChange"
    />
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent, ref, PropType } from 'vue'
type UploadStatus = 'ready' | 'loading' | 'success' | 'error';
type CheckFunction = (file: File) => boolean;
export default defineComponent({
  props: {
    actions: {
      type: String,
      require: true,
      default: ''
    },
    beforeUpload: {
      type: Function as PropType<CheckFunction>
    },
    uploaded: {
      type: Object
    }
  },
  inheritAttrs: false,
  emits: ['file-upload', 'file-upload-error'],
  setup (props, context) {
    const fileInput = ref<HTMLInputElement | null>(null)
    const fileStatus = ref<UploadStatus>('ready')
    const uploadedData = ref(props.uploaded)
    const toggleUpload = () => {
      if (fileInput.value) {
        fileInput.value.click()
      }
    }
    const handleFileChange = (e: Event) => {
      const currentTarget = e.target as HTMLInputElement
      if (currentTarget.files) {
        const files = Array.from(currentTarget.files)
        if (props.beforeUpload) {
          const flag = props.beforeUpload(files[0])
          if (!flag) return
        }
        const formData = new FormData()
        formData.append('file', files[0])
        fileStatus.value = 'loading'

        axios
          .post(props.actions, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(res => {
            fileStatus.value = 'success'
            console.log(res)
            uploadedData.value = res.data
            context.emit('file-upload', res.data)
          })
          .catch(err => {
            fileStatus.value = 'error'
            context.emit('file-upload-error', err)
          })
          .finally(() => {
            if (fileInput.value) {
              fileInput.value.value = ''
            }
          })
      }
    }
    return {
      fileInput,
      toggleUpload,
      handleFileChange,
      fileStatus,
      uploadedData
    }
  }
})
</script>

<style></style>
