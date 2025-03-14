<template>
  <div class="relative bottom-20">
    <div class="font-bold text-[50px] font-mono capitalize">You're {{ result?.name }}!</div>
    <div class="flex">
      <div class="flex flex-col max-w-xl">
        <img :src="getImageUrl()" class="rounded-xl" />
        <div class="bg-gray-800 p-4 rounded-xl mt-5 text-2xl">
          {{ result?.description }}
        </div>
      </div>
      <div class="bg-gray-800 ml-5 rounded-xl p-4">
        <div class="p-2 mt-2 text-xl" v-for="detail in detailsArr" :key="detail.type">
          <span> {{ detail.type }}: {{ detail.val }} </span>
        </div>
      </div>
      <div class="w-xl bg-gray-800 ml-5 rounded-xl p-4">Some chart later (radio chart)</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useResult } from '../hooks/swvr-api.js'
import { useQuizStore } from '../store/quizStore.js'

const quizStore = useQuizStore()
const { answers } = storeToRefs(quizStore)

let urlParams = ''

Object.values(answers.value).map((v, i) => {
  if (i === 0) urlParams = urlParams + `?${v.type}=${v.value}`
  else urlParams = urlParams + `&${v.type}=${v.value}`
})

const url = '/char/result' + urlParams

const { data } = useResult(url)

const result = computed(() => data?.value?.data)

const detailsArr = result?.value?.resultArr

function getImageUrl() {
  return new URL(
    `../assets/images/${result?.value?.name?.toLowerCase().replace(' ', '_')}.jpg`,
    import.meta.url,
  ).href
}
</script>
