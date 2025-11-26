<template>
  <main-web-seo></main-web-seo>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
<script setup>
useHead({
  title: '兰花博览园 - 兰花',
  meta: [
    { name: 'description', content: '让兰花走进千家万户' },
    { name: 'keywords', content: '兰花, 国兰,养兰, 中国兰花, 春兰, 春剑, 蕙兰,建兰, 夏兰,建兰,' },
    { name: 'robots', content: 'index, follow' },
  ],
  link: [
    { rel: 'canonical', href: 'https://example.com/article/1' },
  ],
  // Open Graph
  meta: [
    { property: 'og:title', content: '兰花博览园' },
    { property: 'og:description', content: '让兰花走进千家万户' },
    { property: 'og:image', content: 'https://example.com/og-image.png' },
    { property: 'og:url', content: 'https://example.com/article/1' },
    { property: 'og:type', content: 'article' },
    { property: 'og:site_name', content: '兰花博览园' },
    { property: 'og:locale', content: 'zh_CN' },
  ],
  // Twitter
  meta: [
    { name: 'twitter:card', content: '兰花博览园' },
    { name: 'twitter:title', content: '兰花博览园' },
    { name: 'twitter:description', content: '兰花博览园' },
    { name: 'twitter:image', content: 'https://example.com/og-image.png' },
  ],
})
</script>
