<script setup>
import { ref } from 'vue'
import { firebaseApp } from '@/plugins/firebase';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
let button_disable = ref(false);
let msg = ref("login")
let userdata = ref({
    name: null,
    email: null,
    token: null
});

const test = () => { console.log(msg.value); msg.value = "t" }
const toggleSignIn = () => {
    if (!auth.currentUser) {
        signInWithPopup(auth, provider).then(function (res) {

            msg = "SignOut";
            const credential = GoogleAuthProvider.credentialFromResult(res);
            const token = credential.accessToken;
            const user = res.user;
            userdata.value = {
                name: user.displayName,
                email: user.email,
                token: token
            }
            console.log(user);
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
        userdata.value = {
            name: user.displayName,
            email: user.email,
            token: user.accessToken
        }
        msg.value = "logout";
    } else {
        msg.value = "login";
    }
    button_disable.value = false;
});
</script>
<template>
    <div class="signin">
        <h2>Sign in</h2>
        <button :disabled="button_disable" @click="toggleSignIn">{{ msg }}</button>
        <button @click="test">test</button>
        <p>user:{{ userdata.name }}<br>email:{{ userdata.email }}<br></p>
    </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.signin {
    margin-top: 20px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center
}

input {
    margin: 10px 0;
    padding: 10px;
}
</style>