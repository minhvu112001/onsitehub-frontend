import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null
  }),
  actions: {
    async register(email, password) {
      const response = await axios.post('/api/register', { email, password })
      this.user = response.data.user
    },

    async login(credentials) {
      try {
        const response = await axios.post('/api/login', credentials)
        const { token, user } = response.data

        this.token = token
        this.user = user

        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      } catch (error) {
        throw error
      }
    },

    async fetchUser() {
      try {
        if (!this.token) return
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`

        const response = await axios.get('/api/user')
        this.user = response.data
      } catch (error) {
        this.logout()
      }
    },

    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
    }
  }
})
