<script setup>
import {ref} from "vue"
import {useUsersSotre} from '@/stores/user'
const   {name , email, token, addUser} = useUsersSotre();
const test= ref({
    islogined:true,
    name:"testuser",
    email:"test@example.com",
    token:"testtoken"
});
</script>
<template>
<div>
<p>{{name}}<br>{{email}}<br>{{token}}</p>
<input type="checkbox" v-model="test.islogined"><br>
<input type="text" v-model="test.name"><br>
<input type="text" v-model="test.email"><br>
<input type="text" v-model="test.token"><br>
<button @click="addUser(test)">Set User</button>
</div>
</template>