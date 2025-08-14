<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 class="text-2xl font-semibold mb-6 text-center">Đăng nhập</h1>

      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            v-model="email"
            required
            class="w-full p-2 border rounded"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 mb-1">Mật khẩu</label>
          <input
            type="password"
            v-model="password"
            required
            class="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = async () => {
  try {
    // 🔹 Giả lập login thành công
    localStorage.setItem('token', 'fake-jwt-token')
    localStorage.setItem('email', email.value)

    alert('Đăng nhập thành công!')
    router.push('/dashboard')
  } catch (err) {
    alert('Đăng nhập thất bại: ' + err.message)
  }
}
</script>
