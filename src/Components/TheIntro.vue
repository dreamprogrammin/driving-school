<script setup>
import TheIntroTitle from '@/Components/TheIntroTitle.vue'
import Button from '@/Components/global/Button.vue'
import Whatsapp from '@/Components/global/Whatsapp.vue'
import Instagram from '@/Components/global/Instagram.vue'
import TheIntroSubtitle from '@/Components/TheIntroSubtitle.vue'
import Arrow from '@/Components/global/Arrow.vue'
import TheIntroText from '@/Components/TheIntroText.vue'

defineEmits(['open-form'])
</script>

<template>
  <main
    class="bg-black pt-16 h-dvh relative bg-opacity-40 flex justify-around items-center flex-col"
  >
    <img
      class="absolute left-0 top-0 h-full w-full -z-10 object-cover"
      src="../img/intro_img.jpeg"
      alt="bg"
    />

    <div
      class="w-1/2 max-md:w-10/12 flex flex-col xl:gap-12 gap-4 items-center rounded-2xl justify-around bg-opacity-60 bg-black md:p-4 p-10"
    >
      <!--      Титульный текст -->
      <the-intro-title label="Автошкола Достык" />
      <!--      Подтитульный текст-->
      <the-intro-text label="Наша цель: обеспечить вас качественным знанием ПДД РК" />
      <the-intro-subtitle
        label="
Мы проводим обучением без ограничений по времени до получения водительского удостоверения и обучаем дополнительно компьютерной грамотности."
      />
      <the-intro-text label="" />

      <!--      Кнопка записаться-->
      <div class="flex items-center justify-center flex-col gap-5">
        <Button @click="$emit('open-form')">Записаться</Button>
        <!--        Соцсети-->
        <div class="flex items-center gap-5 justify-center">
          <a href="https://www.instagram.com/avtoshkola.dostyk.almaty/"><instagram /></a>
          <a href="https://wa.me/77476578100"><whatsapp /></a>
        </div>
      </div>
    </div>
    <a href="#about" class="text-orange-500 animate-bounce">
      <arrow />
    </a>
  </main>
</template>

<style scoped></style>
