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
    if (!auth.currentUser) {
        signInWithPopup(auth, provider).then(function (res) {
            msg = "SignOut";
            //const credential = GoogleAuthProvider.credentialFromResult(res);
            //const token = credential.accessToken;
            //const user = res.user;
            //console.log(user);
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The auth.AuthCredential type that was used.
            var credential = error.credential;
            if (errorCode === 'auth/account-exists-with-different-credential') {
                alert('You have already signed up with a different auth provider for that email.');
            } else {
                console.error(error);
            }
        });
    } else {
        signOut(auth);
    }
    button_disable.value = true;

}
onAuthStateChanged(auth, user => {
    if (user) {
        console.log(user);
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
<style scoped>
</style>