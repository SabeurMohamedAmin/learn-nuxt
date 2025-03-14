<script setup>
import { ref } from 'vue';
const emit = defineEmits(['close-menu']);
const basicMenu = ref(null);
</script>

<template>
  <section
    ref="mobileMenu"
    class="lg:hidden"
    role="dialog" aria-modal="true"
  >
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <div
      @click.stop.prevent="emit('close-menu')"
      class="fixed inset-0 z-10 bg-gray-400 bg-opacity-50 transition-opacity lg:hidden"
    >
    </div>
      <main class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <section class="flex items-center justify-between">
          <NuxtLink href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
          </NuxtLink>
          <!-- Close mobile menu button, show/hide based on slide-over state. -->
          <button
            @click.stop.prevent="emit('close-menu')"
            type="button"
            class="-m-2.5 border-2 rounded-lg p-2.5 text-gray-700"
          >
            <span class="sr-only">
              Close menu
            </span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </section>
        <!--Navigation menu-->
        <nav class="mt-6 flow-root ">
          <div class="-my-6 divide-y divide-gray-500/10">
            <ul class="space-y-2 py-6 l">
              <section class="-mx-3 border rounded-md ">
                <button
                  @click.stop.prevent="useToggleMenu(basicMenu)"
                  type="button"
                  aria-controls="disclosure-1" aria-expanded="false"
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base
                    font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Basics Nuxt 3
                  <!--
                    Expand/collapse icon, toggle classes based on menu open state.

                    Open: "rotate-180", Closed: ""
                  -->
                  <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
                </button>
                <!-- 'Product' sub-menu, show/hide based on menu state. -->
                <ul ref='basicMenu' class="mt-2 space-y-2 " id="disclosure-1">
                  <!-- First item in menu -->
                  <li class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 border border-transparentactive:bg-gray-50 active:border-sky-500">
                    <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-active:bg-white">
                      <svg class="group-active:text-sky-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M14.07 15.23c.12-.39.18-.8.18-1.23c0-.43-.06-.84-.18-1.23l1.49-1.13l-.73-1.27l-1.73.73c-.56-.6-1.3-1.04-2.13-1.23L10.73 8H9.27l-.24 1.86c-.83.19-1.57.63-2.13 1.23l-1.73-.73l-.73 1.27l1.49 1.13c-.12.39-.18.8-.18 1.23c0 .43.06.84.18 1.23l-1.49 1.13l.73 1.27l1.73-.73c.56.6 1.3 1.04 2.13 1.23L9.27 20h1.47l.23-1.86c.83-.19 1.57-.63 2.13-1.23l1.73.73l.73-1.27l-1.49-1.14zM10 17c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z" opacity=".3"/>
                        <path fill="currentColor" d="M10 13c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3zm8.5-2l1.09-2.41L22 5.5l-2.41-1.09L18.5 2l-1.09 2.41L15 5.5l2.41 1.09L18.5 9zm2.78 3.72L20.5 11l-.78 1.72l-1.72.78l1.72.78l.78 1.72l.78-1.72L23 13.5l-1.72-.78zM16.25 14c0-.12 0-.25-.01-.37l1.94-1.47l-2.5-4.33l-2.24.94c-.2-.13-.42-.26-.64-.37L12.5 6h-5l-.3 2.41c-.22.11-.43.24-.64.37l-2.24-.95l-2.5 4.33l1.94 1.47c-.01.12-.01.25-.01.37s0 .25.01.37l-1.94 1.47l2.5 4.33l2.24-.94c.2.13.42.26.64.37l.3 2.4h5l.3-2.41c.22-.11.43-.23.64-.37l2.24.94l2.5-4.33l-1.94-1.47c.01-.11.01-.24.01-.36zm-1.42 3.64l-1.73-.73c-.56.6-1.3 1.04-2.13 1.23L10.73 20H9.27l-.23-1.86c-.83-.19-1.57-.63-2.13-1.23l-1.73.73l-.73-1.27l1.49-1.13c-.12-.39-.18-.8-.18-1.23c0-.43.06-.84.18-1.23l-1.49-1.13l.73-1.27l1.73.73c.56-.6 1.3-1.04 2.13-1.23L9.27 8h1.47l.23 1.86c.83.19 1.57.63 2.13 1.23l1.73-.73l.73 1.27l-1.49 1.13c.12.39.18.8.18 1.23c0 .43-.06.84-.18 1.23l1.49 1.13l-.73 1.29z"/>
                      </svg>
                    </div>
                    <div class="flex-auto">
                      <NuxtLink href="/basic/install-nuxt" class="block font-semibold text-gray-900">
                        Install Nuxt 3
                        <span class="absolute inset-0"></span>
                      </NuxtLink>
                      <p class="mt-1 text-gray-800 font-light">First step is install and config nuxt and other libraries</p>
                    </div>
                  </li>
                  <li class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 border border-transparentactive:bg-gray-50 active:border-sky-500">
                    <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-active:bg-white">
                      <svg class="group-active:text-sky-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M15 15H5v4h14v-4h-4zm-7 3H6v-2h2v2zm3.5 0h-2v-2h2v2zm3.5 0h-2v-2h2v2z" opacity=".3"/>
                        <path fill="currentColor" d="M16 4.2c1.5 0 3 .6 4.2 1.7l.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2zm-3.3 2.5l.8.8c.7-.7 1.6-1 2.5-1s1.8.3 2.5 1l.8-.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm0 6H5v-4h14v4zM6 16h2v2H6zm3.5 0h2v2h-2zm3.5 0h2v2h-2z"/>
                      </svg>
                    </div>
                    <div class="flex-auto">
                      <NuxtLink href="/basic/pages-nuxt" class="block font-semibold text-gray-900">
                        Routers and Pages Nuxt 3
                        <span class="absolute inset-0"></span>
                      </NuxtLink>
                      <p class="mt-1 text-gray-600">Speak directly to your customers</p>
                    </div>
                  </li>
                  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Security</a>
                  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Integrations</a>
                  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Automations</a>
                  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Watch demo</a>
                  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact sales</a>
                </ul>
              </section>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Features
              </a>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Marketplace
              </a>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Company
              </a>
            </ul>
            <!--Login Link-->
            <div class="py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Log in
              </a>
            </div>
          </div>
        </nav>
      </main>
    </section>
