<script setup>
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios'
import PostCard from '../components/PostCard.vue';

let posts = reactive([]);
    let isLoading = ref(true)
    onMounted(async () => {
        try {
               const {data} = await axios.get("https://basic-blog.teamrabbil.com/api/post-categories")
                posts = data;
                console.log(data);
                isLoading.value = false;              
        } catch (error) {
            console.error("Error fetching===>",error)
            
        }
      })
  </script>
<template>
    <h1 class="text-3xl font-bold" v-if="isLoading">Loading.....</h1>
    <div class="grid grid-cols-3 gap-4 " v-else>
        <PostCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
               />   
</div>
</template>

