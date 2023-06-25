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
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
          </a>
          <!-- Close mobile menu button, show/hide based on slide-over state. -->
          <button
            @click.stop.prevent="emit('close-menu')"
            type="button"
            class="-m-2.5 border-2 rounded-lg p-2.5 text-gray-700"
          >
            <span class="sr-only">Close menu</span>
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
                  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Analytics</a>
                  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Engagement</a>
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
