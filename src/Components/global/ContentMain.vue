<script setup>
const { title, text } = defineProps({ title: String, text: String })
</script>

<template>
  <h1
    v-scrollanimation
    class="text-white max-w-sm z-30 font-semibold tracking-wide max-lg:text-2xl max-2xl:text-4xl"
  >
    {{ title }}
  </h1>
  <p
    v-scrollanimation
    class="text-white pb-10 font-normal tracking-wide max-lg:text-lg max-2xl:text-2xl"
  >
    {{ text }}
  </p>
</template>

<style scoped>
.before-enter {
  transform: translateY(100px);
  opacity: 0;
  transition: 500ms ease-in-out;
}
.enter {
  transform: translateY(0);
  opacity: 1;
}
</style>
