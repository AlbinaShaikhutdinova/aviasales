<template>
  <header class="header">
    <div class="header-wrapper">
      <TextInput v-model="flightData.cityOfDeparture" />
      <TextInput v-model="flightData.cityOfArrival" />
      <DateInput v-model="flightData.date" />
      <DateInput />
      <PlusMinusInput @valueChanged="changeAmount" :value="0" />
      <!-- <select class="select">
        <option :value="1"><PlusMinusInput :value="this.amount" /></option>
      </select> -->

      <StandardButton class="search-button" title="Найти билеты" @click="search" />
    </div>
  </header>
</template>

<script>
import StandardButton from '../../../common/UI/button.vue';
import TextInput from '../../../common/UI/textInput.vue';
import DateInput from '../../../common/UI/dateInput.vue';
import PlusMinusInput from '../../../common/UI/plusNminusInput.vue';
export default {
  name: 'SearchForm',
  components: {
    StandardButton,
    TextInput,
    DateInput,
    PlusMinusInput,
  },
  data() {
    return {
      flightData: {
        cityOfDeparture: '',
        cityOfArrival: '',
        date: '',
      },
      amount: '1',
    };
  },
  methods: {
    search() {
      this.$store.dispatch('getFlights', this.flightData);
    },
    changeAmount(newValue) {
      this.amount = newValue;
    },
  },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: fit-content;
  background-color: $primary-color;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
}
.header-wrapper {
  padding: 5rem 2rem;
  display: flex;
  flex-flow: row wrap;
  gap: 0.3rem;
}
.header-wrapper > * {
  height: 6rem;
}
.select {
  font-size: 1.5rem;
  color: black;
  padding: 1rem 2rem;
  border: none;
}

.user-input {
  height: 2rem;
  width: 15rem;
  max-width: 20%;
}
</style>
