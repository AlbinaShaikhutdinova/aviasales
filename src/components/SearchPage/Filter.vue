<template>
  <aside class="filters">
    <h3>Пересадки</h3>
    <hr />
    <div class="filter-item">
      <input type="checkbox" id="filter-transfer" v-model="isTransfer" @change="applyFilter" />
      <label for="filter-transfer">Пересадка</label>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Filter',
  data() {
    return {
      isTransfer: false,
    };
  },
  methods: {
    applyFilter() {
      console.log(this.isTransfer);
    },
  },
};
</script>

<style>
.filters {
  width: 15%;
  min-width: 15rem;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
}
.filter-item {
  display: flex;
  align-items: center;
}
</style>
