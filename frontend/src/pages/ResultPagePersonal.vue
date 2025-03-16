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
      <div class="w-xl bg-gray-800 ml-5 rounded-xl p-4">
        <RadioChart :chartData="dataChart" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import { useResult } from '../hooks/swvr-api.js'
import { useAuthStore } from '../store/authStore.js'

import RadioChart from '../components/RadioChart.vue'

const authStore = useAuthStore()
const { record } = storeToRefs(authStore)

let urlParams = ''

Object.entries(record?.value?.record || {}).map(([key, val], i) => {
  if (i === 0) urlParams = urlParams + `?${key}=${val}`
  else urlParams = urlParams + `&${key}=${val}`
})

const url = '/char/result' + urlParams

const { data } = useResult(url)

const result = computed(() => data?.value?.data)
const detailsArr = computed(() => result?.value?.resultArr)

function getImageUrl() {
  return new URL(
    `../assets/images/${result?.value?.name?.toLowerCase().replaceAll(' ', '_')}.jpg`,
    import.meta.url,
  ).href
}

const props = computed(() => result?.value?.props)

const dataChart = computed(() => ({
  labels: ['skill', 'movement', 'playstyle', 'ult', 'heal'],
  datasets: [
    {
      label: 'Characteristic',
      data: [
        props?.value?.['SKILL_LEVEL'],
        props?.value?.['MOVEMENT'],
        props?.value?.['PLAYSTYLE'],
        props?.value?.['ULT'],
        props?.value?.['HEAL'],
      ],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
    },
  ],
}))
</script>
