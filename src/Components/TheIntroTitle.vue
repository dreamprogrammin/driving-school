<script setup>
const { label } = defineProps({ label: String })
</script>

<template>
  <h1
    class="text-5xl text-white font-normal uppercase text-center max-lg:text-2xl max-sm:text-4xl max-md:text-2xl"
  >
    {{ label }}
  </h1>
</template>

<style scoped></style>
