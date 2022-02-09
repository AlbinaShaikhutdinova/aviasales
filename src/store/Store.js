import { createStore } from 'vuex';

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      request: '',
    };
  },
  mutations: {
    sendRequest(state) {
      state.request;
    },
  },
});
