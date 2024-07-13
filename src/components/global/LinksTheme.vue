<script setup>
import { computed } from 'vue'

const { numberPhone, isShow } = defineProps({ numberPhone: String, isShow: Boolean })
const classes = computed(() => [
  'bg-orange-500',
  'rounded-md',
  'p-4',
  'text-white',
  'font-semibold'
])
</script>

<template>
  <a :class="classes" :href="`tel:${numberPhone}`">
    <span>{{ numberPhone }}</span>
  </a>
</template>

<style scoped></style>
