<script setup>
const clickToCopy = (event)=>{
  const el =  event.srcElement.innerText;
  navigator.clipboard.writeText(el);
}

</script>

<template>
  <!-- Init & Install Nuxt3 -->
    <h1 class="text-xl mb-2">
      How to start with Nuxt 3, Vue 3 and Vite
    </h1>
    <div>
      <p class="my-1">
        to start with Nuxt 3, you can use the following command
        <a
          class="text-blue-700 hover:scale-105 inline-block"
          href="https://nuxt.com"
          title="nuxt official web page"
        >
          lien&#128279;
        </a>
        :
      </p>
      <ul class="font-bold bg-gray-200 p-2 rounded-lg border-2 border-slate-300">
        <li 
          @click="clickToCopy($event)"
          title="click to copy the command"
          class="cursor-pointer rounded-md p-1 border w-fit hover:border-sky-500 active:bg-sky-200"
        >
            npx nuxi@latest init learn-nuxt
        </li>
        <li 
          @click="clickToCopy($event)"
          title="click to copy the command"
          class="cursor-pointer rounded-md p-1 border w-fit	hover:border-sky-500 active:bg-sky-200"
        >
          cd learn-nuxt
        </li>
        <li 
          @click="clickToCopy($event)"
          title="click to copy the command"
          class="cursor-pointer rounded-md p-1 border w-fit	hover:border-sky-500 active:bg-sky-200 "
        >
          npm run dev
        </li>
      </ul>
    </div>
    <span class="border-2 border-gray-300 m-6 block"></span>
  <!-- Add Tailwind CSS -->
    <h2  class="text-xl mb-2">
      add Tailwind CSS to Nuxt 3
    </h2>
    <div>
      <p class="my-1">
        now to add tailwindscss for styling our nuxt3 app, you use the following command:
      </p>
      <ul class="font-bold bg-gray-200 p-2 rounded-lg border-2 border-slate-300">
        <li 
          @click="clickToCopy($event)"
          title="click to copy the command"
          class="cursor-pointer rounded-md p-1 border w-fit	hover:border-sky-500 active:bg-sky-200 "
        >
          pnpm i -D @nuxtjs/tailwindcss
        </li>
      </ul>
    </div>
  </template>

<style scoped>
</style>
