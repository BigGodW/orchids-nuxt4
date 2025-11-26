// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["./app/tailwind.css"],
  modules: ['@nuxtjs/supabase', '@vant/nuxt'],
  supabase: {
    url: process.env.SUPABASE_URL || '',
    key: process.env.SUPABASE_KEY || '',
    redirect:false
  },
  vite:{
    plugins: [tailwindcss()]
  },
  //ssr: true, // 是否开启服务端渲染,默认 true 开启
  // routeRules: {
    
  // },
})