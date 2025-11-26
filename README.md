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

图片资源使用七牛云存储:
获取token：https://ver-express.wubug.asia/qiniu/token
{"uploadToken":"908t8PZpjYpytyK1nG0-kAIoLDn64Vh8tEV-u6ZD:vyK4X9QMf6dqerIEhBAsXLgjRM4=:eyJzY29wZSI6Ind1YnVnIiwicmV0dXJuQm9keSI6IntcImtleVwiOlwiJChrZXkpXCIsXCJoYXNoXCI6XCIkKGV0YWcpXCIsXCJmc2l6ZVwiOiQoZnNpemUpLFwiYnVja2V0XCI6XCIkKGJ1Y2tldClcIixcIm5hbWVcIjpcIiQoeDpuYW1lKVwifSIsImRlYWRsaW5lIjoxNzY0MTM1NjU5fQ=="}