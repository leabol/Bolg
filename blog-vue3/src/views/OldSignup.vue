<template>
    <div class="signup">

        <a-form class="signup-form" ref="formRef" name="custom-validation" :model="formState" :rules="rules"
            v-bind="layout" @finish="handleFinish" @validate="handleValidate" @finishFailed="handleFinishFailed">
            <div class="title">
                <span>
                    <RouterLink to="/login" style="color: gray;">登录</RouterLink> |
                    <RouterLink to="/signup" style="color: #1677ff;">现在注册</RouterLink>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" stroke-width="0" fill="none"
                    stroke="currentColor" class="cross-icon">
                    <path fill="currentColor"
                        d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                        clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
            </div>

            <a-form-item label="用户名">
                <a-input v-model:value="formState.username" />
            </a-form-item>
            <a-form-item label="密码" name="pass">
                <a-input v-model:value="formState.pass" type="password" />
            </a-form-item>
            <a-form-item label="验证密码" name="checkPass">
                <a-input v-model:value="formState.checkPass" type="password" autocomplete="off" />
            </a-form-item>
            <a-form-item label="邮箱" name="email">
                <a-input v-model:value="formState.email"  />
                <a-button type="primary" @click="sendCode" style="margin-top: 5px">发送验证码</a-button>
            </a-form-item>
            <a-form-item label="验证码">
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
input {
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

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    font-weight: 500;
    margin: 10px
}

.cross-icon {
  width: 20px;
  height: 20px;
  color: #555;
  cursor: pointer;
}

.cross-icon:hover {
    background-color: red;
    color: white;

}
</style>