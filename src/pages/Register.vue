<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md p-6 bg-white rounded-xl shadow-md">
      <h2 class="text-2xl font-semibold text-center mb-6">Đăng ký tài khoản</h2>
      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label class="block text-gray-700 mb-1" for="name">Họ và tên</label>
          <input v-model="form.name" type="text" id="name" class="input" required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 mb-1" for="email">Email</label>
          <input v-model="form.email" type="email" id="email" class="input" required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 mb-1" for="password">Mật khẩu</label>
          <input v-model="form.password" type="password" id="password" class="input" required />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 mb-1" for="password_confirmation">Xác nhận mật khẩu</label>
          <input v-model="form.password_confirmation" type="password" id="password_confirmation" class="input" required />
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Đăng ký
        </button>
        <p class="mt-4 text-sm text-center text-gray-600">
          Đã có tài khoản? <router-link to="/login" class="text-blue-600 hover:underline">Đăng nhập</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = useAuthStore()

const form = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})

const handleRegister = async () => {
  try {
    await auth.register(form)
    router.push('/dashboard') // hoặc trang chính sau khi đăng ký
  } catch (error) {
    console.error('Lỗi đăng ký:', error)
    alert(error?.response?.data?.message || 'Đăng ký thất bại.')
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 1px solid #d1d5db; /* Tailwind's border-gray-300 */
  border-radius: 0.5rem; /* Tailwind's rounded-lg */
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.input:focus {
  border-color: #60a5fa; /* Tailwind's border-blue-400 */
  box-shadow: 0 0 0 1px #60a5fa;
}
</style>
