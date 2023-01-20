<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/views/Header.vue'
</script>

<template>
  <Header/>
  <div class="headerspace"></div>
  <RouterView />
</template>

<style scoped>
.headerspace{
  height: var(--header-high);
}
</style>
