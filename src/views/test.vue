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
    json.value=await api.add_user(token)
}
</script>
<template>
    <p>{{ uid }}</p>
<button @click="test">user_exists</button><br/>
<button @click="add_user">add_user</button>
<form method="post" action="https://tct.yosshipaopao.com/api/add_user">
    <input type="text" id="name" name="name" :value="token">
    <input type="submit" value="送信する">
    <h4>{{JSON.stringify(json)}}</h4>
</form>
</template>