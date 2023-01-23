<script setup>
import axios from 'axios'

import { useUsersSotre } from '@/stores/user'
const {token} = useUsersSotre();

//const request = axios.create({
//      baseURL: 'https://tct.yosshipaopao.com', // バックエンドB のURL:port を指定する
//    headers: {
//        'Content-Type': 'application/json',
 //   },
//    responseType: 'json'  
//});
const test = () =>{ 
    axios.post('https://tct.yosshipaopao.com/api/test',{
    idtoken:token,
    a:"b"
    }).then(res => console.log(res.data));
    }
</script>
<template>

    <p>{{ token }}</p>
<button @click="test">test</button>
<form method="post" action="https://tct.yosshipaopao.com/api/test">
    <input type="text" id="name" name="name" :value="token">
    <input type="submit" value="送信する">
</form>
</template>