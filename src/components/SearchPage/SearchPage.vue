<template>
  <div class="page">
    <search-form />
    <div class="main">
      <Filter />
      <search-results />
    </div>
  </div>
</template>

<script>
import SearchForm from './SearchForm/SearchForm.vue';
import Filter from './Filter.vue';
import SearchResults from './SearchResults/SearchResults.vue';
export default {
  name: 'SearchPage',
  components: {
    SearchForm,
    Filter,
    SearchResults,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss">
.main {
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  padding: 2rem 5rem;
}
</style>
