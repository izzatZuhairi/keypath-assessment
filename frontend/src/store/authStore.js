import { usePost } from '@/hooks/axios-api'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: ref({}),
    token: localStorage.getItem('token') || '',
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
        if (res.data.statusCode === 200) {
          this.user = res.data.user
          this.token = res.data.access_token

          localStorage.setItem('token', res.data.access_token)

          router.push('/home')
        }
      })
    },

    logout() {
      this.$reset()
      localStorage.removeItem('token')
    },
  },
})
