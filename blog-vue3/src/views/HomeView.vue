<template>
    <div class="content">
    <div class="block"></div>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>

    </div>
</template>

<script setup>
import ArticleCard from '@/components/ArticleCard.vue';


</script>

<style scoped>
.block {
    height: 70px;
}
    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 800px;
    }
   
</style>

