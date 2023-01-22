<script setup>
import {storeToRefs} from 'pinia'

import {useHeaderSotre} from '@/stores/Header'

const HeaderStore = useHeaderSotre();
const {subMenu} = storeToRefs(HeaderStore);

const Links=[
    {
        path:"/",
        name:"HOME"
    },{
        path:"/about",
        name:"ABOUT"
    },{
        path:"/user",
        name:"User"
    },{
        path:"/login",
        name:"login"
    }
]
</script>
<template>
    <transition name="bg">
        <div v-show="subMenu" class="bgsubMenu" @click="HeaderStore.view_submenu(false)"></div>
    </transition>
    <transition name="menu">
        <div v-show="subMenu" class="subMenu">
            <div class="Links">
                <RouterLink v-for="(link,i) in Links" :key="i" :to="link.path" @click="HeaderStore.view_submenu(false)">{{link.name}}</RouterLink>
            </div>
        </div>
    </transition>
</template>
<style scoped lang="scss">
@import '@/assets/mixin.scss';
.subMenu{
    position: fixed;
    top: 0;
    bottom: 0;
    width: 300px;
    left: 0px;
    padding-right: 10px;
    background-color: rgba(var(--color-accent1),var(--opacity));
    z-index: 1002;
    padding-top:200px;
    box-shadow: 0 0 50px #000f;
    .Links{
        width: 100%;
        height: 100%;
        display: flex;
        align-items:center;
        flex-direction: column;
        a{
            width:90%;
            height:50px;
            margin:5px 0;
            margin-left:10%;
            background:rgba(var(--color-accent2),var(--opacity));
            border-radius: var(--header-button-radius);
            @include middle;
        }
    }
}
.bgsubMenu{
    @include full;
    background-color: #ffffff55;
    backdrop-filter: blur(5px);
    z-index: 1001;
}
.bg-enter-active,.bg-leave-active {
    transition: opacity 0.5s ease;
}
.bg-enter-from,.bg-leave-to {
    opacity: 0;
}
.menu-enter-active,.menu-leave-active {
    transition: transform .5s,box-shadow .5s;
}
.menu-enter-from,.menu-leave-to {
    transform: translateX(-300px);
    box-shadow: 0 0 50px #0000;
}
</style>