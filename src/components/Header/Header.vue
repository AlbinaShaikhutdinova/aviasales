<template>
  <header class="header">
    <div class="header__wrapper">
      <img class="header-logo" src="../../assets/logo_horizontal_white.svg" alt="logo" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>
<style lang="scss">
.header {
  background-color: $primary-color;
  width: 100%;
  display: flex;
  justify-content: center;
  .header__wrapper {
    width: 100%;
    padding: 0 5rem;
    margin: 1rem 0;
    max-width: $max-page-width;
    display: flex;
    justify-content: flex-start;
    .header-logo {
      width: 12rem;
    }
  }
}
</style>
