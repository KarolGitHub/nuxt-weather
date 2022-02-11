<template>
  <div>
    <h1>Weather Today</h1>
    <weather-search @searchQueryHandler="fetchWeatherData" />
    <weather-card />
  </div>
</template>

<script>
import WeatherCard from '../components/WeatherCard';
import WeatherSearch from '../components/WeatherSearch';

export default {
  components: { WeatherSearch, WeatherCard },
  transition: 'default',
  methods: {
    fetchWeatherData(search) {
      this.$store.dispatch('weather/fetchData', { search, isSearched: true });
    }
  },
  created() {
    this.$store.dispatch('weather/fetchData', { search: this.$route.query.name ?? 'rzeszow', isSearched: false });
  }
};
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
  margin-bottom: 15px;
}
</style>

