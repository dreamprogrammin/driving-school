<script setup>
import TheHeaderTitle from '@/Components/TheHeaderTitle.vue'
import { onMounted, ref } from 'vue'
import Close from '@/Components/global/Close.vue'

const { showForm } = defineProps({ showForm: Boolean })

defineEmits(['close-form'])
const showHeader = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY <= 100) {
      showHeader.value = true
    } else {
      showHeader.value = false
    }
  })
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
    <header v-show="showHeader" class="h-20 z-20 max-md:h-16 fixed bg-[#18181b] w-full">
      <div
        class="max-w-4xl max-md:max-w-2xl max-lg:px-6 max-sm:max-w-2xl mx-auto flex justify-between items-center h-full"
      >
        <div class="flex">
          <the-header-title label="Автошкола Достық" />

          <img class="w-10 h-10" src="../img/logo-icon.png" alt="logo" />
        </div>
        <close @click="$emit('close-form')" v-show="showForm" />
      </div>
    </header>
  </transition>
</template>

<style scoped></style>
