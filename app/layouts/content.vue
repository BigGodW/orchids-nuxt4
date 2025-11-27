<template>
    <div class="mx-auto max-w-7xl relative">
        <main-header-back class=" sticky  top-0 max-w-7xl w-full"></main-header-back>
        <div class="flex">
            <div class="flex-1">
                <slot></slot>
            </div>
            <div class=" flex-none w-0 md:w-84 ">
                <main-pc-aside class=" sticky  top-12"></main-pc-aside>
            </div>
        </div>
        <main-footer></main-footer>
    </div>
</template>