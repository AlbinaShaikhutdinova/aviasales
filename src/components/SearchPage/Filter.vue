<template>
  <aside class="filters">
    <div class="filter-item">
      <input
        type="checkbox"
        id="filter-transfer"
        v-model="isTransfer"
        @change="applyFilter"
      />
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
  border: 1px solid black;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.filter-item {
  display: flex;
  align-items: center;
}
</style>
