<script setup>
import { computed } from 'vue'

const { numberPhone, isShow } = defineProps({ numberPhone: String, isShow: Boolean })
const classes = computed(() => [
  'bg-orange-500',
  'rounded-md',
  'block',
  'text-white',
  'font-semibold',
  'p-4'
])
</script>

<template>
  <a :class="classes" :href="`tel:${numberPhone}`">
    {{ numberPhone }}
  </a>
</template>

<style scoped></style>
