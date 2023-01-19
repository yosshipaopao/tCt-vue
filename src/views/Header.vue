<script setup>
import MenuIcon from '@/components/icons/menuicon.vue'

import SubMenu from '@/components/Header/SubMenu.vue'

import Info from '@/components/Header/Information.vue'

import User from '@/components/Header/User.vue'

import {useHeaderSotre} from '@/stores/Header'
const HeaderStore = useHeaderSotre();
</script>
<template>
    <SubMenu/>
    <header>
        <div class="menuIcon" @click="HeaderStore.view_submenu(true)"><MenuIcon/></div>
        <Info/>
        <User/>
    </header>
</template>

<style scoped lang="scss">
    @import '@/assets/mixin.scss';
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
    }
    .menuIcon{
        height: 100%;
        aspect-ratio: 1/1;
        background-color: aliceblue;
        @include middle;
        svg{
            height: 50%;
            width: 50%;
        }
    }
</style>