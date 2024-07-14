<script setup>
const { label } = defineProps({ label: String })
</script>

<template>
  <a class="p-5 bg-orange-500 rounded-md text-white text-sm uppercase" :href="`tel:${label}`">{{
    label
  }}</a>
</template>

<style scoped></style>
