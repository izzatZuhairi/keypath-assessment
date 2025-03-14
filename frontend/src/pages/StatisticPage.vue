<template>
  <div>
    <div class="w-full text-center flex font-mono font-bold text-5xl">Overview Role Picked</div>
    <!-- <div class="bg-gray-900 p-5 m-5 rounded-xl"><Bar :chartData="barTest" /></div> -->
    <div class="bg-gray-900 p-5 m-5 rounded-xl">
      <Pie
        v-if="stats?.data?.damage & stats?.data?.tank & stats?.data?.support"
        :chartData="data"
        :chartOption="chartOptions"
      />
      <p v-if="!(stats?.data?.damage & stats?.data?.tank & stats?.data?.support)">
        No data available*
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
// import Bar from '../components/BarChart.vue'
import Pie from '../components/PieChart.vue'

import { useResult } from '../hooks/swvr-api.js'

// const barTest = computed(() => ({
// labels: ['a', 'b', 'c'],
// datasets: [
// {
// label: 'Top 3 characters',
// data: [65, 59, 80],
// backgroundColor: [
// 'rgba(255, 99, 132, 0.2)',
// 'rgba(255, 159, 64, 0.2)',
// 'rgba(255, 205, 86, 0.2)',
// 'rgba(75, 192, 192, 0.2)',
// 'rgba(54, 162, 235, 0.2)',
// 'rgba(153, 102, 255, 0.2)',
// 'rgba(201, 203, 207, 0.2)',
// ],
// borderColor: [
// 'rgb(255, 99, 132)',
// 'rgb(255, 159, 64)',
// 'rgb(255, 205, 86)',
// 'rgb(75, 192, 192)',
// 'rgb(54, 162, 235)',
// 'rgb(153, 102, 255)',
// 'rgb(201, 203, 207)',
// ],
// borderWidth: 1,
// },
// ],
// }))

const { data: stats } = useResult('/user/stats')

const data = computed(() => ({
  labels: ['damage', 'tank', 'support'],
  datasets: [
    {
      label: 'Roles',
      data: [stats?.data?.damage, stats?.data?.tank, stats?.data?.support],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
      hoverOffset: 4,
    },
  ],
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
}
</script>
