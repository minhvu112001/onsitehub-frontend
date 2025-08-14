<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-2xl font-semibold mb-6">Bảng điều khiển quản trị</h1>

    <!-- Thống kê -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      <DashboardCard title="Người dùng" :value="stats.users" icon="👤" />
      <DashboardCard title="Nhà tuyển dụng" :value="stats.employers" icon="🏢" />
      <DashboardCard title="Job đã đăng" :value="stats.jobs" icon="📄" />
      <DashboardCard title="Ứng viên đã apply" :value="stats.applications" icon="📥" />
    </div>

    <!-- CRUD Job -->
    <div class="bg-white shadow p-4 rounded">
      <h2 class="text-xl font-bold mb-4">Quản lý Job</h2>

      <!-- Form thêm/sửa -->
      <form @submit.prevent="saveJob" class="flex flex-wrap gap-4 mb-4">
        <input
          v-model="form.title"
          type="text"
          placeholder="Tên công việc"
          class="border px-3 py-2 rounded flex-1"
          required
        />
        <input
          v-model="form.company"
          type="text"
          placeholder="Công ty"
          class="border px-3 py-2 rounded flex-1"
          required
        />
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {{ editIndex !== null ? 'Cập nhật' : 'Thêm mới' }}
        </button>
      </form>

      <!-- Bảng danh sách -->
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-200">
            <th class="p-2 border">#</th>
            <th class="p-2 border">Tên công việc</th>
            <th class="p-2 border">Công ty</th>
            <th class="p-2 border">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(job, index) in jobs" :key="index">
            <td class="p-2 border">{{ index + 1 }}</td>
            <td class="p-2 border">{{ job.title }}</td>
            <td class="p-2 border">{{ job.company }}</td>
            <td class="p-2 border space-x-2">
              <button
                @click="editJob(index)"
                class="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Sửa
              </button>
              <button
                @click="deleteJob(index)"
                class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Xóa
              </button>
            </td>
          </tr>
          <tr v-if="jobs.length === 0">
            <td colspan="4" class="p-2 text-center text-gray-500">Chưa có job nào</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DashboardCard from '@/components/admin/DashboardCard.vue'

const stats = ref({
  users: 0,
  employers: 0,
  jobs: 0,
  applications: 0
})

// Dữ liệu job giả lập
const jobs = ref([
  { title: 'Frontend Developer', company: 'Công ty ABC' },
  { title: 'Backend Developer', company: 'Công ty XYZ' }
])

const form = ref({ title: '', company: '' })
const editIndex = ref(null)

const saveJob = () => {
  if (editIndex.value !== null) {
    jobs.value[editIndex.value] = { ...form.value }
    editIndex.value = null
  } else {
    jobs.value.push({ ...form.value })
  }
  form.value = { title: '', company: '' }
  stats.value.jobs = jobs.value.length
}

const editJob = (index) => {
  form.value = { ...jobs.value[index] }
  editIndex.value = index
}

const deleteJob = (index) => {
  jobs.value.splice(index, 1)
  stats.value.jobs = jobs.value.length
}

const fetchStats = () => {
  stats.value = {
    users: 1234,
    employers: 58,
    jobs: jobs.value.length,
    applications: 1376
  }
}

onMounted(fetchStats)
</script>
