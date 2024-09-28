<template>
    <div>
        <button @click="startCountdown" :disabled="isCounting">{{ buttonText }}</button>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
const countdown = ref(60);
const isCounting = ref(false);
const buttonText = ref('获取验证码');

//传经来的email,code
const props = defineProps(['email']);


async function startCountdown() {
    if (isCounting.value) return;

    isCounting.value = true;
    buttonText.value = `${countdown.value}秒后重试`;

    try {
        // 发送 GET 请求
        const response = await fetch('http://localhost:3000/uersData');
        const data = await response.json();
        console.log('Verification code response:', data);
    } catch (error) {
        console.error('Error fetching verification code:', error);
    }

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
 width: 110px;
    height: 33px;
    padding: 6px 6px;
    margin-right: 10px;
    font-size: 15px;
    cursor: pointer;

}

button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
}
</style>