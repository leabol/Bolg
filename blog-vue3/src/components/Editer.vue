<template>
    <div class="editer">
        <div class="block"></div>
        <v-md-editor v-model="text" height="500px" :include-level="[1, 3]" default-show-toc="true"></v-md-editor>
        <div class="butt">
            <But>存入草稿</But>
            <But>发 布</But>

        </div>

    </div>

</template>

<script setup>
import But from './But.vue';

import { ref } from 'vue';
const text = ref('');
</script>

<style scoped>
.block {
    height: 70px;
}

.editer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 80px;
    min-width: 1200px;
}

.butt {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}
</style>