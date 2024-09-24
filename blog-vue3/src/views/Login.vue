<template>
  <div class="login">
    <a-form
    :model="formState"
    name="normal_login"
    class="login-form"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <h1><RouterLink to="/login">登录</RouterLink> | <RouterLink to="/signup">现在注册</RouterLink></h1>
    <div class="form-item">
    <a-form-item
      label="账号"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item
      label="密码"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item>
      <a-form-item name="remember" no-style>
        <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
      </a-form-item>
      <a class="login-form-forgot" href="">忘记密码</a>
    </a-form-item>

    <a-form-item class="butt">
      <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button" size="large" @click="login">
        登录
      </a-button>
      <div  style="margin-top: 10px">
        <RouterLink to="/signup">现在注册</RouterLink>
      </div>
    </a-form-item>
  </div>
  </a-form>
  </div>
  
</template>

<script setup>
import { reactive } from 'vue';
const formState = reactive({
  username: '',
  password: '',
  remember: true,
});
const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
function login() {
  fetch('http://localhost:3000/uersData', {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formState)
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
  }
</script>

<style scoped>
.login{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
 .login-form {
  min-width: 400px;
  height: 420px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
 .login-form-forgot {
  float: right;
}
 .login-form-button {
  width: 100%;
}
.form-item{
  margin: 30px 0;
}
.butt {
  margin-top: 20px;
}
</style>