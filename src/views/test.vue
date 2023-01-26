<script setup>
import {ref} from 'vue'

import { useUsersSotre } from '@/stores/user'
import api from '@/plugins/api'
const {token,uid } = useUsersSotre();
const json = ref({});
const test = async () =>{
    json.value = await api.user_exists(uid)
}
const add_user = async()=>{
    json.value = await api.add_user(token)
}
</script>
<template>
    <p>{{ uid }}</p>
    <button @click="test">user_exists</button><br/>
    <button @click="add_user">add_user</button>
    <h4>{{JSON.stringify(json)}}</h4>
</template>