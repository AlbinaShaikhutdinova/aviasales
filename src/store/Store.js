import { createStore } from 'vuex';
import { fetchFlights, fetchTickets, postBookingData } from '../service/api';

export const store = createStore({
  state() {
    return {
      flights: [],
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
