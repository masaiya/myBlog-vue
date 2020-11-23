<template>
  <div class="blogRegister">
    <h2>注册信息</h2>
    <!-- 表单具有默认的提交行为，默认是同步的，同步表单提交，浏览器会锁死等待服务端的响应结果 
          同步表单提交，浏览器会默认把客户端响应的内容渲染页面-->
    <form id="register_form" onsubmit="return false;">
      <div class="input-group cell">
        <span class="input-group-addon">邮箱:</span>
        <input type="email" class="form-control" placeholder="请输入邮箱" name="email" v-model="user.email">
      </div>
      <br>
      <br>
      <div class="input-group cell">
        <span class="input-group-addon">密码:</span>
        <input type="password" autocomplete="off" class="form-control" placeholder="请输入密码" name="password" v-model="user.password">
      </div>

      <div class="input-group subBtn">
        <button class="btn btn-success" id="submit" @click="register()">确认</button>
        <button class="btn btn-danger" id="cancel">取消</button>
      </div>
      <div class="input-group tip">
        <span>已有账号？
          <a href="/login">点击登录</a>
        </span>
        <span>
          <a href="/">返回首页</a>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'blogRegister',
  data() {
    return {
      user: {}
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {
    register() {
      this.$axios({
        method: 'post',
        url: 'http://127.0.0.1:3000/register',
        data: {
          email: this.user.email,
          password: this.user.password
        },
        datatype: 'json',
        // data: this.user,
        headers: {
          // 'Content-Type':'application/x-www-form-urlencoded'
          'Content-Type':'application/json'
        }
      }).then(res => {
        console.log("res:::");
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
  }
};
</script>

<style scoped lang="less">
.blogRegister {
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
