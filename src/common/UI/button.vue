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
  white-space: nowrap;
  font-size: 2rem;
  color: white;
  background-color: $button-color;
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  border: none;
}
</style>
