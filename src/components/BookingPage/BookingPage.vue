<template>
  <div class="main">
    <div class="flight-data"><h2>Book a flight</h2></div>
    <div class="booking-flight">
      <div class="booking-forms__container">
        <div v-for="count in counter" :key="count" class="booking-form">
          <h4>Заполните данные пассажира</h4>
          <booking-form @addNewPassenger="updatePassengerList" :ticketId="tickets[count - 1]" />
        </div>
      </div>
      <StandardButton :className="'secondary-button'" :title="'Добавить пассажира'" @click="addForm" />
      <div class="container">
        <h4>Итоговая стоимость: 23000 Р</h4>
        <StandardButton :className="'secondary-button'" :title="'Забронировать'" @click="sendBookRequest" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BookingForm from './BookingForm/BookingForm.vue';
import StandardButton from '../../common/UI/button.vue';
export default {
  name: 'BookingPage',
  components: { BookingForm, StandardButton },
  computed: { ...mapState(['tickets', 'flight']) },
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
<style lang="scss">
.booking-flight {
  width: 100%;

  .container {
    min-width: 50rem;
    margin-top: 3rem;
    background-color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    border-radius: 1rem;
  }
}
.booking-forms__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.booking-form {
  padding: 2rem 4rem;
  background-color: white;
  border-radius: 1rem;
  margin: 2rem 0;
  width: 60%;
  min-width: 70rem;
}
</style>
