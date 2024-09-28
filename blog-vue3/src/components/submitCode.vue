<template>
    <div>
        <button @click="startCountdown" :disabled="isCounting">{{ buttonText }}</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const countdown = ref(60);
const isCounting = ref(false);
const buttonText = ref('获取验证码');

function startCountdown() {
    if (isCounting.value) return;

    isCounting.value = true;
    buttonText.value = `${countdown.value}秒后重试`;
    const interval = setInterval(() => {
        countdown.value--;
        buttonText.value = `${countdown.value}秒后重试`;
        if (countdown.value <= 0) {
            clearInterval(interval);
            isCounting.value = false;
            countdown.value = 60;
            buttonText.value = '获取验证码';
        }
    }, 1000);
}
</script>

<style scoped>
button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
}
</style>