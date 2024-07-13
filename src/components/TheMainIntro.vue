<script setup>
import { reactive } from 'vue'
import TheIntroText from '@/components/TheIntroText.vue'

const introTexts = reactive({
  title: 'Автошкола Достык',
  subtitle: '',
  text: 'Гарантируем 100% качественное обучение без огранничений по времени'
})
</script>

<template>
  <section class="relative h-dvh bg-black bg-opacity-10 flex flex-col justify-center items-center">
    <img
      class="absolute -z-10 left-0 top-0 w-full h-full object-cover"
      src="../img/intro_img.jpeg"
      alt="img"
    />
    <the-intro-text
      :title="introTexts.title"
      :subtitle="introTexts.subtitle"
      :text="introTexts.text"
    />
  </section>
</template>

<style scoped></style>
