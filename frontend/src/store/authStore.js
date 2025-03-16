import { useFetch, usePost } from '@/hooks/axios-api'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: localStorage.getItem('user') || null,
    token: localStorage.getItem('token') || '',
    record: {},
    message: ref(''),
  }),
  getters: {},
  actions: {
    async register(name, age, username, password, router) {
      const body = {
        name,
        age: Number(age),
        username,
        password,
      }

      usePost('/user/create', body).then((res) => {
        if (res.status === 200) {
          this.message = 'Successfully register'
          router.push('/login')
        } else {
          this.message = 'Failed to register'
        }
      })
    },

    async login(username, password, router) {
      const body = { username, password }
      usePost('/login', body).then((res) => {
        if (res.status === 200 && !!res?.data?.data) {
          this.user = res.data.data.user

          this.token = res.data.data.access_token
          localStorage.setItem('user', res.data.data.user)
          localStorage.setItem('token', res.data.data.access_token)

          router.push('/home')
        }
      })
    },

    async addRecordUser(record) {
      const user = localStorage.getItem('user')
      const body = { record, ...(user ? { id: user } : {}) }
      usePost('/record/add', body).then((res) => {
        if (res.status === 200) this.message('successfully')
      })
    },

    async fetchUserRecord() {
      const user = localStorage.getItem('user')
      useFetch(`/user/fetch/${user}`).then((res) => {
        if (res.status === 200) {
          this.record = res?.data?.data
        }
      })
    },

    logout(router) {
      this.$reset()
      this.user = null
      this.token = null
      this.record = {}
      localStorage.removeItem('token')
      localStorage.removeItem('user')

      router.push('/home')
    },

    isLoggedIn() {
      return !!localStorage.getItem('token')
    },
  },
  persist: true,
})
