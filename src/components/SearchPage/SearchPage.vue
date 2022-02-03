<template>
  <div class="page">
    <search-form @submit="submitHandle" />
    <main>
      <Filter />
      <search-results :flights="result" :userDate="userDate" />
    </main>
  </div>
</template>

<script>
import SearchForm from './SearchForm/SearchForm.vue';
import Filter from './Filter.vue';
import SearchResults from './SearchResults/SearchResults.vue';
export default {
  name: 'SearchPage',
  components: {
    SearchForm,
    Filter,
    SearchResults,
  },
  data() {
    return {
      flights: [
        {
          id: 1,
          from: 'Moscow',
          to: 'Ufa',
          date: '02.20.2022',
          endDate: '05.25.2022',
          ticketsAvailable: 3,
        },
        {
          id: 2,
          from: 'St Petersburg',
          to: 'Ufa',
          date: '02.10.2022',
          endDate: '05.25.2022',
          ticketsAvailable: 1,
        },
        {
          id: 3,
          from: 'Moscow',
          to: 'St Petersburg',
          date: '03.08.2022',
          endDate: '05.25.2022',
          ticketsAvailable: 30,
        },
        {
          id: 4,
          from: 'Moscow',
          to: 'St Petersburg',
          date: '01.08.2022',
          endDate: '04.25.2022',
          ticketsAvailable: 10,
        },
        {
          id: 5,
          from: 'Samara',
          to: 'St Petersburg',
          date: '03.28.2022',
          endDate: '05.25.2022',
          ticketsAvailable: 5,
        },
      ],
      result: [],
      userQuery: {},
      userDate: '',
    };
  },
  methods: {
    submitHandle(cityFrom, cityTo, date, people) {
      this.userDate = date;
      this.result = this.flights.filter((flight) => {
        return (
          flight.from === cityFrom &&
          flight.to === cityTo &&
          Date.parse(date) > Date.parse(flight.date) &&
          Date.parse(date) < Date.parse(flight.endDate) &&
          flight.ticketsAvailable > people
        );
      });
      console.log(this.userDate);
    },
  },
  computed: {},
};
</script>

<style>
main {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
</style>
