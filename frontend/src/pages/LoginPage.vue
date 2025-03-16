<template>
  <div class="bg-gray-800 p-5 rounded-lg">
    <div class="font-bold font-mono text-3xl text-center">LOGIN</div>
    <div>
      <InputTemplate label="Username" v-model="username" />
      <InputTemplate label="Password" v-model="password" type="password" />
    </div>
    <div class="w-full flex justify-end">
      <button
        @click="authStore.login(username, password, router)"
        class="w-1/3 cursor-pointer bg-blue-400 p-2 mt-4 rounded-lg"
      >
        login
      </button>
    </div>
    <div class="w-full text-center mt-5">
      <router-link to="/register">Still no account? Register now</router-link>
    </div>
    <div v-if="isError" class="w-full text-center mt-1">
      <router-link to="/register">
        <p class="text-red-600">Invalid credentials, try again</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

import InputTemplate from '../components/InputTemplate.vue'
import { useAuthStore } from '../store/authStore.js'

const router = useRouter()

const username = ref('')
const password = ref('')

const authStore = useAuthStore()
const { error } = storeToRefs(authStore)

const isError = computed(() => error?.value)

onUnmounted(() => {
  authStore.resetError()
  authStore.fetchUserRecord()
})
</script>
