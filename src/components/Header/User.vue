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
    width: 300px;
    height: v-bind("view?'300px':'100%'");
    transition: height .5s ease;
    background-color: aquamarine;
    overflow:hidden;
    display: flex;
    flex-direction: column;

    .minmsg{
        @include middle;
        width:100%;
        height:var(--header-high);
        background:#00f;
        flex-shrink: 0;
    }
    .detail{
        background:#0ff;
        width:100%;
        height: calc( 300px - 10vh );
    }
}
</style>