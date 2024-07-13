<script setup>
const { label } = defineProps({ label: String })
</script>

<template>
  <button class="text-white uppercase text-sm rounded-lg font-semibold w-24 h-12 bg-orange-500">
    {{ label }}
  </button>
</template>

<style scoped></style>
