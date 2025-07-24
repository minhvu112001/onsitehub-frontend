
<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-blue-600 text-white p-4">
      <h1 class="text-xl font-bold">OnsiteHub</h1>
    </header>
    <main class="flex-1 p-4">
      <slot />
    </main>
    <footer class="bg-gray-100 text-center p-2 text-sm">
      © 2025 OnsiteHub
    </footer>
  </div>
</template>
