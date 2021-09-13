<template>
    <!--portfolio-->
    <section class="relative bg-zld-navy  py-16">
            <div class="container flex flex-col-reverse lg:flex-row sm:px-32 gap-12">
                <!--header-->
                <div class="flex flex-1 flex-col items-start z-10 px-0">
                    <h2 class="text-zld-white text-2xl sm:text-3xl lg:text-left mb-4 font-black">
                        <i class="fas fa-history text-zld-yellow"></i> {{ portfolioZld.title }}
                    </h2>
                    <p class="text-zld-white font-thin text-sm sm:text-base text-left mb-6">
                        {{ portfolioZld.snippet }}
                    </p>
                    <hr style="width: 5%;" class="bg-zld-white mb-6">
                </div>    
            </div>
            <!--cards container-->
            <div class="container sm:px-28">
                <PortfolioCard 
                v-for="card in portfolioZld.cards"
                :key="card.id"
                :card="card"
                />
            </div>
    </section>
</template>

<script>
    export default {
        props: ['portfolioZld']
    }
</script>

<style lang="scss" scoped>

</style>