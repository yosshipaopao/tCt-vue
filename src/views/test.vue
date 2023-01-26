<script setup>
import {ref} from 'vue'

import { useUsersSotre } from '@/stores/user'
import api from '@/plugins/api'
const {token,uid } = useUsersSotre();
const json = ref({});
const test = async () =>{
    console.log(await api.user_exists(uid))
}
</script>
<template>
    <p>{{ uid }}</p>
<button @click="test">test</button>
<form method="post" action="https://tct.yosshipaopao.com/api/test">
    <input type="text" id="name" name="name" :value="token">
    <input type="submit" value="送信する">
    <h4>{{JSON.stringify(json)}}</h4>
</form>
</template>