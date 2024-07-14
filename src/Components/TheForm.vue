<script setup>
import { reactive } from 'vue'
import LinkButton from '@/Components/global/LinkButton.vue'
import TheIntroTitle from '@/Components/TheIntroTitle.vue'

const showForm = defineProps({ showForm: Boolean })

const phoneNumbers = reactive([
  {
    number: '+77025379473'
  },
  {
    number: '+77025379474'
  },
  {
    number: '+77025379475'
  }
])
</script>

<template>
  <div
    v-show="showForm"
    class="fixed backdrop-blur-md bg-white/30 gap-10 top-0 translate-x-1/4 flex flex-col items-center justify-center max-sm:translate-x-0 h-dvh w-8/12 max-sm:w-full"
  >
    <the-intro-title label="Связаться с нами:" />
    <div class="flex justify-center flex-wrap items-center gap-4 max-sm:gap-12">
      <div v-for="phoneNumber in phoneNumbers" :key="phoneNumber">
        <link-button :label="phoneNumber.number" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
