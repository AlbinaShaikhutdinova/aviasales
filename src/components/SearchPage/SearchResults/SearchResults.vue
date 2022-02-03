<template>
  <div class="flights">
    <div class="flights-wrapper" v-if="flights.length > 0">
      <div class="list" v-for="flight in flights" :key="flight.id">
        <div class="list-item">
          <div class="price">{{ flight.id }}</div>
          <div class="general-info">
            {{ userDate }}
            <br />
            {{ flight.from }}-{{ flight.to }}
          </div>
        </div>
      </div>
    </div>
    <div class="no-flights-wrapper" v-else>Выберите параметры полета</div>
  </div>
</template>
<script>
export default {
  name: 'SearchResults',
  props: ['flights', 'userDate'],
  data() {},
};
</script>
<style>
.flights {
  width: 70%;
}
</style>
