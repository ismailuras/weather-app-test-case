<template>
  <div class="search-form">
    <form @submit.prevent="searchWeather">
      <div style="width: 100%; display: flex; align-items: center; gap: 5px; position: relative">
        <label for="city">Şehir:</label>
        <input
          class="search-input"
          type="text"
          id="city"
          placeholder="Şehir adı giriniz..."
          v-model="searchCity"
          required />
        <button type="submit">
          <oh-vue-icon name="la-search-plus-solid" />
        </button>
      </div>
    </form>
  </div>

  <div v-if="searchedWeather">
    <div class="weather-card-comp">
      <div class="weather-card-wrapper">
        <div class="header">
          <h2 style="text-transform: capitalize">{{ city }}</h2>
          <div class="date">
            {{ formatUnixDate(searchedWeather.dt) }}
          </div>
        </div>
        <div class="weather-card-body">
          <ul style="margin-top: 20px">
            <li>
              Sıcaklık<span>{{ Math.round(searchedWeather.main.temp) }}°C</span>
            </li>
            <li>
              Nem<span>{{ searchedWeather.main.humidity }} %</span>
            </li>
            <li>
              Rüzgar<span>{{ searchedWeather.wind.speed }}</span>
            </li>
            <li>
              Açıklama<span>{{
                translateWeatherDescription(searchedWeather.weather[0].description)
              }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { OhVueIcon } from "oh-vue-icons";
import { useToast } from "vue-toastification";
import translateWeatherDescription, { formatUnixDate } from "../helpers/helper.js";

export default {
  data() {
    return {
      city: "",
      searchCity: "",
      searchedWeather: null,
    };
  },
  emits: ["getWeatherDataForCity"],

  methods: {
    async searchWeather() {
      try {
        const response = await this.getWeatherDataForCity(this.searchCity);
        this.city = this.searchCity;
        this.searchedWeather = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getWeatherDataForCity(city) {
      const apiKey = "54c93f26db3d801b7686b013c699984f";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const toast = useToast();

      try {
        const response = await axios.get(apiUrl);
        return response;
      } catch (error) {
        const errorMessage = error.response.data.message;
        if (errorMessage === "city not found") {
          toast.error("Aradığınız şehir bulunamadı.");
        } else {
          toast.error("Beklenmedik bir hata oluştu.");
        }
      }
    },
  },

  setup() {
    return {
      translateWeatherDescription,
      formatUnixDate,
    };
  },

  components: {
    OhVueIcon,
  },
};
</script>
