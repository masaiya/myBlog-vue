<template>
  <div>
    <BlogHeader></BlogHeader>
    <ul class="home">
      <li class="media">
        <div class="media-left">
          <a href="#">
            <img width="40" height="40" class="media-object" src="" alt="">
          </a>
        </div>
        <div class="media-body">
          <p><span class="user">小明</span>  发表了话题：<a href="/topics/123"> node.js </a></p>
          <p>内容： Nodejs框架是基于V8的引擎，是目前速度最快的 Javascript引擎。 </p>
          <p>• 2 人关注 • 1 个回复 • 187 次浏览 • 2020-11-17 10:54</p>
        </div>
      </li>
    </ul>
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
    };
  },
  computed:{
  },
  watch:{
  },
  components: {
    BlogHeader,
    BlogFooter
  }
};
</script>

<style scoped>

</style>
