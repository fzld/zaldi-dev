<template>
    <div class="max-w-3/4 mx-auto bg-zld-light-navy rounded-xl shadow-md overflow-hidden mx-5 mb-6">
        <div class="md:flex">
        <div class="md:flex-shrink-0">
            <img class="h-60 w-full object-cover md:w-60 " :src="require(`@/assets/imgs/${card.image || 'yukcucitangan.png'}`)" alt="A cat">
        </div>
        <div class="p-14">
            <div class="uppercase tracking-wide text-sm text-indigo-400 font-semibold">{{ card.category }}</div>
            <p class="block mt-1 text-lg leading-tight font-medium text-white">{{ card.title }}</p>
            <p class="mb-6 mt-1 text-gray-500">{{ card.snippet }}</p>
            <a :href="`${card.repository}`" class="btn btn-red mr-2 hover:bg-red-500 cursor-pointer">Repository</a><a :href="`${card.website}`" class="btn btn-red mr-2 hover:bg-red-500 cursor-pointer">Website</a>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['card']
    }
</script>

<style lang="scss" scoped>

</style>