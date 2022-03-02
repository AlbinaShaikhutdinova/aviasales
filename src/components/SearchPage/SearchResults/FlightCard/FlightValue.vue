<template>
  <div class="data-card">
    <div class="data-card__name">{{ name }}</div>
    <div class="data-card__values">
      {{ value }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'FlightValue',
  props: ['name', 'value'],
};
</script>

<style lang="scss">
@media (max-width: 1024px) {
  .data-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 12rem;
    &__name {
      font-size: 1.2rem;
      color: $muted-font-color;
      font-weight: 600;
    }
    &__values {
      font-size: 1.4rem;
    }
  }
}
</style>
