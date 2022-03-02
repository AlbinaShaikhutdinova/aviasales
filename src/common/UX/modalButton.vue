<template>
  <div class="modal-icon shadow">
    <StandardButton @click="openModal" :className="'secondary-button'" :title="'Фильтры'" />
  </div>
  <div class="modal" :class="modalState">
    <div class="modal-content">
      <StandardButton @click="() => (this.modalState = 'closed')" :className="'secondary-button'" :title="'Применить'" />
      <Filter class="modal-filter" />
    </div>
  </div>
</template>
<script>
import StandardButton from '../UI/button.vue';
import Filter from '../../components/SearchPage/Filter.vue';
export default {
  name: 'ModalButton',
  components: { StandardButton, Filter },
  data() {
    return {
      modalState: 'closed',
    };
  },
  mounted: function () {
    window.addEventListener('click', (e) => this.closeModal(e));
  },
  beforeUnmount: function () {
    window.removeEventListener('click', (e) => this.closeModal(e));
  },
  methods: {
    openModal() {
      this.modalState = 'open';
    },
    closeModal(e) {
      if (e.target.classList.contains('modal')) {
        this.modalState = 'closed';
      }
    },
  },
};
</script>

<style lang="scss">
.closed {
  display: none;
}
.open {
  display: block;
}
.modal-icon {
  display: none;
}
.modal {
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 2rem;
  width: 70%;
  border-radius: 1rem;
  animation-name: animatetop;
  animation-duration: 0.3s;
}
.close {
  color: #aaa;
  float: right;
  font-size: 2.8rem;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
@keyframes animatetop {
  from {
    bottom: -30rem;
    opacity: 0;
  }
  to {
    bottom: 0;
    opacity: 1;
  }
}
@media (max-width: 1024px) {
  .modal-icon {
    z-index: 2;
    display: block;
    position: absolute;
    bottom: 11rem;
    left: calc(50vw - 5rem);
    outline-color: white;
    border-radius: 1rem;
  }
}
</style>
