<template>
  <div id="app">
    <p class="green">yellowgreen</p>
    <Header></Header>
    <!-- <router-view/> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: 'app',
  data() {
    return {
    };
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped lang="less">

</style>
