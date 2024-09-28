<template>
    <div class="header">
        <RouterLink to="/"><div class="logo">blog</div></RouterLink>
        <div class="search">
            <input type="text" placeholder="Search">
            <But>search</But>
        </div>
        <div class="meanu">
            <RouterLink to="/login"><But>login</But></RouterLink>
            <RouterLink to="/signup"><But>Signup</But></RouterLink>
        </div>

    </div>

    
</template>

<script setup>
import But from './But.vue';
</script>

<style>
a {
  text-decoration: none; 
  color: inherit; 
  cursor: pointer; 
}
.header {
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 1;
    width: 100%;
    background-color: rgb(231, 231, 231);
}
.logo{
    font-size: 40px;
    font-weight:900;
    padding: 10px;
    color: rgba(202, 11, 11, 0.692);
}
.search{
    display: flex;
    align-items: center;
    padding: 10px;
    padding: 10px;
    margin-top: 10px;
    margin-right: 10px;
}
input{
    padding: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 15px;
}
.meanu{
    display: flex;
    align-items: center;
}
</style>