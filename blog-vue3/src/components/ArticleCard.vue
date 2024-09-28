<template>
    <div class="card">
        <span class="title"></span>
        <p class="content"><span> </span></p>
        <div class="info">
            <span class="like"></span>
            <span class="collect"></span>
            <span class="follow" v-text="follow"></span>
            <span class="name"></span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

    const follow = ref('')
</script>

<style scoped>
    .card {
        width: 800px;
        height: 200px;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)
    }
    .title{
        width: 100%;
        
        padding: 5px;
        font-size: 20px;
        overflow: hidden;
        font-weight: bold;
        text-overflow: ellipsis;

    }
    .content{
        width: 100%;
        height: 110px;
        padding: 10px;
        font-size: 16px;
        overflow: hidden;
        line-height: 19px;
        padding: 14px;
        word-break: break-word;
    }
    .info{
        width: 100%;
        height: 50px;
    }

</style>