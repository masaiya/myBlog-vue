<template>
  <div id="app">
    <BlogHeader></BlogHeader>
    <router-view></router-view>
    <BlogFooter></BlogFooter>
  </div>
</template>

<script>
import BlogHeader from "./components/BlogHeader";
import BlogFooter from "./components/BlogFooter";
export default {
  name: 'app',
  data() {
    return {
    };
  },
  components: {
    BlogHeader,
    BlogFooter
  }
};
</script>

<style scoped lang="less">

</style>
