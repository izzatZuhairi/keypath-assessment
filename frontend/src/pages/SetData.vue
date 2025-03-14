<template>
  <button @click="initData" class="bg-amber-300 cursor-pointer m-5 p-5 text-black rounded-4xl">
    INSERT DATA
  </button>
  <button @click="resetData" class="bg-red-300 cursor-pointer m-5 p-5 text-black rounded-4xl">
    RESET DATA
  </button>
</template>

<script setup>
import { useFetch } from '../hooks/axios-api.js'

const initData = async () => useFetch('/init-data')
const resetData = async () => useFetch('/reset-data')
</script>
