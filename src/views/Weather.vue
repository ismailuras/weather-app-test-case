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
    <!-- <button @click="getWeatherData">Click</button>

    <form @submit.prevent="getWeatherData">
      <label for="city">City:</label>
      <input type="text" id="city" v-model="city" required />
      <button type="submit">Get Weather</button>
    </form>
    <div v-if="weather">
      <h3>{{ weather.name }}</h3>
      <p>Temperature: {{ weather.main.temp }}°C</p>
      <p>Weather: {{ weather.weather[0].description }}</p>
    </div> -->
  </div>
</template>

<script>
import WeatherCard from "./WeatherCard.vue";
import axios from "axios";
import { reactive } from "vue";

export default {
  data() {
    return {
      city: "",
      weather: null,
      weatherData: reactive({}),
    };
  },

  methods: {
    async getWeatherDataForCity(city) {
      const apiKey = "54c93f26db3d801b7686b013c699984f";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await axios.get(apiUrl);
        console.log(response.data);
        this.weatherData[city] = response.data;
      } catch (error) {
        // error mesaj ekle
        console.log(error);
      }
    },

    async getWeatherData() {
      await this.getWeatherDataForCity(this.city);
    },
  },

  created() {
    this.getWeatherDataForCity("Ankara");
    this.getWeatherDataForCity("Istanbul");
  },

  components: {
    WeatherCard,
  },
};
</script>
