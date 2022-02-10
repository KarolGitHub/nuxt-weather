<template>
  <v-card class="mx-auto my-auto font-weight-medium" max-width="300">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5">
          {{ getWeatherData.name }} ({{ getWeatherData.country }})
        </v-list-item-title>
        <v-list-item-subtitle>{{ getWeatherData.dateTime }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row>
        <v-col cols="6">
          <h1>{{ getWeatherData.temp }}&deg;C</h1>
        </v-col>
        <v-col cols="6">
          <v-img :src="weatherImg" alt="getWeatherData.info" width="92"></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <i class="fa-solid fa-circle-info" />
      </v-list-item-icon>
      <v-list-item-subtitle>{{ getWeatherData.description }}</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <i class="fa-solid fa-wind" />
      </v-list-item-icon>
      <v-list-item-subtitle>{{ getWeatherData.wind }} km/h</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <i class="fa-solid fa-droplet" />
      </v-list-item-icon>
      <v-list-item-subtitle>{{ getWeatherData.humidity }} %</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <i class="fa-solid fa-down-left-and-up-right-to-center" />
      </v-list-item-icon>
      <v-list-item-subtitle>{{ getWeatherData.pressure }} hPa</v-list-item-subtitle>
    </v-list-item>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({ getWeatherData: 'weather/getData' }),
    weatherImg() {
      const imgObj = {
        Rain: require('../assets/img/rain.png'),
        Snow: require('../assets/img/snow.png'),
        Clear: require('../assets/img/clear.png'),
        Mist: require('../assets/img/mist.png'),
        Clouds: require('../assets/img/clouds.png'),
        Haze: require('../assets/img/haze.png')
      };
      return imgObj[this.getWeatherData.info];
    }
  }
};
</script>
<style lang="scss">
.row {
  align-items: center;
}
</style>