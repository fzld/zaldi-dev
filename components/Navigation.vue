<template>
    <div>
        <header>
        <nav class="container flex flex-col sm:flex-row flex-wrap items-center pt-10 sm:pt-20 bg-zld-navy px-28">
            <nuxtLink class="flex flex-1 mb-6 sm:mb-0" to="/"><img src="~/assets/imgs/logo-yellow.svg" alt=""></nuxtLink>
            <div class="flex flex-1">
            <ul class="flex flex-1 justify-center sm:justify-end items-center gap-6 text-zld-white text-sm font-black">
                <li class="cursor-pointer m-0 sm:m-4"><nuxt-link to="/about">about</nuxt-link></li>
                <li class="cursor-pointer m-0 sm:m-4"><nuxt-link to="/portfolio">portfolio</nuxt-link></li>
                <li class="cursor-pointer m-0 sm:m-4"><nuxt-link to="/contact">contact</nuxt-link></li>
            </ul>
            </div>
        </nav>
    </header>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>