<template>
  <div class="container login-wrapper">
    <form @submit.prevent="login">
      <h2>Giriş Yap</h2>
      <label for="username">Kullanıcı Adı</label>
      <input type="text" id="username" v-model="username" required />
      <br />
      <label for="password">Parola</label>
      <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" required />
      <input type="checkbox" v-model="showPassword" />
      <v-icon name="io-eye-sharp" />

      <br />
      <button class="login-btn">Giriş</button>
    </form>
  </div>
</template>

<script>
import { IoEyeSharp } from "oh-vue-icons/icons";
export default {
  data() {
    return {
      username: "admin",
      password: "parola",
      showPassword: false,
      "v-icon": IoEyeSharp,
    };
  },

  methods: {
    login() {
      if (this.username === "admin" && this.password === "parola") {
        this.$router.push("/weather");
      } else {
        alert("Kullanıcı adı veya parola hatalı.");
      }
    },
  },
};
</script>
