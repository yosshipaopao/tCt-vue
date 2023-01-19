<script setup>
import MenuIcon from '@/components/icons/menuicon.vue'

import SubMenu from '@/components/Header/SubMenu.vue'

import {useHeaderSotre} from '@/stores/Header'
const HeaderStore = useHeaderSotre();

const Links=[
    {
        path:"/",
        name:"HOME"
    },{
        path:"/about",
        name:"ABOUT"
    },{
        path:"/login",
        name:"login"
    }
]
</script>
<template>
    <SubMenu/>
    <header>
        <div class="menuIcon" @click="HeaderStore.view_submenu(true)"><MenuIcon/></div>
        <div class="Links">
            <RouterLink v-for="(link,i) in Links" :key="i" :to="link.path">{{link.name}}</RouterLink>
        </div>
        <div class="user"></div>
    </header>
</template>

<style scoped lang="scss">
    header{
        position: fixed;
        top: 0;
        bottom: 90vh;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: row;
        background-color: antiquewhite;
        padding-right: 200px;
        z-index: 1000;
        .Links{
            width: 100%;
            height: 100%;
            display: flex;
            align-items:center;
        }
    }
    .menuIcon{
        height: 100%;
        aspect-ratio: 1/1;
        background-color: aliceblue;
        display:flex;
        align-items:center;
        justify-content: center;
        svg{
            height: 50%;
            width: 50%;
        }
    }
    .user{
        position: absolute;
        top:0;
        right: 0;
        width: 200px;
        height: 100%;
        background-color: aquamarine;
    }
</style>