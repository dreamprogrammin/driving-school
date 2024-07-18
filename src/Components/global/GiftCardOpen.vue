<script setup>
import Arrow from '@/Components/global/Arrow.vue'
const { isShowGift } = defineProps({ isShowGift: Boolean })
defineEmits(['show-gift'])
</script>

<template>
  <div v-show="!isShowGift" class="fixed top-1/3 z-10">
    <button
      @click="$emit('show-gift')"
      class="backdrop-blur-md bg-black/3 py-10 text-white rounded-tr-2xl rounded-br-2xl"
    >
      <arrow class="w-6 h-6 -rotate-90" />
    </button>
  </div>
</template>

<style scoped></style>
