import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WEBPIC文档",
  description: "WEBPIC DOCS",
  locales: {
    root: {
      label: '简体中文',
      lang: 'Zh_CN',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
    },
    hk: {
      label: '繁體中文',
      lang: 'Zh_HK',
      link: '/hk/',
    },
    an: {
      label: '华夏语',
      lang: 'Zh_AN',
      link: '/an/',
    }
  },

  
})
