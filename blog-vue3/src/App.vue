<template>
<Header></Header>
<div class="content">
    <RouterView/>
</div>





</template>

<script setup>
import Editer from './components/Editer.vue';
import Header from './components/Header.vue';

</script>

<style>
.content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

</style>