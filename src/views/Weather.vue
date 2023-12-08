<template>
  <div class="container">
    <h1>Şehirler hakkında hava tahminleri</h1>
    <button @click="getWeatherData">Click</button>

    <form @submit.prevent="getWeatherData">
      <label for="city">City:</label>
      <input type="text" id="city" v-model="city" required />
      <button type="submit">Get Weather</button>
    </form>
    <div v-if="weather">
      <h3>{{ weather.name }}</h3>
      <p>Temperature: {{ weather.main.temp }}°C</p>
      <p>Weather: {{ weather.weather[0].description }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      city: "Ankara",
      weather: null,
    };
  },

  methods: {
    async getWeatherData() {
      const apiKey = "54c93f26db3d801b7686b013c699984f";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&units=metric`;

      try {
        const response = await axios.get(apiUrl);
        this.weather = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
