<script setup>
import { useUsersSotre } from '@/stores/user'
const { name, email, idtoken } = useUsersSotre();
</script>
<template>
    <div>
        <p>pinia:{{ name }}<br>{{ email }}<br>{{ idtoken }}</p>
    </div>
</template>
<style scoped>
p {
    word-break: break-word;
}
</style>