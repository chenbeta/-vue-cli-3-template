<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from 'com/HelloWorld.vue';

export default {
  name: 'asd',
  components: {
    HelloWorld
  },
  created() {
    this.http.get('bxg_anon/user/sessionUser');
  }
};
</script>
<style lang="stylus" scoped>
.home
  color red

.test
  font-size 12px
</style>
