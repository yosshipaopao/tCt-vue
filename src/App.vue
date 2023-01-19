<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/views/Header.vue'
</script>

<template>
  <Header/>
  <RouterView />
</template>

<style scoped>
.headerspace{
  height: 10vh;
}
main{
  margin-top: 10vh;
}
</style>
