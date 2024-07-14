<script setup>
const { label } = defineProps({ label: String })
</script>

<template>
  <h2
    class="text-3xl text-white font-normal text-center max-lg:text-xl max-sm:text-sm max-md:text-xl"
  >
    {{ label }}
  </h2>
</template>

<style scoped></style>
