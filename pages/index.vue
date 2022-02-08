<template>
  <div>
    <h1>Weather Today</h1>
    <WeatherCard />
  </div>
</template>

<script>
import WeatherCard from '../components/WeatherCard';

export default {
  components: { WeatherCard }
};
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
  margin-bottom: 15px;
}
</style>

