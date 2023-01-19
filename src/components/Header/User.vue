<script setup>
import {ref} from 'vue';
const view = ref(false);
document.addEventListener('click',e=>{if(e.target.closest('.User')){
    view.value=true;
}else{
    view.value=false;
}
});
</script>
<template>
    <div class="User">
        <div>Not Logined</div>
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
    div{
        @include middle;
        width:100%;
        height:10vh;
        background:#00f;
    }
}
</style>