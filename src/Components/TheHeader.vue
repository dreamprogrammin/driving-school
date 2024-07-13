<script setup>
import TheHeaderTitle from '@/Components/TheHeaderTitle.vue'
import { onMounted, ref } from 'vue'
import Close from '@/Components/global/Close.vue'

const { closeForm, showForm } = defineProps({ closeForm: Boolean, showForm: Boolean })

defineEmits(['close-form'])
const showHeader = ref(false)

onMounted(() => {
  setTimeout(() => (showHeader.value = true), 1000)
})
</script>

<template>
  <transition
    enter-active-class="transition-translate ease-linear duration-200"
    enter-from-class="-translate-y-full"
    enter-to-class="translate-y-ful"
    leave-active-class="transition-translate ease-linear duration-200"
    leave-from-class="translate-y-ful"
    leave-to-class="-translate-y-full"
  >
    <header v-show="showHeader" class="h-20 z-20 max-md:h-16 fixed bg-opacity-60w bg-black w-full">
      <div
        class="max-w-4xl max-md:max-w-2xl max-lg:px-6 max-sm:max-w-2xl mx-auto flex justify-between items-center h-full"
      >
        <the-header-title label="Автошкола - Достык" />
        <close @click="$emit('close-form')" v-show="showForm" />
      </div>
    </header>
  </transition>
</template>

<style scoped></style>
