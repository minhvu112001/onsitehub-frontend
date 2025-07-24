import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'

interface User {
  id: number
  fullName: string
  email: string
  role: string // "candidate", "employer", "admin", v.v.
}

interface RegisterPayload {
  fullName: string
  email: string
  password: string
}

interface LoginPayload {
  email: string
  password: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    token: localStorage.getItem('token') || '',
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    async register(payload: RegisterPayload) {
      const response = await axios.post('/api/register', payload)
      this.token = response.data.token
      this.user = response.data.user
      localStorage.setItem('token', this.token)
    },

    async login(payload: LoginPayload) {
      const response = await axios.post('/api/login', payload)
      this.token = response.data.token
      this.user = response.data.user
      localStorage.setItem('token', this.token)
    },

    async fetchUser() {
      if (!this.token) return
      try {
        const response = await axios.get('/api/me', {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        this.user = response.data
      } catch (error) {
        this.logout()
      }
    },

    logout() {
      this.token = ''
      this.user = null
      localStorage.removeItem('token')
      const router = useRouter()
      router.push('/login')
    },
  },
})
