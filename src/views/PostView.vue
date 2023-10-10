// eslint-disable-next-line vue/multi-word-component-names
<script setup>
import axios from "axios";
import { ref } from "vue";
//import { ref, onMounted } from "vue";
const items = ref([]);
const url = ref("https://jsonplaceholder.typicode.com/posts");
function fetchPosts() {
 axios
 .get(url.value)
 .then((response) => {
 items.value = response.data;//สิ่งที่ได้คืนจากฝั่งserver 
//เพิ่มการค้นหาในarray ทำโมเดลmattกัน
})
 .catch((err) => {
 console.log(err);
 });
}
//onMounted(fetchPosts);
 </script>
<template>
    <div>
<h1>Post page</h1>
<input type="text">
<button @click="fetchPosts()" class="btn btn-primary">show more</button>
<div>
     <ui v-for="(post,index) in items" :key="index">
        <li>userId= {{ post.userId }}</li>
        <li>id={{ post.id }} </li>
        <li>Title:{{ post.title}}</li>
        <!-- <li>Body:{{ post.body}}</li> -->
        <li><RouterLink :to="`/post/${post.id}`">Read More 
        </RouterLink> </li>
    
</ui> 


</div>
    </div>
</template>

<style scoped></style>