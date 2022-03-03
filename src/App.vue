<template>
  <Header />
  <router-view> </router-view>
  <Footer />
</template>

<script>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
export default {
  name: 'App',
  components: { Header, Footer },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
* {
  font-size: 10px;
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}

button {
  cursor: pointer;
}
.shadow {
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
}
.price-font {
  font-size: 2.3rem;
  font-weight: 700;
}
.time-font {
  font-size: 2.8rem;
}
.muted-font {
  font-size: 1.2rem;
  line-height: 2rem;
  color: $muted-font-color;
}
h4 {
  font-size: 1.4rem;
}
#app {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-bottom: 10rem;
  background: $bg-color;
  font-family: 'Roboto', sans-serif;
}
</style>
