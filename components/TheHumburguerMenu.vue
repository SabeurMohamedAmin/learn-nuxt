<script setup>
//  menu-toggle is the name of the event that will be emitted
//and used in the parent component <TheHeader.vue>
const emit = defineEmits(['menu-toggle']);
</script>

<template>
  <div class="flex lg:hidden">
    <button
      @click.stop.prevent="emit('menu-toggle')"
      type="button"
      class="border-2 rounded-lg -m-2.5 inline-flex items-center justify-center p-1.5 text-gray-700"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="h-9 w-9" fill="none" viewBox="0 0 24 24"
        stroke-width="1.5" stroke="currentColor" aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </div>
</template>