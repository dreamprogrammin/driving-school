<script setup>
import TheHeader from '@/Components/TheHeader.vue'
import TheIntro from '@/Components/TheIntro.vue'
import { onMounted, ref, watch } from 'vue'
import TheForm from '@/Components/TheForm.vue'
import TheMainContent from '@/Components/TheMainContent.vue'
import Footer from '@/Components/Footer.vue'
import GiftCard from '@/Components/global/GiftCard.vue'
import GiftCardOpen from '@/Components/global/GiftCardOpen.vue'

const showHeader = ref(false)
const showForm = ref(false)
const isShowGift = ref(false)

const openForm = () => {
  showForm.value = !showForm.value
  showHeader.value = true
}

const showGift = () => {
  isShowGift.value = !isShowGift.value
}

watch(showForm, (newValue) => {
  if (newValue) {
    document.querySelector('body').style.overflow = 'hidden'
  } else {
    document.querySelector('body').style.overflow = 'auto'
  }
})

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
      showHeader.value = true
    } else {
      showHeader.value = false
    }
    if (window.scrollY >= 10) {
      isShowGift.value = false
    }
  })
})
</script>

<template>
  <!--  Шапка сайта-->
  <the-header @close-form="showForm = !showForm" :show-header="showHeader" :show-form="showForm" />
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
  <!--  Контетная часть-->
  <the-main-content />
  <!--  Подвал-->
  <Footer />
  <gift-card :is-show-gift="isShowGift" @show-gift="showGift" />
  <gift-card-open @show-gift="showGift" />
</template>
