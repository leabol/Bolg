<template>
  <form class="login">
    <h1>请登录账号</h1>
    <fieldset>
      <legend>账号</legend>
      <input type="text" :class="{ invalid: isInvalid1}" :placeholder="A_username" v-model="username" required/>
    </fieldset>
    <fieldset>
      <legend>密码</legend>
      <input type="text" :class="{ invalid: isInvalid2}" :placeholder="A_password" v-model="password" required/>
    </fieldset>
    <div class="but">
      <button class="signup" @click="tosignup">注册</button>
      <button @click.prevent="tologin">登录</button>
    </div>

  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      A_username: '请输入账号',
      A_password: '请输入密码',
      isInvalid1: false,
      isInvalid2: false
    }
  },
  methods: {
    validInput(){
      this.isInvalid1 = this.username.trim() === '';
      this.isInvalid2 = this.password.trim() === '';
    },
    tologin() {
      if (this.username === '')  {
        this.isInvalid1 = true;
        this.A_username = '用户名不能为空'
        return;
      }else if (this.password === '') {
        this.isInvalid2 = true;
        this.A_password = '密码不能为空';
        return;
      }

      const loginData = {
        username: this.username,
        password: this.password
      };

      fetch('http://localhost:3000/uersData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(loginData)
      })
      .then(response => response.json())
      .then(data => {
        console.log('登录成功:', data);
        this.username = '';
        this.password = '';
        this.isInvalid1 = false;
        this.isInvalid2 = false;
        console.log(data.msg);
        this.$router.push('/about');
      })
      .catch(error => {
        console.error('登录失败:', error);
        this.username = '';
        this.password = '';
        this.isInvalid1 = true;
        this.isInvalid2 = true;
        this.A_username = '账号或密码错误';
      });
    },
    tosignup(e) {
      e.preventDefault();
      this.$router.push('/signup');
    }
    
  },
}
</script>

<style>
.login {
  width: 500px;
}

h1 {
  font-weight: 500;
  color: #00BD7E;
  margin-bottom: 10px;
}

fieldset {
  width: 500px;
  height: 80px;
}

input {
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  font-size: 20px;
  /* 取消选中框 */
  outline: none;
  /* 光标颜色 */
  caret-color: #00BD7E;
  color: white;
  padding: 20px;
}

.but {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

button {
  width: 240px;
  height: 50px;
  background-color: #00BD7E;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 20px;
}
button:hover {
  cursor: pointer;
  background-color: #01cd89;
  transition: all 0.3s ease-in-out;
}
.signup {
  background-color: #ffffff;
  color: black;
}
.signup:hover {
  cursor: pointer;
  background-color: #dfdfdf;
  transition: all 0.3s ease-in-out;
}

input.invalid::placeholder {
  color: rgb(220, 0, 0);
}
</style>
