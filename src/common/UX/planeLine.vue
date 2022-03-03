<template>
  <div class="custom-planeline">
    <div class="top">
      <div class="plane-icon"></div>
      <div class="additional-info">В пути</div>
      <div class="plane-icon"></div>
    </div>
    <div class="line"></div>
  </div>
</template>
<script>
export default {
  name: 'PlaneLine',
};
</script>

<style lang="scss">
.custom-planeline {
  width: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .top {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .line {
    height: 0.8rem;
    width: 100%;
    background-color: $bg-color;
    border-radius: 0.5rem;
  }
}
</style>
