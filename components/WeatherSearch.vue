<template>
  <v-toolbar dense width="300">
    <v-text-field
      hide-details
      single-line
      placeholder="Search City"
      prepend-icon="mdi-magnify"
      v-model.trim="search"
      @keydown.enter="searchQueryHandler"
    />
  </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    search: ''
  }),

  methods: {
    ...mapActions({ fetchWeatherData: 'weather/fetchData' }),
    /** Search confirmation Event handler. Search query passed as argument*/
    searchQueryHandler() {
      this.fetchWeatherData({ search: this.search, isSearched: true });
      this.search = '';
    }
  }
};
</script>

<style scoped lang="scss">
.v-toolbar {
  border-radius: 25px;
  margin-bottom: 20px;
}
</style>
