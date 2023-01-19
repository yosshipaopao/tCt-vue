<script setup>
import { ref } from "vue"
import { useUsersSotre } from '@/stores/user'
const { name, email, token, addUser } = useUsersSotre();
</script>
<template>
    <div>
        <p>pinia:{{ name }}<br>{{ email }}<br>{{ token }}</p>
    </div>
</template>
<style scoped>
p {
    word-break: break-word;
}
</style>