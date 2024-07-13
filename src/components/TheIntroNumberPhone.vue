<script setup>
import ButtonPhone from '@/components/global/ButtonPhone.vue'
const { isShowButton } = defineProps({ isShowButton: Boolean, isShow: Boolean })
defineEmits(['call-phone'])
</script>

<template>
  <button-phone label="Позвонить нам" v-show="isShowButton" @click="$emit('call-phone')" />
</template>

<style scoped></style>
