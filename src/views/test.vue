<script setup>
import {ref} from 'vue'
import {storeToRefs} from 'pinia'
import { useUsersSotre } from '@/stores/user'
import api from '@/plugins/api'
const Userstore = useUsersSotre();
const { islogined,name,email,idtoken,pic,uid,token }= storeToRefs(Userstore);

const json = ref({});
const test = async () =>{
    json.value = await api.user_exists(uid.value)
}
const add_user = async()=>{
    json.value = await api.add_user(uid.value,idtoken.value)
}
const update_token = async()=>{
    let response =  await api.update_token(uid.value,idtoken.value);
    json.value = response;
    Userstore.update_token(response.token);
}
</script>
<template>
    <p>{{ uid }}</p>
    <button @click="test">user_exists</button><br/>
    <button @click="add_user">add_user</button><br/>
    <button @click="update_token">update_token</button><br/>
    <h4>{{JSON.stringify(json)}}</h4>
    <h5>{{token}}</h5>
</template>