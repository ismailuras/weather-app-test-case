<template>
  <button :type="btnType" :class="class" @click="handleButtonClick" :disabled="loading">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    btnType: {
      tpye: String,
      default: "submit",
    },
    class: {
      type: String,
    },
    city: {
      type: String,
    },
    loading: {
      type: Boolean,
    },
  },

  methods: {
    handleButtonClick() {
      this.$emit("cityButtonClick", this.city);
    },
  },
};
</script>
