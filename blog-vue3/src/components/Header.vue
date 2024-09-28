<template>
    <div class="header">
        <RouterLink to="/"><div class="logo">blog</div></RouterLink>
        <div class="search">
            <SearchBox></SearchBox>
        </div>
        <div class="meanu">
            <RouterLink to="/login"><But>登 录</But></RouterLink>
            <RouterLink to="/editer"><But>发 布</But></RouterLink>
        </div>

    </div>

    
</template>

<script setup>
import But from './But.vue';
import SearchBox from './searchBox.vue';
</script>

<style scoped>
a {
  text-decoration: none; 
  color: inherit; 
  cursor: pointer; 
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 1;
    width: 100%;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)
}
.logo{
    font-size: 40px;
    font-weight:900;
    padding: 10px;
    color: rgba(202, 11, 11, 0.692);
}
.meanu{
    display: flex;
    align-items: center;
}
</style>