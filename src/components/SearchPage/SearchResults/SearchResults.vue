<template>
  <div class="flights">
    <div class="flights-wrapper" v-if="flights.length > 0">
      <div class="list" v-for="flight in flights" :key="flight.id">
        <flight-card
          :cityOfArrival="flight.city_of_arrival.name"
          :cityOfDeparture="flight.city_of_departure.name"
          :dateOfDeparture="flight.departure_date"
          :timeOfDeparture="flight.departure_time"
          :timeOfArrival="flight.arrival_time"
          :plane="flight.plane"
        />
      </div>
    </div>
    <div class="no-flights-wrapper" v-else>Выберите параметры полета</div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import FlightCard from './FlightCard/FlightCard.vue';
export default {
  name: 'SearchResults',
  components: { FlightCard },
  computed: { ...mapState(['flights']) },
};
</script>
<style lang="scss">
.flights {
  width: 100%;
}
.flights-wrapper {
  width: 100%;
  .list {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .flights {
    min-width: 20rem;
  }
}
</style>
