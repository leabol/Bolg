<template>
  <div class="login">
    <a-form
    :model="formState"
    name="normal_login"
    class="login-form"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
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