<template>
  <div class="w-full flex fixed top-0 left-0 right-0 m-1.5 p-2">
    <div class="flex w-3/4 justify-items-start">
      <div class="header p-1" @click="navigateTo('/home')">
        <v-icon name="hi-solid-home" fill="black" scale="1.5" />
        <p>HOME</p>
      </div>
      <div class="header p-1" @click="navigateTo('/stats')">
        <v-icon name="bi-pie-chart-fill" fill="black" scale="1.5" />
        <p>STATISTIC</p>
      </div>
      <!-- <div class="header p-1" @click="navigateTo('/result')"> -->
      <!--   <v-icon name="bi-person-lines-fill" fill="black" scale="1.5" /> -->
      <!--   <p>MY STATS</p> -->
      <!-- </div> -->
    </div>
    <div class="flex min-w-1/4 mr-1 justify-end">
      <div
        @click="isLoggedIn ? authStore.logout() : navigateTo('/login')"
        class="max-w-1/2 bg-white flex rounded-xl cursor-pointer"
      >
        <v-icon name="oi-feed-person" fill="black" scale="2" />
        <p v-if="isLoggedIn" class="text-black font-mono h-full mt-2 pr-2">LOGOUT</p>
        <p v-if="!isLoggedIn" class="text-black font-mono h-full mt-2 pr-2">LOGIN</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/authStore.js'

const authStore = useAuthStore()
const router = useRouter()

const isLoggedIn = computed(() => authStore.user !== null)

console.log(isLoggedIn.value)

const navigateTo = (path) => {
  router.push(path)
}
</script>

<style>
.header {
  display: flex;
  border-radius: 20px;
  background-color: gray;
  width: 37px;
  transition: width 0.5s;
  overflow: hidden;
  margin-right: 5px;
  cursor: pointer;
}

.header:hover {
  background-color: white;
  width: 150px;
}

.header p {
  opacity: 0;
  visibility: hidden;
  transition: width 0.3s ease-in-out 0.5s;
  margin-left: 2px;
  margin-top: 1px;
  white-space: nowrap;
  font-family: monospace;
  color: black;
  font-size: 16px;
  width: 100%;
  text-align: center;
}

.header:hover p {
  opacity: 1;
  visibility: visible;
}
</style>
