<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 class="text-2xl font-semibold mb-6 text-center">Đăng ký</h1>

      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input type="email" v-model="email" required class="w-full p-2 border rounded" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Mật khẩu</label>
          <input type="password" v-model="password" required class="w-full p-2 border rounded" />
        </div>

        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Đăng ký
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const email = ref('')
const password = ref('')
const auth = useAuthStore()

const handleRegister = async () => {
  try {
    await auth.register(email.value, password.value)
    alert('Đăng ký thành công!')
  } catch (err) {
    alert('Đăng ký thất bại: ' + err.message)
  }
}
</script>
