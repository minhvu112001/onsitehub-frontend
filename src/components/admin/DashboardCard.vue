<template>
  <div class="bg-white p-5 rounded-xl shadow-md flex items-center space-x-4 w-full">
    <div class="text-3xl">
      {{ icon }}
    </div>
    <div class="flex flex-col">
      <h3 class="text-sm text-gray-500">{{ title }}</h3>
      <p class="text-xl font-semibold">{{ value }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    default: 0
  },
  icon: {
    type: String,
    default: '📦'
  }
})
</script>

<style scoped>
</style>
