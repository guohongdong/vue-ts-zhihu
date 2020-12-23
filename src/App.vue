<template>
  <div class="container">
    <Header :user="userInfo"></Header>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import Header, { UserProps } from './components/Header.vue'
import './assets/style/reset.css'
import './assets/style/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const tableList: ColumnProps[] = [
  {
    id: 1,
    avatar:
      'https://avatars1.githubusercontent.com/u/15245699?s=460&u=baeddb4c744ef9c2e183124fe8d821f95ac34307&v=4',
    description:
      '前段时间笔者收到可爱漂亮的小册姐姐的邀请，做了人生首次直播分享。分享主题是《玩转CSS的艺术之美》，跟笔者在9月底发布的掘金小册同名。',
    title: '8个硬核技巧带你迅速提升CSS技术 '
  },
  {
    id: 2,
    avatar:
      'https://avatars1.githubusercontent.com/u/15245699?s=460&u=baeddb4c744ef9c2e183124fe8d821f95ac34307&v=4',
    description:
      '学习 Web 开发的最佳实践让 MDN 将最新、最棒的内容直接投递到您的邮箱。目前仅提供英文版新闻报。',
    title: '学习 Web 开发'
  },
  {
    id: 3,
    avatar:
      'https://avatars1.githubusercontent.com/u/15245699?s=460&u=baeddb4c744ef9c2e183124fe8d821f95ac34307&v=4',
    description:
      '学习 Web 开发的最佳实践让 MDN 将最新、最棒的内容直接投递到您的邮箱。目前仅提供英文版新闻报。',
    title: '学习 Web 开发'
  },
  {
    id: 3,
    avatar:
      'https://avatars1.githubusercontent.com/u/15245699?s=460&u=baeddb4c744ef9c2e183124fe8d821f95ac34307&v=4',
    description:
      '学习 Web 开发的最佳实践让 MDN 将最新、最棒的内容直接投递到您的邮箱。目前仅提供英文版新闻报。',
    title: '学习 Web 开发'
  }
]

const userInfo: UserProps = {
  isLogin: false,
  nickName: 'hongdong'
}

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    Header
  },
  setup () {
    return {
      list: tableList,
      userInfo
    }
  }
})
</script>

<style></style>
