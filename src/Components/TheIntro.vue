<script setup>
import TheIntroTitle from '@/Components/TheIntroTitle.vue'
import Button from '@/Components/global/Button.vue'
import TheForm from '@/Components/TheForm.vue'

defineEmits(['open-form'])

const { showForm } = defineProps({ showForm: Boolean })
</script>

<template>
  <main
    class="bg-black pt-16 h-dvh relative bg-opacity-40 flex justify-around items-center flex-col"
  >
    <img
      class="absolute left-0 top-0 h-full w-full -z-10 object-cover"
      src="../img/intro_img.jpeg"
      alt="bg"
    />

    <div
      class="w-8/12 flex flex-col items-center rounded-2xl justify-center gap-20 bg-opacity-60 bg-black p-10"
    >
      <the-intro-title label="Гарантируем 100% качественное обучение без огранничений по времени" />
      <Button @click="$emit('open-form')">Записаться</Button>
    </div>
  </main>
</template>

<style scoped></style>
