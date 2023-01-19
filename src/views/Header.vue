<script setup>
import MenuIcon from '@/components/icons/menuicon.vue'

import SubMenu from '@/components/SubMenu.vue'

import {useHeaderSotre} from '@/stores/Header'
const HeaderStore = useHeaderSotre();
</script>
<template>
    <header>
        <SubMenu/>
        <div class="menuIcon" @click="HeaderStore.view_submenu(true)"><MenuIcon/></div>
    </header>
</template>

<style scoped lang="scss">
    header{
        position: fixed;
        top: 0;
        bottom: 90vh;
        left: 0;
        right: 0;
        background-color: antiquewhite;
        z-index: 1000;
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
</style>