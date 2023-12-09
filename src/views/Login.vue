<template>
  <div class="container login-wrapper">
    <form @submit.prevent="login">
      <h2>Giriş Yap</h2>

      <label :for="`username`">Kullanıcı Adı</label>
      <input type="text" id="username" v-model="username" required />
      <br />

      <label :for="`password`">Parola</label>
      <div class="password-wrapper">
        <input
          :type="showPassword ? 'text' : 'password'"
          id="password"
          v-model="password"
          required />
        <button type="button" @click="togglePasswordVisibility">
          <oh-vue-icon name="io-eye-sharp" v-if="!showPassword" />
          <oh-vue-icon name="io-eye-off" v-else />
        </button>
      </div>
      <br />

      <p style="font-size: 12px; color: #be3144">{{ errorMessage }}</p>
      <Button :label="`Giriş`" :class="`login-btn`"></Button>
    </form>
  </div>
</template>

<script>
import { OhVueIcon } from "oh-vue-icons";
import Button from "../components/Button.vue";

export default {
  data() {
    return {
      username: "admin",
      password: "parola",
      errorMessage: "",
      showPassword: false,
    };
  },

  methods: {
    // password visibility function
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    // login function
    login() {
      if (this.username === "admin" && this.password === "parola") {
        localStorage.setItem("isLoggedIn", "true");
        this.$router.push("/weather");
      } else {
        this.errorMessage = "Kullanıcı adı veya parola hatalı.";
      }
    },
  },

  components: {
    OhVueIcon,
    Button,
  },
};
</script>
