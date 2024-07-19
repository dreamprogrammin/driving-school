<script setup>
import Arrow from '@/Components/global/Arrow.vue'
import { computed } from 'vue'

const { isShowGift } = defineProps({ isShowGift: Boolean })
defineEmits(['show-gift'])

const classes = computed(() => ['w-6', 'h-6', isShowGift ? '-rotate-90' : 'rotate-90'])
</script>

<template>
  <transition
    enter-active-class="transition-translate ease-linear duration-200"
    enter-from-class="-translate-x-full"
    leave-active-class="transition-translate ease-linear duration-200"
    leave-to-class="-translate-x-full"
  >
    <div v-show="isShowGift" class="fixed top-1/3 z-20 flex">
      <a
        href="https://wa.me/77476578100"
        class="w-52 text-orange-500 flex flex-col justify-center backdrop-blur-md bg-black/30 tracking-wide text-xl uppercase font-medium text-center py-3 px-10"
      >
        Заказать подрачоный сертифакат
      </a>
      <button
        @click="$emit('show-gift')"
        class="backdrop-blur-md bg-black/3 py-10 text-white rounded-tr-2xl rounded-br-2xl"
      >
        <arrow :class="classes" />
      </button>
    </div>
  </transition>
</template>

<style scoped></style>
