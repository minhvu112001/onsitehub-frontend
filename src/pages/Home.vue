<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Navbar -->
    <nav class="bg-white shadow p-4 flex justify-between items-center">
      <h1 class="text-xl font-bold">OnsiteHub</h1>

      <div class="space-x-4">
        <template v-if="!isLoggedIn">
          <router-link
            to="/login"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Đăng nhập
          </router-link>
          <router-link
            to="/register"
            class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Đăng ký
          </router-link>
        </template>

        <template v-else>
          <router-link
            to="/dashboard"
            class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Dashboard
          </router-link>
          <button
            @click="logout"
            class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Đăng xuất
          </button>
        </template>
      </div>
    </nav>

    <!-- Nội dung trang chủ -->
    <div class="p-6 text-center">
      <h2 class="text-3xl font-semibold mb-4">Chào mừng đến OnsiteHub</h2>
      <p class="text-gray-700 max-w-2xl mx-auto">
        Kết nối ứng viên sẵn sàng onsite với nhà tuyển dụng trên toàn quốc. 
        Tìm kiếm công việc mơ ước hoặc đăng tin tuyển dụng chỉ trong vài phút.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoggedIn = ref(false)

onMounted(() => {
  isLoggedIn.value = !!localStorage.getItem('token')
})

const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('email')
  isLoggedIn.value = false
  router.push('/login')
}
</script>
