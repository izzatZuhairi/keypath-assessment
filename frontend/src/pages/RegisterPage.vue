<template>
  <div class="bg-gray-800 p-5 rounded-lg">
    <div class="font-bold font-mono text-3xl text-center">CREATE ACCOUNT</div>
    <div>
      <InputTemplate label="Name" v-model="name" />
      <InputTemplate label="Age" v-model="age" />
      <InputTemplate label="Username" v-model="username" />
      <InputTemplate label="Password" v-model="password" />
    </div>
    <div class="w-full flex justify-end">
      <button
        @click="authStore.register(name, age, username, password, router)"
        class="w-1/3 cursor-pointer bg-blue-400 p-2 mt-4 rounded-lg"
      >
        submit
      </button>
    </div>
    <div class="w-full text-center mt-5">
      <router-link to="/login">Already have an account? Login here</router-link>
    </div>
  </div>

  <div>input: {{ t }}</div>
</template>

<script setup>
import { ref } from 'vue'
import InputTemplate from '../components/InputTemplate.vue'
import { useAuthStore } from '../store/authStore.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const age = ref(0)
const username = ref('')
const password = ref('')

const authStore = useAuthStore()
</script>
