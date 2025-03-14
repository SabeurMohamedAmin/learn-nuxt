<script setup>
const colorMode = useColorMode()
</script>

<template>
  <TheHeader />
  <main class="container mx-auto mt-4 p-4 lg:px-8 xs:max-w-none">
    <NuxtPage :pageTransition="{
      name: 'bounce', mode: 'out-in'
    }" />
  </main>
  <footer class="bg-color-modes text-white text-center p-4">
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


:root {
  --color: #243746;
  --color-primary: #158876;
  --color-secondary: #0e2233;
  --bg: #f3f5f4;
  --bg-secondary: #fff;
  --border-color: #bab8b89f;
  --bg-color-secondary: #dedede;
  --bg-menu: #a5a2a2;
}

.dark-mode {
  --color: #ebf4f1;
  --color-primary: #41b38a;
  --color-secondary: #fdf9f3;
  --bg: #091a28;
  --bg-secondary: #071521;
  --border-color: #0d2538;
  --bg-color-secondary: #071521;
  --bg-menu: #071521;
}

.sepia-mode {
  --color: #433422;
  --color-secondary: #504231;
  --bg: #f1e7d0;
  --bg-secondary: #eae0c9;
  --border-color: #cbbdac;
  --bg-color-secondary: #d7d1c5;
  --bg-menu: #504c42;
}

.bg-color-secondary {
  background-color: var(--bg-color-secondary);
}

.border-color-modes {
  border-color: var(--border-color);
}

.bg-menu-modes {
  background-color: var(--bg-menu);
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: var(--bg);
  color: var(--color);
  transition: background-color 0.3s;
}

a {
  color: var(--color-primary);
  text-decoration: underline;
}

p {
  padding: 1.25rem;
  /* Equivalent to Tailwind's p-5 */
}
</style>