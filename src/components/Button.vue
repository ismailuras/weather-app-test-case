<template>
  <button :type="btnType" :class="class" @click="handleButtonClick">
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
  },

  methods: {
    handleButtonClick() {
      this.$emit("cityButtonClick", this.city);
    },
  },
};
</script>
