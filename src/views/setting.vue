<script setup>
import {ref} from "vue"
import router from '@/router'
import api from "@/plugins/api"
import {storeToRefs} from 'pinia'
import {useUsersSotre} from '@/stores/user'
const {islogined,uid} = storeToRefs(useUsersSotre());
const loading = ref(true);
if(islogined){
    loading.value=false;
}else{
    alert("ログインしていません");
    router.push({path:'/'});    
}
</script>
<template>
    <div class="loading" v-if="loading"></div>
    <form>
        <label for="test">setting</label><br>
        <input name="test" type="text">
    </form>
</template>
<style scoped>
.loading{
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;
    background:#fff;
}
</style>