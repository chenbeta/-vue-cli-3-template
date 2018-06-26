<template>
  <div class="home">
    <div class="home-header">
      <Header/>
    </div>
    <div class="home-content">
      <div class="left-box">
        <left-nav/>
      </div>
      <div class="content-box">
        <router-view />
      </div>
    </div>
    <div class="home-footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from 'com/Footer.vue';
import Header from 'com/Header.vue';
import LeftNav from 'com/LeftNav.vue';

export default {
  components: {
    Footer,
    Header,
    LeftNav
  }
};
</script>
