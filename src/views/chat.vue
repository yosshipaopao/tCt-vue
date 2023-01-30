<script setup>
import { ref , watch} from 'vue'
import { useRoute ,useRouter} from 'vue-router'
const route = useRoute();
const router = useRouter();
const id = ref(route.params.id);
const url = ref(id);
watch(url, (c,o) => {
  router.push({name:'chat',params:{id:c}})
});
</script>
<template>
<h1>{{id}}</h1>
<input v-model="url">
</template>