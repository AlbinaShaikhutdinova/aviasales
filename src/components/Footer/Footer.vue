<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <img class="footer-logo" src="../../assets/logo_horizontal_white.svg" alt="logo" />
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
<style lang="scss">
.footer {
  position: absolute;
  bottom: 0;
  background-color: $primary-color;
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  .footer__wrapper {
    width: 100%;
    padding: 0 5rem;
    margin: 1rem 0;
    max-width: $max-page-width;
    display: flex;
    justify-content: flex-start;
    .footer-logo {
      width: 12rem;
    }
  }
}
</style>
