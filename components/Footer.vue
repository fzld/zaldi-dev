<template>
    <div>
    <footer class="bg-zld-light-navy px-28 py-10">
        <div class="container flex flex-col md:flex-row items-center">
            <div class="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-4">
                <ul class="flex text-white text-sm gap-6 mb-6 sm:mb-0">
                    <nuxt-link to="/blogs"><li>/blogs</li></nuxt-link>
                    <nuxt-link to="/gear"><li>/gear</li></nuxt-link>
                </ul>
            </div>
            <div class="flex gap-4 text-white">
                <a href="https://github.com/fzld" target="_blank" rel="noopener noreferrer"><i class="fab fa-github text-2xl"></i></a>
                <a href="https://dribbble.com/fzlddd" target="_blank" rel="noopener noreferrer"><i class="fab fa-dribbble text-2xl"></i></a>
                <a href="https://www.linkedin.com/in/fzlddd/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin text-2xl"></i></a>
                <a href="mailto:fzlddd@gmail.com"><i class="fas fa-envelope text-2xl"></i></a>
            </div>
        </div>
    </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>