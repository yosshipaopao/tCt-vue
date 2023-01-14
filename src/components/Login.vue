<script setup>
import { ref } from 'vue'
import { firebaseApp } from '@/plugins/firebase';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

let msg = ref("login")

const test = () => { console.log(msg.value); msg.value = "t" }
const toggleSignIn = () => {
    if (!auth.currentUser) {
        signInWithPopup(auth, provider).then(function (res) {

            msg = "SignOut";
            const credential = GoogleAuthProvider.credentialFromResult(res);
            //const token = credential.accessToken;
            const user = res.user;

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
}
</script>
<template>
    <div class="signin">
        <h2>Sign in</h2>
        <button @click="toggleSignIn">{{ msg }}</button>
        <button @click="test">test</button>
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