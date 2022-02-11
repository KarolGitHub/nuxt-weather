<template>
  <v-toolbar dense floating width="300">
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
export default {
  data: () => ({
    search: ''
  }),

  methods: {
    searchQueryHandler() {
      this.$emit('searchQueryHandler', this.search);
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
