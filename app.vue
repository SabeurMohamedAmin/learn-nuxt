<script setup>
const colorMode = useColorMode()
</script>

<template>
  <TheHeader />
  <main class="container mx-auto mt-4 p-4 lg:px-8 xs:max-w-none">
    <NuxtPage />
  </main>
  <footer class="bg-gray-800 text-white text-center p-4">
    <div>
      <select v-model="$colorMode.preference"
        class="p-2 bg-gray-900 text-white rounded">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>

    <p>&copy; 2021</p>
  </footer>
</template>

<style>
pre::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

pre::-webkit-scrollbar-track {
  background-color: #f9f9f900;

}

pre::-webkit-scrollbar-thumb {
  background-color: #4944542c;
  border-radius: 0 0 10px 10px;
}

pre.onhover::-webkit-scrollbar-thumb {
  background-color: #4944548e;
}


body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}

.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>