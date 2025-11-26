<template>
    <div>
        <div class=" grid grid-cols-2 md:grid-cols-3 ">
            <NuxtLink v-for="i in 6" :to="'/orchid/'+i">
                <GoodsItem class="m-1" ></GoodsItem>
            </NuxtLink>
        </div>
    </div>
</template>