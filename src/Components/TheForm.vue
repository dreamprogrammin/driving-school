<script setup>
import { reactive } from 'vue'
import LinkButton from '@/Components/global/LinkButton.vue'

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
    class="bg-white fixed top-0 translate-x-1/4 flex items-center justify-center max-sm:translate-x-0 h-dvh w-8/12 max-sm:w-full"
  >
    <div v-for="phoneNumber in phoneNumbers" :key="phoneNumber">
      <link-button :label="phoneNumber.number" />
    </div>
  </div>
</template>

<style scoped></style>
