<template>
  <router-view> </router-view>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
* {
  font-size: 10px;
  box-sizing: border-box;
}
button {
  cursor: pointer;
}
.shadow {
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
}
.price-font {
  font-size: 2.8rem;
  font-weight: 700;
}
.time-font {
  font-size: 3rem;
}
.muted-font {
  font-size: 1.6rem;
  color: $muted-font-color;
}
#app {
  width: 100%;
  min-height: 100vh;
  background: $bg-color;
  font-family: 'Roboto', sans-serif;
}
</style>
