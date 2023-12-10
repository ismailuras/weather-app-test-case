<template>
  <div class="weather-card-wrapper">
    <div class="header">
      <h2>{{ city }}</h2>
      <div class="date" style="white-space: normal">
        {{ formatUnixDate(weather.dt) }}
      </div>
    </div>
    <div class="weather-card-body">
      <ul style="margin-top: 20px">
        <li>
          Sıcaklık<span>{{ Math.round(weather.main.temp) }}°C</span>
        </li>
        <li>
          Nem<span>{{ weather.main.humidity }}%</span>
        </li>
        <li>
          Rüzgar<span>{{ weather.wind.speed }}</span>
        </li>
        <li>
          Açıklama<span>{{ translateWeatherDescription(weather.weather[0].description) }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import translateWeatherDescription, { formatUnixDate } from "../helpers/helper.js";

export default {
  props: {
    city: String,
    weather: Object,
  },

  // functions that translate weather description into Turkish and make Unix formatted date information readable
  setup() {
    return {
      translateWeatherDescription,
      formatUnixDate,
    };
  },
};
</script>
