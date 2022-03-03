<template>
  <button :class="this.className">{{ this.title }}</button>
</template>
<script>
export default {
  name: 'StandardButton',
  props: ['title', 'className'],
};
</script>

<style lang="scss">
.standard-button {
  white-space: nowrap;
  font-size: 2rem;
  color: white;
  background-color: $button-color;
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  border: none;
}
.secondary-button {
  white-space: nowrap;
  font-size: 1.6rem;
  color: white;
  background-color: $primary-color;
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  border: none;
}
</style>
