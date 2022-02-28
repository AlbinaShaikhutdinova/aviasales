<template>
  <div class="flight" @click="getTickets">
    <h3>{{ plane.name }}</h3>
    <div class="flight-info">
      <div class="departure">
        <div class="departure__city">{{ cityOfDeparture }}</div>
        <div class="departure__date">{{ timeOfDeparture }}</div>
        <div class="departure__time">{{ dateOfDeparture }}</div>
      </div>
      <div class="arrival">
        <div class="arrival__city">{{ cityOfArrival }}</div>
        <!-- <div class="arrival__time">{{ arrivalDate }}</div> -->
        <div class="arrival__date">{{ timeOfArrival }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { router } from '../../../../Router/Router';
export default {
  name: 'FlightCard',
  props: ['cityOfDeparture', 'dateOfDeparture', 'timeOfDeparture', 'cityOfArrival', 'timeOfArrival', 'plane'],
  methods: {
    getTickets() {
      this.$store.dispatch('getTickets', this.plane.id);
      router.push({ path: '/booking' });
    },
  },
};
</script>
<style>
.flight {
  border: 1px solid black;
  border-radius: 1rem;
  cursor: pointer;
  padding: 1rem;
}
.flight-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
