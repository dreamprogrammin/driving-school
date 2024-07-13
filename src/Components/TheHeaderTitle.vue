<script setup>
const { label } = defineProps({ label: String })
</script>

<template>
  <h1 class="text-2xl uppercase text-center tracking-wider text-white font-normal">
    {{ label }}
  </h1>
</template>

<style scoped></style>
