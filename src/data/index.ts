export interface ColumnProps {
  id: number;
  avatar: string;
  title: string;
  description: string;
}

export const columns: ColumnProps[] = [
  {
    id: 1,
    avatar:
      'https://img1.sycdn.imooc.com/szimg/5fc06907096beb4305400304.jpg',
    description:
      '慕课网首发，Vue3.0 +TS ，使用新版Vuex 和 Vue-Router 全家桶让你学会一个基本的组件库的开发思路和技巧。接入真实后端API，提供抓住前后端分离开发痛点 - 权限管理，路由控制，全局Store 结构设计，前端缓存实现等。',
    title: 'TS 仿知乎专栏企业级项目'
  },
  {
    id: 2,
    avatar:
      'https://img1.sycdn.imooc.com/szimg/5fd1925a09eb9b7205400304.jpg',
    description:
      'Vue3.0+TS打造企业级组件库,从0开始构建一个高质量的开源表单生成器，实现团队开发效率的倍增。结合Vue3.0的源码，带你真正理解Vue3的开发与应用，实现前端技术水平的快速进阶，快速掌握Vue3.0在企业中实际应用的同学。',
    title: 'Vue3.0+TS打造企业级组件库'
  },
  {
    id: 3,
    avatar:
      'https://img1.sycdn.imooc.com/szimg/5fc06907096beb4305400304.jpg',
    description:
      '课程从 Vue3 基础语法，到组件原理、动画、代码设计，再到新语法扩展，全面系统地梳理 Vue 知识点。学习过程中，老师将倾囊相授多年的“避坑经验” ，带你以企业级代码质量和工程开发流程完成“京东到家”应用，实现对框架的彻底掌握。',
    title: 'Vue3 系统入门与项目实战'
  },
  {
    id: 3,
    avatar:
      'https://img1.sycdn.imooc.com/szimg/5fce0eca09e109c405400304.jpg',
    description:
      '课程以Vue全家桶作为主要的技术体系，模拟小米商城，从0开始开发网页和交互功能。你学习丰富的技术栈和各类组件知识，还能了解Git、动画、开发调试等方面的知识。同时项目本身具有很强的实用性，稍作修改，便能“为我所用”。',
    title: 'Vue全家桶实战'
  }
]
