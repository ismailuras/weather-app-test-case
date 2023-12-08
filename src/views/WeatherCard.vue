<template>
  <div class="weather-card-wrapper">
    <div class="header">
      <h2>{{ city }}</h2>
      <div class="date">
        {{ formatUnixDate(weather.dt) }}
      </div>
    </div>
    <div class="weather-card-body">
      <ul style="margin-top: 20px">
        <li>
          Sıcaklık<span>{{ Math.round(weather.main.temp) }}°C</span>
        </li>
        <li>
          Nem<span>{{ weather.main.humidity }} %</span>
        </li>
        <li>
          Rüzgar<span>{{ weather.wind.speed }}</span>
        </li>
        <li>
          Açıklama<span>{{ translateWeatherDescription(weather.weather[0].description) }}</span>
        </li>
      </ul>
    </div>
    <div class="refresh-btn">
      <Button :label="`Yenile`" :city="city" @cityButtonClick="handleButtonClick"></Button>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import translateWeatherDescription, { formatUnixDate } from "../helpers/helper.js";

export default {
  props: {
    city: String,
    weather: Object,
  },

  methods: {
    handleButtonClick(city) {
      this.$emit("getWeatherDataForCity", city);
    },
  },

  setup() {
    return {
      translateWeatherDescription,
      formatUnixDate,
    };
  },

  components: {
    Button,
  },
};
</script>
