<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    
   <!--  <div class="wrapper">
     <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->

 <!--  <NavBar /> -->
 <button class="btn btn-primary">Hello daisyui</button>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
