<template>
  <aside class="filters">
    <div class="filter-wrapper">
      <h4>Пересадки</h4>
      <div class="filter-item">
        <input type="checkbox" id="filter-transfer" v-model="isTransfer" @change="applyFilter" />
        <label for="filter-transfer">Без пересадок</label>
      </div>
      <div class="filter-item">
        <input type="checkbox" id="filter-transfer" v-model="isTransfer" @change="applyFilter" />
        <label for="filter-transfer">1 пересадка</label>
      </div>
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

<style lang="scss">
.filters {
  width: 15%;
  min-width: 20rem;
  border-radius: 1rem;
  background-color: white;
  .filter-wrapper {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: $muted-font-color;
    h4 {
      width: 100%;
      position: relative;
    }
    h4::after {
      content: '';
      position: absolute;
      top: 2.5rem;
      display: block;
      width: 100%;
      height: 0.2rem;
      background-color: $bg-color;
    }
  }
  .filter-item {
    display: flex;
    align-items: center;
    label {
      font-size: 1.2rem;
    }
  }
}
</style>
