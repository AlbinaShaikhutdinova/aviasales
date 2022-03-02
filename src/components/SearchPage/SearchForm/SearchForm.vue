<template>
  <div class="search-header">
    <div class="search-header__wrapper">
      <TextInput class="input1" :placeholder="'Откуда'" v-model="flightData.cityOfDeparture" />
      <TextInput class="input2" :placeholder="'Куда'" v-model="flightData.cityOfArrival" />
      <DateInput class="input3" :placeholder="'Когда'" v-model="flightData.date" />
      <DateInput class="input4" :placeholder="'Обратно'" />
      <DropDownMenu class="input5" :title="`${amount} пассажир`">
        <component @valueChanged="changeAmount" :min="1" :max="10" :name="'Взрослый'" :value="1" :is="child_component"></component>
      </DropDownMenu>
      <StandardButton class="search-button" :className="'standard-button'" :title="'Найти билеты'" @click="search" />
    </div>
  </div>
</template>

<script>
import StandardButton from '../../../common/UI/button.vue';
import TextInput from '../../../common/UI/textInput.vue';
import DateInput from '../../../common/UI/dateInput.vue';
import PlusMinusInput from '../../../common/UI/plusNminusInput.vue';
import DropDownMenu from '../../../common/UI/dropdownMenu.vue';
export default {
  name: 'SearchForm',
  components: {
    StandardButton,
    TextInput,
    DateInput,
    PlusMinusInput,
    DropDownMenu,
  },
  data() {
    return {
      flightData: {
        cityOfDeparture: '',
        cityOfArrival: '',
        date: '',
      },
      amount: '1',
      child_component: 'PlusMinusInput',
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

<style scoped lang="scss">
.search-header {
  width: 100%;
  height: fit-content;
  background-color: $primary-color;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-header__wrapper {
  max-width: $max-page-width;
  padding: 2rem 5rem;
  display: flex;
  flex-flow: row wrap;
  gap: 0.3rem;
  & > * {
    height: 6rem;
  }
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
@media (max-width: 768px) {
  .input2 {
    grid-area: to;
  }
  .input3 {
    grid-area: dateTo;
  }
  .input4 {
    grid-area: dateFrom;
  }
  .input5 {
    grid-area: amount;
  }
  .input1 {
    grid-area: from;
  }
  .search-button {
    width: 100%;
    grid-area: btn;
  }
  .search-header__wrapper {
    padding: 1rem;
    gap: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      'from from to to'
      'dateTo dateFrom amount amount'
      'btn btn btn btn';
    & > * {
      width: 100%;
      height: 4rem;
    }
  }
}
@media (max-width: 500px) {
  .search-header__wrapper {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'from from'
      'to to'
      'dateTo dateFrom'
      'amount amount'
      'btn btn';
  }
}
</style>
