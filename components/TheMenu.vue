<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Reference to the menu HTML element 'Basics Nuxt 3'
const basicMenu = ref(null);

// Function to handle click outside the menu and close it if it's open
const handleClickOutside = () => {
  const isDisplayBasicMenu = !basicMenu.value.classList.contains('hidden');
  if (isDisplayBasicMenu) {
    useToggleMenu(basicMenu.value);
  }
};

// Register click event listener when the component is mounted
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

// Unregister click event listener when the component is unmounted
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <main class="hidden lg:flex lg:gap-x-12 border-4">
  <!-- Basics_of_learning_Naxt_3_Menu-->
    <nav class="relative" name="Basics_of_learning_Naxt_3_Menu">
      <button
        @click.stop.prevent="useToggleMenu(basicMenu)"
        type="button" 
        aria-expanded="false"
        class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 hover:scale-110"
      >
        Basics Nuxt 3
        <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        </svg>
      </button>
      <!--
        'Product' flyout menu, show/hide based on flyout menu state.

        Entering: "transition ease-out duration-200"
        From: "opacity-0 translate-y-1"
        To: "opacity-100 translate-y-0"
        Leaving: "transition ease-in duration-150"
        From: "opacity-100 translate-y-0"
        To: "opacity-0 translate-y-1"
      -->
      <section
        name="menu_basic_nuxt_3"
        ref="basicMenu"
        class="hidden absolute -left-8 border-2 top-full z-10 mt-3 w-screen max-w-md overflow-hidden 
          rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
      >
        <ul class="p-4" >
        <!-- First item in menu -->
          <li class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                  </svg>
                </div>
                <div class="flex-auto">
                  <NuxtLink href="/install-nuxt" class="block font-semibold text-gray-900">
                    Install Nuxt 3
                    <span class="absolute inset-0"></span>
                  </NuxtLink>
                  <p class="mt-1 text-gray-800 font-light">First step is install and config nuxt and other libraries</p>
                </div>
          </li>
          <!-- Seconde item in menu -->
          <li class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                  </svg>
                </div>
                <div class="flex-auto">
                  <a href="#" class="block font-semibold text-gray-900">
                    Engagement
                    <span class="absolute inset-0"></span>
                  </a>
                  <p class="mt-1 text-gray-600">Speak directly to your customers</p>
                </div>
          </li>
            <!-- third item in menu -->
          <li class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                  </svg>
                </div>
                <div class="flex-auto">
                  <a href="#" class="block font-semibold text-gray-900">
                    Security
                    <span class="absolute inset-0"></span>
                  </a>
                  <p class="mt-1 text-gray-600">Your customers’ data will be safe and secure</p>
                </div>
          </li>
        </ul>
        <ul class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
          <a href="#" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z" clip-rule="evenodd" />
                </svg>
                Watch demo
          </a>
          <a href="#" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
                </svg>
                Contact sales
          </a>
        </ul>
      </section>
    </nav>
    <!-- Product Menu-->
    <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
      Features
    </a>
    <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
      Marketplace
    </a>
    <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
      Company
    </a>
  </main>
</template>

<style scoped></style>
