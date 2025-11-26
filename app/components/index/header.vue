<template>
    <div class=" bg-amber-100 h-12 flex justify-between items-center px-2">
        <h1>顶部导航</h1>
        <ul class="flex *:ml-2">
            <li>
                <nuxt-link to="/">首页</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/orchids">兰花</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/articles">新闻</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/about">我们</nuxt-link>
            </li>
        </ul>
    </div>
</template>