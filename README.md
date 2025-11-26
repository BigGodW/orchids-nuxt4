# 项目说明

## 使用框架
- nuxt4
- tailwind daisyui vant
- supabase

## 使用supabase 
在nuxt.config.ts中配置supabase
```
supabase:{
    url:process.env.SUPABASE_URL || '',
    key:process.env.SUPABASE_KEY || '',
}
```
配置.env 文件