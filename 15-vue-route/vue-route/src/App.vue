<template>
  <div id="app">
    <p>App 组件</p>
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->

    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <button @click="homeClick">跳转首页</button>
    <br />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {
    homeClick() {
      //this.$router.push('/home').catch(err => { });
      this.$router.replace('/home').catch(err => { });
      console.log("home");
    }
  },
}
</script>
<style>
.active {
  color: red;
}
</style>
