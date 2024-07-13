<script setup>
const { label } = defineProps({ label: String })
defineEmits(['select-open'])
</script>

<template>
  <button
    class="text-white uppercase text-sm font-semibold w-24 h-12 bg-orange-500"
    @click="$emit('select-open')"
  >
    {{ label }}
  </button>
</template>

<style scoped></style>
