<template>
  <search-page />
</template>

<script>
import SearchPage from './components/SearchPage/SearchPage.vue';
export default {
  name: 'App',
  components: {
    SearchPage,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
* {
  box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
