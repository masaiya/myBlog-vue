<template>
  <div class="BlogFooter">
    <div class="footer-left">
      <a href="/">
        <img class="logo" src="../assets/img/cnodejs_light.svg" alt="">
      </a>
    </div>
    <div class="footer-right">
      <ul class="list">
        <li class="footer-list">
          <a href="javascript:;">关于我们</a>
        </li>
        <li class="footer-list">
          <a href="javascript:;">联系方式</a>
        </li>
        <li class="footer-list">
          <a href="javascript:;">特别致谢</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogFooter',
  data() {
    return {
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped lang="less">
.BlogFooter {
  height: 40px;
  background-color: rgb(68, 68, 68);
  display: flex;
  .footer-left {
    flex: 1;
    display: flex;
    justify-content: center;
    a {
      display: flex;
      justify-content: center;
      .logo {
        width: 100px;
        vertical-align: middle;
      }
    }
    
  }
  .footer-right {
    flex: 1;
    .list {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      margin: 0 100px 0 0;
      .footer-list {
        line-height: 40px;
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
