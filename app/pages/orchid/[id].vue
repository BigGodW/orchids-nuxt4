<template>
    <div>
        <OrchidCarousel></OrchidCarousel>
        <div class=" bg-sky-100">
            <h1>兰花信息</h1>
            <p>{{ articleId }}</p>
            <div class="h-32"></div>
        </div>
        <div class="bg-yellow-100">
            <h1>相关兰花推荐</h1>
            <GoodsList></GoodsList>
        </div>
    </div>
</template>
<script setup>
const route = useRoute()
const articleId = route.params.id
definePageMeta({
  watchQuery: ['articleId'], // 当路由中的 ?id= 发生变化时，会重新触发页面数据加载
  layout: 'content',
})

</script>