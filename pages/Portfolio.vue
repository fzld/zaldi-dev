<template>
    <div class="">
    <Portfolio
    v-for="cardInfo in portfolioZld"
    :key="cardInfo.id"
    :portfolioZld="cardInfo" />
    </div>
</template>

<script>
import { portfolioZld } from "@/assets/data.js"
export default {
  data() {
    return {
      portfolioZld
    }
  }
}
</script>

<style lang="scss" scoped>

</style>