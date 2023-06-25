<script setup>
import { ref} from 'vue';
// Reference to the mobile menu HTML element
const mobileMenu = ref(null);
// Function to handle click outside the menu and close it if it's open
const handleClickOutside = () => {
  const isDisplayBasicMenu = !basicMenu.value.classList.contains('hidden');
  if (isDisplayBasicMenu) {
    useToggleMenu(basicMenu.value);
  }
};

</script>

<template>
  <header class="bg-white">
    <!-- lg screen menu, show/hide based on screen size. -->
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <TheLogo />
      </div>
      <TheHumburguerMenu @menu-toggle="useToggleMenu(mobileMenu)"/>
      <TheMenu/>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <section class="lg:hidden hidden" ref="mobileMenu" >
      <MobileMenu @close-menu="useToggleMenu(mobileMenu)" />
    </section>
  </header>
</template>
