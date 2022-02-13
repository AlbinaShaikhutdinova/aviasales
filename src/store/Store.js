import { createStore } from 'vuex';
import { fetchFlights, fetchTickets } from '../service/api';

export const store = createStore({
  state() {
    return {
      flights: [],
      tickets: [],
    };
  },
  mutations: {
    updateFlights(state, payload) {
      state.flights = payload;
    },
    loadTickets(state, payload) {
      state.tickets = payload;
    },
  },
  actions: {
    async getFlights({ commit }, flightData) {
      commit('updateFlights', await fetchFlights(flightData));
    },
    async getTickets({ commit }, id) {
      commit('loadTickets', await fetchTickets(id));
    },
  },
});
