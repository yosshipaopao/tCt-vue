<script setup>
import {storeToRefs} from 'pinia'

import {useHeaderSotre} from '@/stores/Header'

const HeaderStore = useHeaderSotre();
const {subMenu} = storeToRefs(HeaderStore);
</script>
<template>
    <transition>
    <div v-show="subMenu" class="bgsubMenu" @click="HeaderStore.view_submenu(false)"></div>
    </transition>
    <div v-show="subMenu" class="subMenu"></div>
</template>
<style scoped>
.subMenu{
    position: fixed;
    top: 0;
    bottom: 0;
    width: 200px;
    left: 0;
    background-color: aqua;
    z-index: 1002;
}
.bgsubMenu{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ffffff55;
    backdrop-filter: blur(5px);
    z-index: 1001;
}
</style>