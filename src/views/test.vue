<script setup>
import axios from 'axios'

const request = const axios = axiosBase.create({
      baseURL: 'https://tct.yosshipaopao.com', // バックエンドB のURL:port を指定する
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json'  
});
const test = () 
</script>
<template>
<button @click="">test</button>
</template>