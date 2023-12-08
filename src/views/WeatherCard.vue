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
import translateWeatherDescription from "../helpers/helper.js";

export default {
  props: {
    city: String,
    weather: Object,
  },

  methods: {
    formatUnixDate(unixTimeStamp) {
      const date = new Date(unixTimeStamp * 1000);
      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      return date.toLocaleDateString("tr-TR", options);
    },

    handleButtonClick(city) {
      this.$emit("getWeatherDataForCity", city);
    },
  },

  setup() {
    return {
      translateWeatherDescription,
    };
  },

  components: {
    Button,
  },
};
</script>
