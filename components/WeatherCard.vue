<template >
  <div></div>
</template>
<script>
export default {
  data: () => ({}),
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
<style lang="scss">
</style>