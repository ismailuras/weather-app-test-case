<template>
  <button :type="btnType" :class="class">
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
      type: String,
      default: "submit",
    },
    class: {
      type: String,
    },
    city: {
      type: String,
    },
  },
};
</script>
