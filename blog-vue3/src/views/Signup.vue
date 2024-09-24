<template>
    <div class="signup">
        
    <a-form class="signup-form" ref="formRef" name="custom-validation" :model="formState" :rules="rules" v-bind="layout"
        @finish="handleFinish" @validate="handleValidate" @finishFailed="handleFinishFailed">
        <h1><RouterLink to="/login">登录</RouterLink> | 
            <RouterLink to="/signup">现在注册</RouterLink></h1>
        <a-form-item  label="用户名" >
            <a-input v-model:value="formState.username" />
        </a-form-item>
        <a-form-item  label="密码" name="pass">
            <a-input v-model:value="formState.pass" type="password" />
        </a-form-item>
        <a-form-item  label="验证密码" name="checkPass">
            <a-input v-model:value="formState.checkPass" type="password" autocomplete="off" />
        </a-form-item>
        <a-form-item  label="邮箱" name="email">
            <a-input v-model:value="formState.email" />
        </a-form-item>
        <a-form-item  label="验证码">
            <a-input v-model:value="formState.Code" />
        </a-form-item>
        

        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" html-type="submit" size="large" @click="signup">注册账号</a-button>
            <a-button style="margin-left: 15px" @click="resetForm" size="large">重置表单</a-button>
            
        </a-form-item>
    </a-form>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
const formRef = ref();
const formState = reactive({
    username: '',
    pass: '',
    checkPass: '',
    email: '',
    Code: '',
});

const validatePass = async (_rule, value) => {
    if (value === '') {
        return Promise.reject('请输入密码');
    } else {
        if (formState.checkPass !== '') {
            formRef.value.validateFields('checkPass');
        }
        return Promise.resolve();
    }
};
const validatePass2 = async (_rule, value) => {
    if (value === '') {
        return Promise.reject('请再输入一次密码');
    } else if (value !== formState.pass) {
        return Promise.reject("两次密码不一致!");
    } else {
        return Promise.resolve();
    }
};
const rules = {
    pass: [
        {
            required: true,
            validator: validatePass,
            trigger: 'change',
        },
    ],
    email: [
        {
            required: true,
            message: '请输入邮箱',
            trigger: 'change',
        }
    ],
    checkPass: [
        {
            validator: validatePass2,
            trigger: 'change',
        },
    ],

};
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 14,
    },
};

// const handleFinish = values => {
//     console.log(values, formState);
// };
// const handleFinishFailed = errors => {
//     console.log(errors);
// };
const resetForm = () => {
    formRef.value.resetFields();
};
// const handleValidate = (...args) => {
//     console.log(args);
// };
//发送注册请求
const signupMessage = {
    username: formState.username,
    password: formState.pass,
    number: formState.email,
    code: formState.Code
}
function signup() {
    fetch("http://localhost:3000/uersData", {
        method: "POST",
        headers: { 
            'Content-Type': "application/json" 
        },
        body: JSON.stringify(signupMessage)
    })
    .then(res => res.json())
    .then(data => { cosole.log(data) })
    .catch(err => { console.log(err) })
}
</script>


<style scoped>
input{
    margin-left: 3px;
    width: 300px;
}
 .signup-form {
  width: 400px;
  height: 420px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

}
.signup {
    width: 100%;
    min-width: 400px;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>