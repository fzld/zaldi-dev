<template>
  <div>
    <HeroIndex/>
    <RecentWorks
    v-for="cardInfo in recentWorks"
    :key="cardInfo.id"
    :recentWorks="cardInfo" />
  </div>
</template>

<script>
import { recentWorks } from "@/assets/data.js"
export default {
  data() {
    return {
      recentWorks
    }
  }
}
</script>
