<template>
    <div>
        <h1 class=" text-center">新闻列表</h1>
        <div v-for="i in 6" :key="i" >
            <nuxt-link :to="'/article/'+i" class="mb-1 md:mb-4 md:p-4 md:border-b flex justify-between md:block">
                <h1><span class=" mr-2 font-bold">Top{{ i }}  </span>文章标题 </h1>
                <span class=" text-sm">2025年11月23日</span>
            </nuxt-link>
        </div>
    </div>
</template>