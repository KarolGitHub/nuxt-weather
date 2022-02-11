<template>
  <div>
    <h1>Weather today</h1>
    <weather-search />
    <weather-card />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import WeatherCard from '../components/WeatherCard';
import WeatherSearch from '../components/WeatherSearch';

export default {
  transition: 'default',
  components: { WeatherSearch, WeatherCard },
  methods: {
    ...mapActions({ fetchWeatherData: 'weather/fetchData' })
  },
  created() {
    /** Initial API call. Passed value depends on whether City name is within URL query */
    this.fetchWeatherData({ search: this.$route.query.name ?? 'rzeszow', isSearched: false });
  }
};
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
  margin-bottom: 15px;
}
</style>

