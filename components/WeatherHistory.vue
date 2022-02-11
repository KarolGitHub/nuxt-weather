<template>
  <v-card v-if="getWeatherHistory.length" class="mx-auto text-left" max-width="400" tile>
    <h1>Search history</h1>

    <v-list two-line>
      <template v-for="(item, index) in getWeatherHistory">
        <v-list-item :key="item.id">
          <v-list-item-content @click="searchFromHistory(item.name)">
            <v-list-item-title>{{ item.name }} ({{ item.country }})</v-list-item-title>

            <v-list-item-subtitle>{{ item.todayDate }}</v-list-item-subtitle>
          </v-list-item-content>

          <i class="fas fa-angle-right"></i>
        </v-list-item>

        <v-divider v-if="index < getWeatherHistory.length - 1" :key="index"></v-divider>
      </template>
    </v-list>
  </v-card>

  <v-card v-else class="mx-auto text-center" max-width="400" tile>
    <h1>No search history yet</h1>
    <v-btn to="/" elevation="2" x-large color="primary">Search</v-btn>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({ getWeatherHistory: 'weather/getHistory' })
  },
  methods: {
    searchFromHistory(name) {
      this.$router.push({ path: '/', query: { name } });
    }
  }
};
</script>

<style scoped lang="scss">
.v-card {
  padding: 16px;
}
h1 {
  padding: 0 10px;
  margin-bottom: 20px;
}
.v-list-item {
  padding: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s ease-in-out, box-shadow 0.3s ease-out;
}
.v-list-item:hover {
  opacity: 0.6;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
</style>
