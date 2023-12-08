<template>
  <button :type="btnType" :class="class" @click="$emit('click')">{{ label }}</button>
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
      required: true,
    },
  },
};
</script>
