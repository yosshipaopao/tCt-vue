<script setup>
import { ref , watch} from 'vue'
import { useRoute ,useRouter} from 'vue-router'
const route = useRoute();
const router = useRouter();
const id = ref(route.params.id);
const url = ref(id);

const message = ref("");
const textarea_height = ref("50");
watch(message, (c,o) => {
    textarea_height.value=20+getComputedStyle(document.getElementById("textarea")).lineHeight.replace(/[^-\d\.]/g, '')*(c+'\n').match(/\n/g).length;
});

//test
let a=[];
let b= [];
for(let i=0;i<100;i++){
    b.push({
        id:i,
        message:'test'+i
    })
}
for(let i=0;i<100;i++){
    a.push({
        name:"tester"+i,
        lastmessage:"test"+i,
        messages:b.slice()
    })
}
const chatlist=ref(a);
const send=()=>{
    activechat.value.messages.unshift({
        id:chatlist.value.length,
        message:message.value,
    })
    message.value="";
}

const result = chatlist.value.find((u) => u.name === route.params.id);
const activechat=ref(result?result:{name:null,lastmessage:null,messages:[]});

watch(activechat,(c,o)=>{router.push({name:'chat',params:{id:c.name}})});
</script>
<template>
    <div class="main">
        <div class="list">
            <div class="chat" v-for="ch in chatlist" @click="activechat=ch">
                <img src="https://yosshipaopao.com/icon.png">
                <div class="chatinfo">
                    <h1>{{ch.name}}</h1>
                    <h2>{{ch.messages[0].message}}</h2>
                </div>
            </div>
        </div>
        <div class="page">
            <div class="header">{{activechat.name}}|</div>
            <div class="messages">
                <div class="message" v-for="(message,i) in activechat.messages" key="i">{{message.message}}</div>
            </div>
            <div class="send">
                <div class="link">+</div>
                <div class="input">
                    <textarea placeholder="メッセージを入力..." v-model="message" id="textarea"></textarea>
                </div>
                <div class="attachment">
                    <button @click="send">SEND</button>
                </div>
            </div>
        </div>
    </div>
<!--<h1>{{id}}</h1>
<input v-model="url">-->
</template>
<style scoped lang="scss">
.main{
    width:100%;
    height:calc(100vh - var(--header-high));
    padding:calc(var(--radius) / 2);
    display:flex;
    .list{
        height:100%;
        width:300px;
        background:#404;
        display:flex;
        flex-direction: column;        
        padding:0 10px;
        overflow:scroll;
        .chat{
            margin: 5px 0;
            width:100%;
            height:50px;
            background:#900;
            display:flex;
            img{
                aspect-ratio:1/1;
                height:100%;
                border-radius:50px;
            }
            .chatinfo{
                display:flex;
                width:100%;
                flex-direction: column;
                padding: 0 10px;
                h1{
                    display:block;
                    height:50%;
                    font-size:20px;
                }
                h2{
                    display:block;
                    height:50%;
                    font-size:15px;
                    overflow:hidden;
                }
            }
        }
    }
    .page{
        height:100%;
        width:100%;
        background:#040;
        display:flex;
        flex-direction: column;
        .header{
            width:100%;
            height:75px;
            background:#560;
        }
        .messages{
            width:100%;
            height:100%;
            background:#506;
            overflow:scroll;
            display:flex;
            flex-direction: column-reverse;
            .message{
                padding:3px;
                width:calc(100%-20px);
                white-space: pre-line;
                margin:2px 10px;
                &:hover{
                    background:#000;
                }
            }
        }
        .send{
            width:100%;
            height:50px;
            background:#000;
            display:flex;
            align-items: flex-end;
            .link{
                height:100%;
                aspect-ratio:1/1;
                background:#550;
            }
            .input{
                width:100%;
                background:#505;
                height:v-bind("textarea_height+'px'");
                display:flex;
                textarea{
                    overflow-wrap: anywhere;
                    width:100%;
                    resize: none;
                    line-height: 2;
                    padding: 10px;
                    height:100%;
                }
            }
            .attachment{
                height:100%;
                width:200px;
                background:#055;
            }
        }
    }
}
</style>