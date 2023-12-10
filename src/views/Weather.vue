<template>
  <div class="container">
    <!-- logout button -->
    <div class="logout-comp">
      <logout></logout>
    </div>
    <h1 style="text-align: center; color: #fff">Şehirler hakkında günlük hava tahminleri.</h1>
    <!-- weather card for specified cities -->
    <div class="weather-card-comp">
      <weather-card
        v-for="(data, city) in weatherData"
        :key="city"
        :city="city"
        @getWeatherDataForCity="getWeatherDataForCity"
        :weather="data"></weather-card>
    </div>
    <!-- search weather component -->
    <search-weather @getWeatherDataForCity="getWeatherDataForCity"></search-weather>
  </div>
</template>

<script>
import WeatherCard from "./WeatherCard.vue";
import SearchWeather from "./SearchWeather.vue";
import Logout from "./Logout.vue";
import axios from "axios";
import { reactive } from "vue";
import { useToast } from "vue-toastification";

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
      const toast = useToast();

      try {
        const response = await axios.get(apiUrl);
        this.weatherData[city] = response.data;
      } catch (error) {
        toast.error("Hava durumu verileri alınırken bir hata oluştur");
      }
    },
  },

  // when the page is first loaded, it returns weather information for specified cities
  created() {
    const initialCities = ["Ankara", "Istanbul"];
    initialCities.forEach((city) => this.getWeatherDataForCity(city));
  },

  components: {
    WeatherCard,
    SearchWeather,
    Logout,
  },
};
</script>
