<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/views/Header.vue'
</script>

<template>
  <Header/>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main{
    margin:calc(var(--header-high) + 50px) 50px var(--side-len) ;
    min-height: calc(100vh - var(--header-high) - 100px);
    border-radius:var(--radius);
    padding:calc(var(--radius) / 2);
    word-break: break-word;
    background:rgb(var(--color-bg));
}
</style>
