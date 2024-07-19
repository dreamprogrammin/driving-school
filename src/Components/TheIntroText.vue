<script setup>
import { computed } from 'vue'

const { label, isFormText } = defineProps({ label: String, isFormText: { required: true } })

const classes = computed(() => {
  const classes = [
    'text-xl',
    'text-white',
    'font-normal',
    'mb-1.5',
    'text-center',
    'max-lg:text-lg',
    'max-sm:text-lg',
    'max-md:text-xs'
  ]

  return isFormText ? [...['drop-shadow-lg'], classes] : classes
})
</script>

<template>
  <p :class="classes">
    {{ label }}
  </p>
</template>

<style scoped></style>
