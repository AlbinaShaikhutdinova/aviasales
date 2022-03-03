<template>
  <input :placeholder="placeholder" type="date" class="date-input" />
</template>
<script>
export default {
  name: 'DateInput',
  props: ['placeholder'],
};
</script>

<style lang="scss">
.date-input {
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
