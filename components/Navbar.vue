<template>
  <!-- Navbar goes here -->
  <nav class="bg-white text-black shadow-lg md:shadow-none">
    <div class="mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex flex-1 space-x-7 justify-between">
          <div class="flex items-center justify-center py-4 lg:py-0">
            <!-- Website Logo -->
            <NuxtLink to="/" class="">
              <img
                src="/logo.webp"
                alt="Logo"
                class="h-6 lg:h-10 mr-2 lg:mr-0"
              />
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
              to="/collection"
              class="
                py-4
                px-2
                uppercase
                font-normal
                hover:text-primary
                transition
                duration-300
              "
              >Collection</NuxtLink
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
        <div class="hidden lg:flex items-center space-x-3">
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
            aria-label="Menu Icon"
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
    <div :class="isOpen ? 'block' : 'hidden'" class="mobile-menu transition">
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
            to="/collection"
            class="
              block
              text-sm
              px-2
              py-4
              hover:bg-primary
              transition
              duration-300
            "
            >Collection</NuxtLink
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
  data() {
    return {
      isOpen: false,
    }
  },
  watch: {
    $route() {
      this.isOpen = false
    },
  },
}
</script>

<style></style>
