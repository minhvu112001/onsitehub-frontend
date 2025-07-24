<template>
  <div class="bg-white p-5 rounded-xl shadow-md flex items-center space-x-4">
    <div class="text-3xl">{{ icon }}</div>
    <div>
      <h3 class="text-sm text-gray-500">{{ title }}</h3>
      <p class="text-xl font-semibold">{{ value }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
  icon: String
})
</script>
