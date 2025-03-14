<template>
  <TheHeader />
  <main class="container mx-auto mt-4 p-4 lg:px-8 xs:max-w-none">
    <NuxtPage />
  </main>
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
    border-radius: 0  0 10px 10px;
  }

  pre.onhover::-webkit-scrollbar-thumb {
    background-color: #4944548e;
  }
</style>