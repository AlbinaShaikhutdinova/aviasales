<template>
  <input :placeholder="placeholder" type="text" class="text-input" />
</template>
<script>
export default {
  name: 'TextInput',
  props: ['placeholder'],
};
</script>

<style lang="scss">
.text-input {
  cursor: auto;
  height: 100%;
  font-size: 1.5rem;
  color: black;
  padding: 1rem 2rem;
  border: none;
  &:focus {
    outline-color: $button-color;
  }
}
</style>
