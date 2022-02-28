<template>
  <div class="booking">
    <h2>Book a flight</h2>
    <div v-for="count in counter" :key="count" class="booking-page">
      <booking-form @addNewPassenger="updatePassengerList" :ticketId="tickets[count - 1]" />
    </div>
    <button @click="addForm" class="button">добавить пассажира</button>
    <button @click="sendBookRequest" class="button">Забронировать</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BookingForm from './BookingForm/BookingForm.vue';

export default {
  name: 'BookingPage',
  components: { BookingForm },
  computed: { ...mapState(['tickets']) },
  data() {
    return { counter: 1, passengers: [] };
  },
  methods: {
    addForm() {
      this.counter++;
    },
    sendBookRequest() {
      this.$store.dispatch('sendUserBooking', this.passengers);
    },
    updatePassengerList(newPassenger) {
      this.passengers.push(newPassenger);
    },
  },
};
</script>
<style>
.booking-page {
  padding: 2rem 4rem;
}
</style>