</template>

<style scoped>
/* CSS styles for custom scroll bar go here */
  /* Hide the default scroll bar */
::-webkit-scrollbar {
    width: 0.6em;
    border-radius: 7px;
  }
  /* Track */
::-webkit-scrollbar-track {
  border-radius: 7px;
  margin-top:80px;
  box-shadow: inset 1px 0px 5px rgba(0, 0, 0, 0.15), inset -1px 0px 1px rgba(0, 0, 0, 0.1);
}
::-webkit-scrollbar-track:hover {
  box-shadow: inset 2px 0px 7px rgba(0, 0, 0, 0.15), inset -2px 0px 2px rgba(0, 0, 0, 0.1);
}
  ::-webkit-scrollbar-track:active {
    box-shadow: inset 2px 0px 7px rgba(0, 0, 0, 0.2), inset -2px 0px 2px rgba(0, 0, 0, 0.15);
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 2px 4px 16px rgba(0, 0, 0, 0.02), inset -2px 0px 2px rgba(0, 0, 0, 0.15);
    background: linear-gradient(180deg,  #f7f7f710, #ffffff30, #ffffff30, #97979730);
    border-radius: 7px;
    border: 1px solid #5a5a5a20;
  }
  ::-webkit-scrollbar-thumb:active {
    box-shadow: inset 2px 4px 16px rgba(0, 0, 0, 0.02), inset -2px 0px 2px rgba(0, 0, 0, 0.15);
    background: linear-gradient(180deg,  #f7f7f710, #ffffff30, #97979730);
    border-radius: 7px;
    border: 1px solid #5a5a5a20;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    box-shadow: inset 2px 4px 16px rgba(0, 0, 0, 0.02), inset -2px 0px 2px rgba(0, 0, 0, 0.15);
    border-radius: 7px;
    border: 1px solid #36363620;
    background-color: #4b4b4b0b;
  }
  
/* Loading indicator */
.loading-class::after {
  content: ' LOADING...';
  background: #030731dc;
  color: aliceblue;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
}
.loading-class::before {
  content: '';
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 4rem;
  height: 4rem;
  outline: 2px outset rgba(139, 139, 187, 0.4);
  border: 5px solid #e70303;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 1s infinite linear;
  z-index: 9999;
  transform: translate(-50%, -200%);
}

@keyframes spin {
  0% {
    transform: translate(-50%, -200%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -200%) rotate(360deg);
  }
}

</style>
