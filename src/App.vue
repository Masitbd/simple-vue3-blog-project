<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
 <div class="mx-auto">
  <header>
    
    <!--  <div class="wrapper">
      <nav>
         <RouterLink to="/">Home</RouterLink>
         <RouterLink to="/about">About</RouterLink>
       </nav>
     </div> -->
 
  <NavBar />
 
   </header>
 </div>
   
   <div class="mx-auto  px-40">
   <RouterView />
  </div>
</template>

<style scoped>
</style>
