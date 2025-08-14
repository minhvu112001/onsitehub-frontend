<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Chào mừng đến OnsiteHub</h1>

    <div class="space-x-4">
      <button
        @click="goLogin"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Đăng nhập
      </button>

      <button
        @click="goRegister"
        class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Đăng ký
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goLogin = () => {
  router.push('/login')
}

const goRegister = () => {
  router.push('/register')
}
</script>
