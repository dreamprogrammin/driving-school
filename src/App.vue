<script setup>
import TheHeader from '@/Components/TheHeader.vue'
import TheIntro from '@/Components/TheIntro.vue'
import { ref } from 'vue'
import TheForm from '@/Components/TheForm.vue'

const showForm = ref(false)

const openForm = () => {
  showForm.value = !showForm.value
}
</script>

<template>
  <!--  Шапка сайта-->
  <the-header @close-form="showForm = !showForm" :show-form="showForm" />
  <!--  Интро сайта-->
  <the-intro @open-form="openForm" />
  <!--  Форма сайта-->
  <transition
    enter-active-class="transition-translate ease-linear duration-200"
    enter-from-class="-translate-y-full"
    enter-to-class="translate-y-ful"
    leave-active-class="transition-translate ease-linear duration-200"
    leave-from-class="translate-y-ful"
    leave-to-class="-translate-y-full"
  >
    <the-form v-show="showForm" :show-form="showForm" />
  </transition>
</template>
