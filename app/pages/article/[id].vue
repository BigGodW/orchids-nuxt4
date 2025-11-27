<template>
    <div>
        <!-- <MainHeaderBack></MainHeaderBack> -->
        <div class=" bg-red-50 aspect-video">img</div>
        <div class=" bg-sky-100">
            <h1>文章页</h1>
            <p>{{ articleId }}</p>
            <div class="h-32"></div>
        </div>
        <div class="bg-yellow-100">
            <h1>相关兰花推荐</h1>
            <ArticleList></ArticleList>
        </div>
    </div>
</template>
<script setup>
const route = useRoute()
const articleId = route.params.id
definePageMeta({
  layout: 'content',
})
</script>