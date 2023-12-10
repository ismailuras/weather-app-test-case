<template>
  <Button :label="`Çıkış Yap`" :type="`button`" @click="handleLogout"></Button>
</template>

<script>
import Button from "@/components/Button.vue";
import router from "@/router";

export default {
  methods: {
    // function that allows the user to log out and return to the login page
    handleLogout() {
      localStorage.removeItem("isLoggedIn");
      router.push("/login");
    },
  },

  components: {
    Button,
  },
};
</script>
