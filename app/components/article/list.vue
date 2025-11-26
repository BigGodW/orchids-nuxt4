<template>
    <div>
        <div class="  ">
            <NuxtLink v-for="i in 6" :to="'/article/'+i">
                <ArticleItem class="m-1" ></ArticleItem>
            </NuxtLink>
        </div>
    </div>
</template>