<template>
  <div>
    <BlogHeader></BlogHeader>
    <div class="main">
      <ul class="home">
        <li class="media" v-for="(item, index) in topics" :key="index">
          <div class="media-left">
            <a href="#">
              <img width="40" height="40" class="media-object">
            </a>
          </div>
          <div class="media-body">
            <p><span class="user">{{ item.nickname }}</span> 发表了话题：<a href="/topics/123">{{ item.topic }} </a></p>
            <p>内容： {{ item.content}} </p>
            <p>• 2 人关注 • 1 个回复 • 187 次浏览 • 2020-11-17 10:54</p>
          </div>
        </li>
      </ul>
    </div>
    <BlogFooter></BlogFooter>
  </div>
</template>

<script>
import BlogHeader from "../components/BlogHeader";
import BlogFooter from "../components/BlogFooter";
export default {
  name: 'home',
  data() {
    return {
      topics: []
    };
  },
  computed:{
  },
  components: {
    BlogHeader,
    BlogFooter
  },
  methods: {
    getTopicList() {
      this.$axios({
        method: 'get',
        url: 'http://localhost:3000/',
        datatype: 'json',
        headers: {
          'Content-Type':'application/json'
        }
      }).then(res => {
        this.topics = res.data;
        console.log(this.topics);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    this.getTopicList();
  }
};
</script>

<style scoped lang="less">
.main {
  height: calc(100vh - 90px);
  overflow: auto;
  margin: auto auto;
  width: 100%;
}
.home {
  margin: 15px auto;
  width: 80%;
  height: calc(100vh - 90px);
}
.media {
  background-color: #fff;
  border-radius: 8px;
  padding: 10px 15px;
  margin: 5px 0;
  display: flex;
  justify-content: flex-start;
}
.media-left {
  line-height: 75px;
  margin-right: 30px;
  img {
    margin-top: 60px;
  }
}
.media-body {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.user {
  color: #000;
  font-weight: 700;
}
</style>
