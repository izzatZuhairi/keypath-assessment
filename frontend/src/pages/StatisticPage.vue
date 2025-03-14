<template>
  <div>
    <div class="w-full text-center flex font-mono font-bold text-5xl">Overview Role Picked</div>
    <div class="bg-gray-900 p-5 m-5 rounded-xl">
      <Pie
        v-if="stats?.data?.damage || stats?.data?.tank || stats?.data?.support"
        :chartData="data"
        :chartOption="chartOptions"
      />
      <p v-if="!(stats?.data?.damage || stats?.data?.tank || stats?.data?.support)">
        No data available*
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Pie from '../components/PieChart.vue'

import { useResult } from '../hooks/swvr-api.js'

const { data: stats } = useResult('/user/stats')

const data = computed(() => ({
  labels: ['damage', 'tank', 'support'],
  datasets: [
    {
      label: 'Roles',
      data: [
        Number(stats?.value?.data?.damage ?? 0),
        Number(stats?.value?.data?.tank ?? 0),
        Number(stats?.value?.data?.support ?? 0),
      ],
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
