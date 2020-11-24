<template>
  <div class="BlogHeader">
    <div class="header-left">
      <a href="/">
        <img class="logo" src="../assets/img/cnodejs_light.svg" alt="">
      </a>
    </div>
    <div class="header-right">
      <ul v-if="user" class="list">
        <li class="navbar-list">
          <a href="/">首页</a>
        </li>
        <li class="navbar-list">
          <a href="/publish">发表话题</a>
        </li>
        <li class="navbar-list">
          <a href="/userInfo">个人资料</a>
        </li>
      </ul>
      <ul v-else class="list">
        <li class="navbar-list">
          <a href="/login">登录</a>
        </li>
        <li class="navbar-list">
          <a href="/register">注册</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogHeader',
  data() {
    return {
      user: null
    };
  },
  computed:{
  },
  watch:{
  }
};
</script>

<style scoped lang="less">
.BlogHeader {
  height: 50px;
  background-color: rgb(68, 68, 68);
  width: 100%;
  display: flex;
  color: #ccc;
  font-size: 20px;
  .header-left {
    line-height: 50px;
    flex: 2;
    display: flex;
    justify-content: center;
    a {
      display: flex;
      justify-content: center;
      .logo {
        width: 140px;
        line-height: 50px;
      }
    }
  }
  .header-right {
    flex: 3;
    .list {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      margin: 0 80px 0 0;
      .navbar-list {
        line-height: 50px;
        margin: 0 10px;
        a {
          color: #ccc;
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>

