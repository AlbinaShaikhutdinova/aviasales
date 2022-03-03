<template>
  <div class="page">
    <search-form />
    <div class="main">
      <div class="search-page">
        <Filter class="search-page__filter" />
        <search-results />
      </div>
      <ModalButton />
    </div>
  </div>
</template>

<script>
import SearchForm from './SearchForm/SearchForm.vue';
import Filter from './Filter.vue';
import SearchResults from './SearchResults/SearchResults.vue';
import ModalButton from '../../common/UX/modalButton.vue';
export default {
  name: 'SearchPage',
  components: {
    SearchForm,
    Filter,
    SearchResults,
    ModalButton,
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
.modal-icon {
  display: none;
}
@media (max-width: 1024px) {
  .search-page {
    width: 100%;
    justify-content: center;
  }
  .search-page__filter {
    display: none;
  }
  .modal-icon {
    z-index: 2;
    display: block;
    position: absolute;
    bottom: 11rem;
    left: calc(50vw - 5rem);
    outline-color: white;
    border-radius: 1rem;
  }
}
</style>
