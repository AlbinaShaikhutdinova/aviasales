<template>
  <div class="custom-plus-minus-input">
    <span>{{ name }}</span>
    <button class="round-button" @click="substractValue">-</button>
    <input readonly class="readonly-input" type="text" v-model="localValue" />
    <button class="round-button" @click="addValue">+</button>
  </div>
</template>
<script>
export default {
  name: 'PlusMinusInput',
  props: ['value', 'name', 'min', 'max'],
  data() {
    return {
      localValue: this.value,
    };
  },
  methods: {
    changeValue() {
      this.$emit('valueChanged', this.localValue);
    },
    addValue() {
      this.localValue < this.max ? this.localValue++ : this.localValue;
      this.changeValue();
    },
    substractValue() {
      this.localValue > this.min ? this.localValue-- : this.localValue;
      this.changeValue();
    },
  },
};
</script>

<style lang="scss">
.custom-plus-minus-input {
  height: 100%;
  background-color: white;
  font-size: 1.5rem;
  color: black;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 1.5rem;
    margin-right: 0.2rem;
  }
  input {
    width: 2rem;
    border: none;
    margin: 0;
    padding: 0;
    margin-left: 0.8rem;
    font-size: 1.5rem;
  }
  .round-button {
    font-size: 1.5rem;
    color: white;
    background-color: $primary-color;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    border: 1px solid white;
  }
}
</style>
