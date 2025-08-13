<template>
  <MainLayout>
    <div class="max-w-md mx-auto mt-8">
      <h2 class="text-2xl font-bold mb-4">Đăng nhập</h2>
      <form class="space-y-4" @submit.prevent="login">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full p-2 border rounded"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Mật khẩu"
          class="w-full p-2 border rounded"
        />
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded">
          Đăng nhập
        </button>
      </form>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
// import axios from 'axios' // Nếu dùng API thật

const router = useRouter()
const email = ref('')
const password = ref('')

const login = async () => {
  try {
    // Ví dụ login giả lập (thay bằng API thật)
    // const res = await axios.post('/api/login', { email: email.value, password: password.value })
    // localStorage.setItem('token', res.data.token)

    // Giả lập thành công
    localStorage.setItem('token', 'fake-jwt-token')

    // Quay về trang chủ
    router.push('/')
  } catch (err) {
    console.error('Login failed:', err)
  }
}
</script>
