<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import LinksTheme from '@/components/global/LinksTheme.vue'
import WhatsAppIcon from '@/components/global/WhatsAppIcon.vue'
import InstagramIcon from '@/components/global/InstagramIcon.vue'
import TheHeaderLogo from '@/components/TheHeaderLogo.vue'

const { title, text } = defineProps({ title: String, subtitle: String, text: String })

const isShow = ref(false)

const classesTitle = computed(() => [
  'text-7xl',
  'max-sm:text-2xl',
  'max-md:text-5xl',
  'text-center',
  'font-bold',
  'text-white'
])

const classesText = computed(() => [
  'text-white',
  'font-bold',
  'text-lg',
  'max-sm:text-xl',
  'min-w-72',
  'text-center',
  'w-1/2'
])

const phoneNumbers = reactive([
  {
    number: '+77026538100'
  },
  {
    number: '+77471952326'
  },
  {
    number: '+77078541517'
  }
])

onMounted(() => {
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 448) {
      isShow.value = true
      console.log(window.innerWidth)
    } else {
      isShow.value = false
    }
  })
})
</script>

<template>
  <div class="flex items-center gap-10 flex-col w-10/12 bg-black rounded-2xl p-10 bg-opacity-80">
    <the-header-logo />
    <h1 :class="classesTitle">
      {{ title }}
    </h1>
    <p :class="classesText">
      {{ text }}
    </p>
    <h3 class="text-white font-semibold text-3xl uppercase text-center">Связаться с нами:</h3>
    <div class="flex gap-10 max-w-5xl flex-wrap justify-center">
      <div v-for="phoneNumber in phoneNumbers" :key="phoneNumber.number">
        <links-theme :number-phone="phoneNumber.number" :is-show="isShow" />
      </div>
    </div>
    <div class="z-20 flex gap-4 flex-wrap justify-center">
      <whats-app-icon />
      <instagram-icon />
    </div>
  </div>
</template>

<style scoped></style>
