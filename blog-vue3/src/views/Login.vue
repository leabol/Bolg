<template>
  <div class="login-form">

    <form class="form"  @submit.prevent="handleLogin">
      <div class="title">
        <span>
          登录
        </span>
        <RouterLink to="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" stroke-width="0" fill="none" stroke="currentColor"
          class="cross-icon">
          <path fill="currentColor"
            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
            clip-rule="evenodd" fill-rule="evenodd"></path>
        </svg>
      </RouterLink>
      </div>
      <div class="flex-column">
        <label>邮箱 </label>
      </div>
      <div class="inputForm">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" height="20">
          <g data-name="Layer 3" id="Layer_3">
            <path
              d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z">
            </path>
          </g>
        </svg>
        <input placeholder="请输入邮箱" class="input" type="text" v-model="formState.username">
      </div>

      <div class="flex-column">
        <label>密码 </label>
      </div>
      <div class="inputForm">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="-64 0 512 512" height="20">
          <path
            d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0">
          </path>
          <path
            d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0">
          </path>
        </svg>
        <input placeholder="请输入密码" class="input" type="password" v-model="formState.username">
      </div>

      <div class="flex-row">
        <div></div>
        <RouterLink to="/forgotPassword"><span class="span">忘记密码</span></RouterLink>
      </div>
      <button class="button-submit" @click="login">登 录</button>
      <p class="p">还没有账号? <span class="span"><RouterLink to="/signup">点击注册</RouterLink></span>

      </p>
    </form>
  </div>
</template>


<script setup>
import { RouterLink} from 'vue-router';
import { reactive } from 'vue';



const formState = reactive({
  username: '',
  password: '',
});


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
/* From Uiverse.io by JohnnyCSilva */
a {
  text-decoration: none; 
  color: inherit; 
  cursor: pointer; 
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  padding: 30px;
  width: 450px;
  border: 1px #4e4e4e solid;
  border-radius: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

::placeholder {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.form button {
  align-self: flex-end;
}
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.flex-column>label {
  color: #151717;
  font-weight: 600;
}

.inputForm {
  border: 1.5px solid #ecedec;
  border-radius: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  transition: 0.2s ease-in-out;
}

.input {
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 100%;
}

.input:focus {
  outline: none;
}

.inputForm:focus-within {
  border: 1.5px solid #2d79f3;
}

.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}

.flex-row>div>label {
  font-size: 14px;
  color: black;
  font-weight: 400;
}

.span {
  font-size: 14px;
  margin-left: 5px;
  color: #2d79f3;
  font-weight: 500;
  cursor: pointer;
}

.button-submit {
  margin: 20px 0 10px 0;
  background-color: #151717;
  border: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  cursor: pointer;
}
.button-submit:hover {
  background-color: rgb(69, 69, 69);
}

.p {
  text-align: center;
  color: black;
  font-size: 14px;
  margin: 5px 0;
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
