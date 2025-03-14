<template>
  <div class="font-sans w-full">
    <section>
      <div class="flex justify-center">
        <p class="font-mono fontsize-custom">Which hero suits you?</p>
      </div>
    </section>

    <section>
      <div class="flex justify-center relative">
        <img class="w-screen max-w-3/4 rounded-lg" :src="rival" alt="home" />
        <div
          class="mt-10 p-2 flex absolute bg-black hover:bg-fuchsia-500 rounded-lg cursor-pointer"
          @click="navigateToQuestions"
        >
          <v-icon name="fa-question" fill="orange" scale="1" animation="pulse" class="mt-1" />
          <div class="h-full inline-block align-middle">
            <p class="text-white font-bold">Click here to find out now!</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import rival from '@/assets/images/rivals-home.jpg'
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToQuestions = () => {
  router.push('/questions/role')
}
</script>

<style scoped>
.fontsize-custom {
  font-size: 50px;
}
</style>
