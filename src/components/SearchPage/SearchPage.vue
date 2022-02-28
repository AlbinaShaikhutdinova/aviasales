<template>
  <div class="page">
    <search-form />
    <main>
      <Filter />
      <search-results />
    </main>
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

<style>
main {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
</style>
