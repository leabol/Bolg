<script setup>
import Login from './views/Login.vue';
</script>

<template>
  <RouterLink to="/login">login</RouterLink>
  <Login class="log"></Login>
  <RouterView/>
</template>

<style>
.log{
  
}
</style>