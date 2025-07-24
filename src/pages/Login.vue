
<template>
  <MainLayout>
    <div class="max-w-md mx-auto mt-8">
      <h2 class="text-2xl font-bold mb-4">Đăng nhập</h2>
      <form class="space-y-4">
        <input type="email" placeholder="Email" class="w-full p-2 border rounded" />
        <input type="password" placeholder="Mật khẩu" class="w-full p-2 border rounded" />
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded">Đăng nhập</button>
      </form>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'
</script>
