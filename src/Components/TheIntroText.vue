<script setup>
const { label } = defineProps({ label: String })
</script>

<template>
  <p
    class="text-xl text-white font-normal mb-1.5 text-center max-lg:text-lg max-sm:text-lg max-md:text-xs"
  >
    {{ label }}
  </p>
</template>

<style scoped></style>
