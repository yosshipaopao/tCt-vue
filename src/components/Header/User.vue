<script setup>
import {ref} from 'vue';
import Login from '@/components/Header/Login.vue';
import {storeToRefs} from 'pinia'
import {useUsersSotre} from '@/stores/user'
const Userstore = useUsersSotre();
const { islogined,name,email,token }= storeToRefs(Userstore);
const view = ref(false);
document.addEventListener('click',e=>view.value=Boolean(e.target.closest('.User')));
</script>
<template>
    <div class="User">
        <div class="minmsg">
            {{islogined?name+"としてログインしています。":"ログインしていません"}}
        </div>
        <div class="detail">
            <Login/>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import '@/assets/mixin.scss';
.User{
    position: absolute;
    top:0;
    right: 0;
    width: var(--header-user-width);
    height: v-bind("view?'300px':'100%'");
    border-top-left-radius: calc(var(--header-radius) / 2);
    border-bottom-left-radius: calc(var(--header-radius) / 2);
    border-top-right-radius: var(--header-radius);
    border-bottom-right-radius: var(--header-radius);
    transition: height .5s ease;
    background-color: rgba(var(--color-bg-inverse),var(--opacity));
    overflow:hidden;
    display: flex;
    flex-direction: column;

    .minmsg{
        @include middle;
        width:100%;
        height:calc(var(--header-high) - var(--header-top));
        background: rgba(var(--color-accent1),var(--opacity));
        flex-shrink: 0;
    }
    .detail{
        width:100%;
        height: calc( 300px - var(--header-high));
        color:rgba(var(--color-bg),var(--opacity));
        *{
            color:rgb(var(--color-bg));
        }
    }
}
</style>