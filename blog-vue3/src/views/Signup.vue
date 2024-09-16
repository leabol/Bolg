<template>
    <form class="login">
      <h1>注册</h1>
      <fieldset>
        <legend>账号</legend>
        <input type="text" :class="{ invalid: isInvalid1}" :placeholder=" A_username " v-model="username" required/>
      </fieldset>
      <fieldset>
        <legend>密码</legend>
        <input type="text" :class="{ invalid: isInvalid2}" :placeholder="A_password" v-model="password" required/>
      </fieldset>
      <fieldset>
        <legend>密码</legend>
        <input type="text" :class="{ invalid: isInvalid2}" placeholder="请再输入一次密码" v-model="password_confirm" required/>
      </fieldset>
      <fieldset>
        <legend>邮箱</legend>
        <input type="text" :class="{ invalid: isInvalid2}" :placeholder="A_mail" v-model="email" required/>
      </fieldset>

      <div class="but">
        <button class="signup" @click.prevent="tosignup">注册</button>
        <button class="signup" @click.prevent="backlogin">账号登录</button>
      </div>
    </form>
  </template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      password_confirm: '',
      email: '',
      A_username: '请输入账号',
      A_password: '请输入密码',
      A_mail: '请输入邮箱',
      isInvalid1: false,
      isInvalid2: false
    }
  },
  methods: {
    validInput(){
      this.isInvalid1 = this.username.trim() === '';
      this.isInvalid2 = this.password.trim() === '';
    },
    tosignup() {
      if (this.username === '')  {
        this.isInvalid1 = true;
        this.A_username = '用户名不能为空'
        return;
      }else if (this.password === '' || this.password_confirm === '') {
        this.isInvalid2 = true;
        this.A_password = '密码不能为空';
        return;
      }else if(this.password !== this.password_confirm){
        this.isInvalid2 = true;
        this.password = this.password_confirm = '';
        this.A_password = '两次密码不一致';
        return;
      }else if(this.email === ''){
        this.isInvalid2 = true;
        this.A_mail = '邮箱不能为空';
        return;
      }

      const loginData = {
        username: this.username,
        password: this.password,
        email: this.email
      };

      fetch('http://localhost:3000/uersData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      })
      .then(response => response.json())
      .then(data => {
        console.log('注册成功:', data);
        this.username = '';
        this.password = '';
        this.password_confirm = '';
        this.email = '';
        this.isInvalid1 = false;
        this.isInvalid2 = false;
      })
      .catch(error => {
        console.error('注册失败:', error);
        this.username = '';
        this.password = '';
        this.password_confirm = '';
        this.email = '';
      });
    },
     backlogin(e) {
      e.preventDefault();
      this.$router.push('/login');
    }  
  },
}
</script>


<style>
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
input.invalid::placeholder {
  color: rgb(220, 0, 0);
}
</style>
