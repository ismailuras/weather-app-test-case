<template>
  <div class="container">
    <h1 style="text-align: center; color: #fff">Şehirler hakkında günlük hava tahminleri</h1>
    <div class="weather-card-comp">
      <weather-card
        v-for="(data, city) in weatherData"
        :key="city"
        :city="city"
        @getWeatherDataForCity="getWeatherDataForCity"
        :weather="data"></weather-card>
    </div>

    <search-weather @getWeatherDataForCity="getWeatherDataForCity"></search-weather>
  </div>
</template>

<script>
import WeatherCard from "./WeatherCard.vue";
import SearchWeather from "./SearchWeather.vue";
import axios from "axios";
import { reactive } from "vue";

export default {
  data() {
    return {
      weatherData: reactive({}),
    };
  },

  methods: {
    async getWeatherDataForCity(city) {
      const apiKey = "54c93f26db3d801b7686b013c699984f";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await axios.get(apiUrl);
        this.weatherData[city] = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getWeatherDataForCity("Ankara");
    this.getWeatherDataForCity("Istanbul");
  },

  components: {
    WeatherCard,
    SearchWeather,
  },
};
</script>
