<template>
  <button class="button">{{ this.title }}</button>
</template>
<script>
export default {
  name: 'StandardButton',
  props: ['title'],
};
</script>

<style lang="scss">
.button {
  color: white;
  background-color: $button-color;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: none;
}
</style>
