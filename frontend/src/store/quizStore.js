import { useQuestions, usePost } from '@/hooks/axios-api'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useQuizStore = defineStore('quiz', () => {
  const answers = ref({})
  const currentQ = ref({})
  const level = ref(0)
  const condition = ref({})

  async function fetchQuestion(type, level, condition = null) {
    try {
      let conditionUrl = ''

      Object.entries(condition ?? {}).map(
        ([key, val]) => (conditionUrl = conditionUrl + `&${key}=${val}`),
      )

      const url = `/question/fetch?type=${type}&level=${level}` + conditionUrl
      useQuestions(url).then((res) => (currentQ.value = res.data))
    } catch (error) {
      console.error('Failed to fetch questions: ', error)
    }
  }

  async function initialQuestion() {
    try {
      let url = '?type=ROLE&level=0'
      useQuestions(url).then((res) => (currentQ.value = res.data))
    } catch (error) {
      console.error('Failed to fetch questions: ', error)
    }
  }

  function saveAnswer(questionType, answer) {
    answers.value[questionType] = answer
  }

  async function nextQuestion(questionType = null, levelInput, condition = null, router) {
    if (questionType === null) {
      router.push('/result')
    } else {
      let conditionUrl = ''

      Object.entries(condition ?? {}).map(
        ([key, val]) => (conditionUrl = conditionUrl + `&${key}=${val}`),
      )

      const url = `/question/fetch?type=${questionType}&level=${levelInput}` + conditionUrl
      useQuestions(url).then((res) => {
        currentQ.value = res.data
        level.value = levelInput
      })

      router.push(`/questions/${questionType.toLowerCase()}`)
    }
  }

  async function addRecordUser(record) {
    const user = localStorage.getItem('user')
    const body = { record, ...(user ? { id: user } : {}) }
    usePost('/user/record/add', body).then((res) => {
      if (res.status === 200) console.log('successfully added record')
    })
  }

  function reset() {
    answers.value = {}
    currentQ.value = {}
    level.value = 0
    condition.value = {}
  }

  return {
    reset,
    nextQuestion,
    saveAnswer,
    initialQuestion,
    fetchQuestion,
    addRecordUser,
    answers,
    currentQ,
    level,
    condition,
  }
})
