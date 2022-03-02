<template>
  <div class="flight-card" @click="getTickets">
    <div class="flight-card_mobile-view">
      <div class="mobile-view__top">
        <div class="price-font">3500 P</div>
        <h4>{{ plane.name }}</h4>
      </div>
      <div class="mobile-view__bottom">
        <FlightValue :name="'Время'" :value="`${timeOfDeparture} - ${timeOfArrival}`" />
        <FlightValue :name="'Время в пути'" :value="`${timeOfDeparture - timeOfArrival}`" />
        <FlightValue :name="'Пересадки'" :value="`Прямой`" />
      </div>
    </div>
    <div class="flight-card__data minimum">
      <div class="price-font">3500 P</div>
      <StandardButton :className="'standard-button'" :title="'Выбрать билет'" />
    </div>
    <div class="flight-card__data">
      <h3>{{ plane.name }}</h3>
      <div class="general">
        <div class="departure">
          <div class="departure__time time-font">{{ timeOfDeparture }}</div>
          <div class="departure__city muted-font">{{ cityOfDeparture }}</div>
          <div class="departure__date muted-font">{{ dateOfDeparture }}</div>
        </div>
        <PlaneLine />
        <div class="arrival">
          <div class="arrival__time time-font">{{ timeOfArrival }}</div>
          <div class="arrival__city muted-font">{{ cityOfArrival }}</div>
          <div class="arrival__date muted-font">{{ dateOfDeparture }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { router } from '../../../../Router/Router';
import StandardButton from '../../../../common/UI/button.vue';
import PlaneLine from '../../../../common/UX/planeLine.vue';
import FlightValue from './FlightValue.vue';
export default {
  name: 'FlightCard',
  components: {
    StandardButton,
    PlaneLine,
    FlightValue,
  },
  props: ['cityOfDeparture', 'dateOfDeparture', 'timeOfDeparture', 'cityOfArrival', 'timeOfArrival', 'plane'],
  methods: {
    getTickets() {
      this.$store.dispatch('getTickets', this.plane.id);
      router.push({ path: '/booking' });
    },
  },
};
</script>
<style lang="scss">
.flight-card {
  background-color: white;
  border-radius: 1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  display: flex;
  gap: 4rem;
  height: 20rem;
  width: 70rem;
  margin: 0 auto;
}
.flight-card_mobile-view {
  display: none;
}
.flight-card__data {
  width: 100%;
  > * {
    font-size: 1.5rem;
  }

  &.minimum {
    margin-top: 2rem;
    width: fit-content;
    font-size: 1.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }
  &.minimum::after {
    content: '';
    display: block;
    position: absolute;
    top: -3rem;
    left: calc(100% + 2rem);
    height: calc(100% + 4rem);
    width: 0.2rem;
    background-color: $bg-color;
  }
  .general {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .departure {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .arrival {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
}
@media (max-width: 768px) {
  .flight-card {
    height: 15rem;
    width: 100%;
    &__data,
    &__data.minimum {
      display: none;
    }
    &_mobile-view {
      flex-direction: column;
      gap: 1rem;
      height: 100%;
      display: flex;
      width: 100%;
      justify-content: space-evenly;
    }
    .mobile-view {
      &__top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        h4 {
          margin: 0;
        }
      }
      &__bottom {
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
      }
    }
  }
}
</style>
