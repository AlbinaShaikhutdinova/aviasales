import { createStore } from 'vuex';
import { fetchFlights, fetchTickets, postBookingData } from '../service/api';

export const store = createStore({
  state() {
    return {
      flights: [
        {
          city_of_departure: { name: 'Уфа' },
          departure_time: '12:00',
          departure_date: '02.03.2022',
          city_of_arrival: { name: 'Самара' },
          plane: { name: 'Airbus 3000' },
          arrival_time: '15:00',
        },
      ],
      tickets: [],
      response: false,
    };
  },
  mutations: {
    updateFlights(state, payload) {
      state.flights = payload;
    },
    loadTickets(state, payload) {
      state.tickets = payload;
    },
    loadBookingData(state, payload) {
      state.response = payload;
    },
  },
  actions: {
    async getFlights({ commit }, flightData) {
      commit('updateFlights', await fetchFlights(flightData));
    },
    async getTickets({ commit }, id) {
      commit('loadTickets', await fetchTickets(id));
    },
    async sendUserBooking({ commit }, data) {
      commit('loadBookingData', await postBookingData(data));
    },
  },
});
