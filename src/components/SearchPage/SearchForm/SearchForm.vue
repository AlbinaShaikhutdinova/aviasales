<template>
  <header class="header">
    <input class="user-input" type="text" v-model="cityFrom" />
    <input class="user-input" type="text" v-model="cityTo" />
    <input class="user-input" type="date" v-model="date" />
    <input class="user-input" type="date" />

    <div class="user-input ticket-counter">
      <button @click="amount > 0 ? amount-- : amount">-</button>
      <input type="text" v-model="amount" />
      <button @click="amount++">+</button>
    </div>

    <button class="button" @click="search">Найти</button>
  </header>
</template>

<script>
export default {
  name: 'SearchForm',
  data() {
    return {
      cityFrom: '',
      cityTo: '',
      date: '',
      amount: '1',
    };
  },
  methods: {
    search() {
      this.$emit(
        'submit',
        this.cityFrom,
        this.cityTo,
        this.date,
        Number(this.amount)
      );
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  padding: 2rem 1rem;
  background-color: rgb(81, 81, 241);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
.user-input {
  height: 2rem;
  width: 15rem;
  max-width: 20%;
}
.button {
  height: 2rem;
  background-color: rgb(255, 173, 20);
  color: white;
  border: none;
}
</style>
