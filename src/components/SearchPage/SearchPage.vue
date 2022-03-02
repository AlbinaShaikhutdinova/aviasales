<template>
  <div class="page">
    <search-form />
    <div class="main">
      <div class="search-page">
        <Filter class="search-page__filter" />
        <search-results />
      </div>
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
  padding: 2rem 5rem;
  max-width: $max-page-width;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.search-page {
  display: flex;
  align-items: flex-start;
  gap: 3rem;
}
@media (max-width: 1024px) {
  .search-page {
    width: 100%;
    justify-content: center;
  }
  .search-page__filter {
    display: none;
  }
}
</style>
