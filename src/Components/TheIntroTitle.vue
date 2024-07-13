<script setup>
const { label } = defineProps({ label: String })
</script>

<template>
  <h1 class="text-5xl text-white font-normal text-center max-md:text-2xl">
    {{ label }}
  </h1>
</template>

<style scoped></style>
