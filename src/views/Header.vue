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
        top: var(--header-top);
        bottom: calc(100vh - var(--header-high));
        left: var(--side-len);
        right: var(--side-len);
        border-radius:var(--header-radius);
        background:rgba(var(--color-main),var(--opacity));
        display: flex;
        flex-direction: row;
        padding-right: var(--header-user-width);
        z-index: 1000;
        .menuIcon{
            height: 100%;
            aspect-ratio: 1/1;
            border-radius: var(--header-radius);
            background-color: rgba(var(--color-accent1),var(--opacity));
            @include middle;
            svg{
                height: 50%;
                width: 50%;
                stroke:rgb(var(--color-bg));
            }
        }
    }
</style>