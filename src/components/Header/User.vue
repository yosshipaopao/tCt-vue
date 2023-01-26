<script setup>
import {ref} from 'vue';
import router from "@/router"

import GoogleIcon from '@/components/icons/google.vue';

import {storeToRefs} from 'pinia'
import {useUsersSotre} from '@/stores/user'

import { firebaseApp } from '@/plugins/firebase';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

import api from '@/plugins/api'

const Userstore = useUsersSotre();
const { islogined,name,email,token,pic,uid }= storeToRefs(Userstore);
const view = ref(false);
document.addEventListener('click',e=>view.value=islogined.value?Boolean(e.target.closest('.User')):false);

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
let button_disable = ref(false);
let msg = ref("login")

const toggleSignIn = () => {
    button_disable.value = true;
    if (!auth.currentUser) {
        signInWithPopup(auth, provider).then(function (res) {
            msg = "SignOut";
        }).catch(function (e) {
            switch (e.code) {
                case 'auth/cancelled-popup-request':
                case 'auth/popup-closed-by-user':
                    break;
                case 'auth/popup-blocked':
                    alert('認証ポップアップがブロックされました。ポップアップブロックをご利用の場合は設定を解除してください');
                    break;
                default:
                    alert("firebaseでの認証にエラーが発生しました");
                    console.error(e);
            }
            button_disable.value = false;
        });
    } else {
        signOut(auth);
        button_disable.value = false;
        msg = "LOGIN";
    }
}
onAuthStateChanged(auth, async (user) => {
    if (user) {
        Userstore.addUser({
            islogined:true,
            name: user.displayName,
            email: user.email,
            token: user.accessToken,
            pic: user.photoURL,
            uid: user.uid,
        });
        msg.value = "logout";
        if (!await api.user_exists(user.uid)){
            router.push({ path: 'setting' });
        }
    } else {
        Userstore.addUser({
            islogined:false,
        });
        msg.value = "LOGIN";
    }
    button_disable.value = false;
});
</script>
<template>
    <div class="User">
        <div class="minmsg">
            <template v-if="islogined">
                <img :src="pic">
                <p>{{name}}</p>
            </template>
            <template v-else>
                <button :disabled="button_disable" @click="toggleSignIn">
                <GoogleIcon/><span>{{ msg }}</span></button>
            </template>
        </div>
        <div class="detail">
            <RouterLink to="/setting">SETTING</RouterLink>
            <button :disabled="button_disable" @click="toggleSignIn">{{ msg }}</button>
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
    height: v-bind("view?`calc(${60*2}px + 100%)`:'100%'");
    border-radius:var(--header-radius);
    transition: height .5s ease;
    overflow:hidden;
    display: flex;
    flex-direction: column;

    .minmsg{
        @include middle;
        width:100%;
        height:calc(var(--header-high) - var(--header-top));
        background: rgba(var(--color-accent1),var(--opacity));
        flex-shrink: 0;
        img{
            margin:auto 10px;
            aspect-ratio:1/1;
            height:75%;
            border-radius:50%;
        }
        p{
            display: inline-block;
            width:100%;
            @include middle;
            font-size:30px;
            margin-right:10px;
        }
        button{
            width:100%;
            height:100%;        
            display: flex;
            align-items: center;
            svg{
                margin:10px;
                height:calc(var(--header-high) / 2);
                width:calc(var(--header-high) / 2);
            }
            span{
                font-size:40px;
                margin-right:10px;
                width:100%;
            }
        }
    }
    .detail{
        width:100%;
        height: 100%;
        padding:0 10px;
        background-color: rgba(var(--color-bg-inverse),var(--opacity));
        button,a{
            display:block;
            @include middle;
            width:100%;
            height:50px;
            border-radius:10px;
            background:rgb(var(--color-accent2));
            margin: 5px 0;
            text-decoration:none;
        }
        *{
            color:rgb(var(--color-bg));
        }
    }
}
</style>