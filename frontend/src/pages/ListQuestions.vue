<template>
  <div class="max-w-3xl font-bold text-5xl mb-6">
    {{ quizStore?.currentQ?.question?.value }}
  </div>
  <div class="w-full bg-gray-800 p-3 rounded-lg flex flex-col">
    <button
      class="text-left bg-black hover:bg-gray-700 focus:outline-4 focus:outline-violet-500 m-2 p-4 text-2xl rounded-md cursor-pointer"
      v-for="answer in quizStore?.currentQ?.answers"
      :key="answer._id"
      @click="selected = answer"
    >
      {{ answer.answerValue }}
    </button>
    <div class="w-full h-16 relative">
      <button
        v-if="selected?._id"
        @click="next"
        class="w-20 absolute bottom-0 right-2 mt-5 cursor-pointer bg-blue-400 p-1 rounded-md font-bold"
      >
        next
      </button>
      <button
        @click="reset"
        class="w-20 absolute bottom-0 left-2 mt-5 cursor-pointer bg-red-400 p-1 rounded-md font-bold"
      >
        reset
      </button>
    </div>
  </div>

  <div>Selected : {{ selected?._id }}</div>
</template>

<script setup>
import { onMounted, computed, watch } from 'vue'
import { useQuizStore } from '../store/quizStore.js'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

const route = useRoute()
const router = useRouter()
const quizStore = useQuizStore()

const { answers, currentQ, level, condition } = storeToRefs(quizStore)

let questionType = route.params.type

watch(
  () => route.params.type,
  (newType) => (questionType = newType),
)

onMounted(() => {
  quizStore.fetchQuestion(questionType.toUpperCase(), level.value, condition.value)
})

const selected = computed({
  get: () => answers.value[questionType.toUpperCase()] || '',
  set: (value) => quizStore.saveAnswer(questionType.toUpperCase(), value),
})

const next = () =>
  quizStore.nextQuestion(
    answers.value[questionType.toUpperCase()]?.nextQ?.type ?? null,
    currentQ.value.question.level + 1,
    answers.value[questionType.toUpperCase()]?.nextQ?.cond,
    router,
  )

const reset = () => {
  quizStore.reset()
  router.push('/home')
}
</script>
