<template>
  <!-- Navbar goes here -->
  <nav class="bg-white text-black shadow-lg">
    <div class="mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex flex-1 space-x-7 justify-between">
          <div>
            <!-- Website Logo -->
            <NuxtLink to="/" class="flex items-center py-4 px-2">
              <img src="/logo.png" alt="Logo" class="h-6 lg:h-8 mr-2" />
            </NuxtLink>
          </div>
          <!-- Primary Navbar items -->
          <div class="hidden md:flex items-center space-x-1">
            <NuxtLink
              to="/"
              class="
                py-4
                px-2
                uppercase
                font-normal
                hover:text-primary
                transition
                duration-300
              "
              >Home</NuxtLink
            >
            <NuxtLink
              to="/our-legacy"
              class="
                py-4
                px-2
                uppercase
                font-normal
                hover:text-primary
                transition
                duration-300
              "
              >Our Legacy</NuxtLink
            >
            <NuxtLink
              to="/collection-2021"
              class="
                py-4
                px-2
                uppercase
                font-normal
                hover:text-primary
                transition
                duration-300
              "
              >Collection 2021</NuxtLink
            >
            <NuxtLink
              to="/contact"
              class="
                py-4
                px-2
                uppercase
                font-normal
                hover:text-primary
                transition
                duration-300
              "
              >Contact</NuxtLink
            >
          </div>
        </div>
        <!-- Secondary Navbar items -->
        <div class="hidden md:flex items-center space-x-3">
          <a
            href="tel:+919820110051"
            class="
              py-2
              px-2
              rounded
              hover:text-primary
              transition
              duration-300
              font-normal
            "
            >+91-98201-10051</a
          >
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button
            class="outline-none mobile-menu-button"
            @click="isOpen = !isOpen"
          >
            <svg
              class="w-6 h-6 text-gray-500 hover:text-green-500"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div :class="isOpen ? 'block' : 'hidden'" class="mobile-menu">
      <ul class="">
        <li class="active">
          <NuxtLink to="/" class="block text-sm px-2 py-4 hover:bg-primary"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/our-legacy"
            class="
              block
              text-sm
              px-2
              py-4
              hover:bg-primary
              transition
              duration-300
            "
            >Our Legacy</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/collection-2021"
            class="
              block
              text-sm
              px-2
              py-4
              hover:bg-primary
              transition
              duration-300
            "
            >Collection 2021</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/contact"
            class="
              block
              text-sm
              px-2
              py-4
              hover:bg-primary
              transition
              duration-300
            "
            >Contact</NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    this.isOpen = false
  },
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<style></style>
