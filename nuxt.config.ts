import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  // Target can be static or server
  target: 'server', // 默认是 'server'，如果是生成静态站点则改为 'static'

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-nuxt-ts-app',
    htmlAttrs: {
      lang: 'zh-CN'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js 2 + TypeScript 项目' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  serverMiddleware: [
    {path:'/api',handler:'~/server/index.js'}
  ],

  // Global CSS
  css: [],

  // Plugins to run before rendering pages
  plugins: [
  ],

  // Auto import components (requires @nuxt/components package)
  components: true,

  // Build modules (e.g. for TypeScript support)
  buildModules: [

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // 例如引入 axios 模块
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // proxy: true
  },

  // Build configuration: https://go.nuxtjs.dev/config-build
  build: {
    // You can extend webpack config here
    extend() {
      // Customize Webpack config if needed
    }
  }
}

export default config