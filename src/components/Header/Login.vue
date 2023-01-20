<script setup>
import { ref } from 'vue'
import {storeToRefs} from 'pinia'
import {useUsersSotre} from '@/stores/user'
import { firebaseApp } from '@/plugins/firebase';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
const Userstore = useUsersSotre();
const { name,email,token }= storeToRefs(Userstore);
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
    }
    //
}
onAuthStateChanged(auth, user => {
    if (user) {
        Userstore.addUser({
            islogined:true,
            name: user.displayName,
            email: user.email,
            token: user.accessToken
        });
        msg.value = "logout";
    } else {
        Userstore.addUser({
            islogined:false,
        });
        msg.value = "login";
    }
    button_disable.value = false;
});
</script>
<template>
    <div class="signin">
        <h2>Sign in</h2>
        <button :disabled="button_disable" @click="toggleSignIn">{{ msg }}</button>
        <p>user:{{ name }}<br>email:{{ email }}<br></p>
    </div>
</template>