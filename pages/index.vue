<template>
  <div>
    <h1>Weather Today</h1>
    <WeatherSearch @searchQueryHandler="fetchWeatherData" />
    <WeatherCard />
  </div>
</template>

<script>
import WeatherCard from '../components/WeatherCard';
import WeatherSearch from '../components/WeatherSearch.vue';

export default {
  components: { WeatherCard, WeatherSearch },
  methods: {
    fetchWeatherData(search) {
      this.$store.dispatch('weather/fetchData', search);
    }
  },
  created() {
    this.$store.dispatch('weather/fetchData', 'rzeszow');
  }
};
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
  margin-bottom: 15px;
}
</style>

