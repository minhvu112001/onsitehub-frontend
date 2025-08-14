<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-2xl font-semibold mb-6">Bảng điều khiển quản trị</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <DashboardCard title="Người dùng" :value="stats.users" icon="👤" />
      <DashboardCard title="Nhà tuyển dụng" :value="stats.employers" icon="🏢" />
      <DashboardCard title="Job đã đăng" :value="stats.jobs" icon="📄" />
      <DashboardCard title="Ứng viên đã apply" :value="stats.applications" icon="📥" />
    </div>

    <div class="mt-10">
      <h2 class="text-lg font-medium mb-4">Hệ thống</h2>
      <p class="text-sm text-gray-700">
        Chào mừng bạn đến với bảng điều khiển quản trị OnsiteHub. Tại đây bạn có thể theo dõi tình trạng hệ thống, phê duyệt nhà tuyển dụng, xử lý khiếu nại, và xem thống kê tổng quan.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DashboardCard from '@/components/admin/DashboardCard.vue'
// import axios from 'axios' // Dùng khi có API thật

const stats = ref({
  users: 0,
  employers: 0,
  jobs: 0,
  applications: 0
})

const fetchStats = async () => {
  try {
    // 🔹 Giả lập dữ liệu (thay bằng API thật khi có backend)
    // const res = await axios.get('/api/admin/stats')
    // stats.value = res.data

    stats.value = {
      users: 1234,
      employers: 58,
      jobs: 420,
      applications: 1376
    }
  } catch (err) {
    console.error('Lỗi tải thống kê:', err)
  }
}

onMounted(fetchStats)
</script>
