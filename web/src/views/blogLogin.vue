<template>
  <div class="blogLogin">
    <h2>登录</h2>
    <form id="login_form" onsubmit="return false;">
      <div class="input-group cell">
        <span class="input-group-addon">邮箱:</span>
        <input type="email" class="form-control" placeholder="请输入邮箱" name="email" v-model="inputUser.email"> 
      </div>
      <br>
      <br>
      <div class="input-group cell">
        <span class="input-group-addon">密码:</span>
        <input type="password" class="form-control" placeholder="请输入密码" name="password" v-model="inputUser.password">
      </div>
      
      <div class="input-group subBtn">
        <button class="btn btn-success" id="submit" @click="login()">确认</button>
        <a href="/" class="btn btn-danger" id="cancel">取消</a>
      </div>
      <div class="input-group tip">
        <span>没有账号？<a href="/register">点击创建</a></span>
        <span>
            <a href="/">返回首页</a>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'blogLogin',
  data() {
    return {
      inputUser: {}
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {
    login() {
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: {
          email: this.inputUser.email,
          password: this.inputUser.password
        },
        datatype: 'json',
        header: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        var code = res.data.err_code;
        if (code === 0) {
          window.alert('登录成功，即将跳转！');
          window.location.href = '/';
        } else if (code === 1) {
          window.alert('邮箱或者密码错误！');
        } else if (code === 500) {
          window.alert('服务器繁忙，请稍后再试！');
        }
      }).catch(err => {
        console.log(err);
      })
    }
  },
};
</script>

<style scoped lang="less">
.blogLogin {
  width: 500px;
  margin: 0 auto;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  h2 {
    text-align: center;
    margin: 10px 0;
  }
  form {
    padding: 20px;
  }
  .cell>input {
    border: none;
    outline: none;
    border-bottom: 1px solid #666;
    margin-left: 30px;
    text-indent: 5px;
    flex: 1;
  }
  .cell>span {
    text-align: right;
    width: 80px;
  }
  .subBtn {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    margin-top: 30px;
  }
  .btn-success {
    border: none;
    padding: 10px 30px;
    background: #2980b9;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
  }
  .btn-danger {
    text-decoration: none;
    color: #000;
    background: #fff;
    border: 1px solid #999;
    padding: 7px 30px;
    border-radius: 10px;
  }
  .btn-success:hover,
  .btn-danger:hover {
    opacity: .8;
  }
  .tip {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 45px;
  }
  .tip>span:first-child a {
    color: #3498db;
  }
  .tip>span:first-child a:hover {
    text-decoration: underline;
  }
  .tip>span a {
    color: #000;
    text-decoration: none;
  }
  .tip>span:last-child a:hover {
    color: #3498db;
    text-decoration: underline;
  }
}
</style>