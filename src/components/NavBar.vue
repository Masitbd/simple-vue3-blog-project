<script setup>

</script>
<template>
<div className="navbar bg-base-100 shadow-md w-full px-20">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
     </div>
    <a className="btn btn-ghost normal-case text-xl text-orange-600 ">Merto Blogs</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       <li> <router-link to="/">Home</router-link></li>
       <li> <router-link to="/blogs">Blogs</router-link></li>
       <li> <router-link to="/about">About me</router-link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a class="btn btn-accent">Login</a>
  </div>
</div>
</template>

<style scoped>


</style>