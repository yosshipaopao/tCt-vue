<script setup>
import {storeToRefs} from 'pinia'

import {useHeaderSotre} from '@/stores/Header'

const HeaderStore = useHeaderSotre();
const {subMenu} = storeToRefs(HeaderStore);
</script>
<template>
    <transition name="bg">
        <div v-show="subMenu" class="bgsubMenu" @click="HeaderStore.view_submenu(false)"></div>
    </transition>
    <transition name="menu">
        <div v-show="subMenu" class="subMenu"></div>
    </transition>
</template>
<style scoped lang="scss">
.bg-enter-active,.bg-leave-active {
    transition: opacity 0.5s ease;
}
.bg-enter-from,.bg-leave-to {
    opacity: 0;
}
.menu-enter-active,.menu-leave-active {
    transition: transform 0.5s ease;
}
.menu-enter-from,.menu-leave-to {
    transform: translateX(-200px);
}
.subMenu{
    position: fixed;
    top: 0;
    bottom: 0;
    width: 200px;
    left: 0px;
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