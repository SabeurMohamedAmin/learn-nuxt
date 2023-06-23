<script setup>
//useClickToCopy($event) is a composable that accept the event
//object and copy the textContent of the event target
  const addClassonhover=(event)=>{
    event.srcElement.classList.add('onhover')
  }
  const removeClassonhover=(event)=>{
    event.srcElement.classList.remove('onhover')
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
          class="font-bold text-sky-600 hover:text-sky-800"
          href="https://nuxt.com"
          title="nuxt official web page"
        >
          Nuxt docs lien&#128279;
        </a>
        :
      </p>
      <ul class="font-bold bg-gray-200 p-2 rounded-lg border-2 border-slate-300">
        <li 
          @click="useClickToCopy($event)"
          title="click to copy the command"
          class="cursor-pointer rounded-md p-1 border w-fit hover:border-sky-500 active:bg-sky-200"
        >
            npx nuxi@latest init learn-nuxt
        </li>
        <li 
          @click="useClickToCopy($event)"
          title="click to copy the command"
          class="cursor-pointer rounded-md p-1 border w-fit	hover:border-sky-500 active:bg-sky-200"
        >
          cd learn-nuxt
        </li>
        <li 
          @click="useClickToCopy($event)"
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
          @click="useClickToCopy($event)"
          title="click to copy the command"
          class="cursor-pointer rounded-md p-1 border w-fit	hover:border-sky-500 active:bg-sky-200 "
        >
          pnpm i -D @nuxtjs/tailwindcss
        </li>
      </ul>
      <p class="my-1">
        after adding tailwindscss for styling our nuxt3 app, you can costumize it, create a file (next to package.json) and name it 
        <span
          @click="useClickToCopy($event)"
          title="click to copy the file name"
          class="cursor-pointer rounded-md font-bold border w-fit	hover:border-sky-500 active:bg-sky-200 "
        >
          tailwind.config.js
        </span>
        or
        <span
          @click="useClickToCopy($event)"
          title="click to copy the name"
          class="cursor-pointer rounded-md font-bold border w-fit	hover:border-sky-500 active:bg-sky-200 "
          >
          tailwind.config.ts
        </span>
        the file shuld be in the root of your project, 
        add the following code to your nuxt.config.js file:
      </p>
      <pre
        title="click to copy the code"
        @click="useClickToCopy($event)"
        @mouseenter="addClassonhover" @mouseleave="removeClassonhover"
        class="cursor-pointer bg-gray-200 p-2 pr-5 rounded-lg border-2 border-slate-300 overflow-auto"
      >
  // Docs: https://tailwindcss.com/docs/configuration
  import colors from "tailwindcss/colors";

  // Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
  export default{
  theme: {
    extend: {
      colors: {
        primary: colors.teal["500"],
      },
      backgroundColor: {
        primary: colors.teal["500"],
      },
    },
  },
  }
      </pre>
      <p class="my-1">
        you can add more costumizition to your tailwindcss, for more information, you can visit the following link:
        <a class="font-bold text-sky-600 hover:text-sky-800" href="https://tailwindcss.nuxtjs.org/">
          Nuxt Tailwind docs lien&#128279;
        </a>
      </p>
    </div>
</template>