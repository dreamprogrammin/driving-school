<script setup>
const { title, text } = defineProps({ title: String, text: String })
</script>

<template>
  <section class="border-b border-gray-600 mb-10 space-y-10">
    <h1 class="text-white max-w-sm font-semibold max-lg:text-xl max-2xl:text-4xl">{{ title }}</h1>
    <p class="text-white pb-10 font-normal max-lg:text-sm max-2xl:text-2xl">{{ text }}</p>
  </section>
</template>

<style scoped></style>
