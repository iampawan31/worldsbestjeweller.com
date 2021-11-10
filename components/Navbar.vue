<template>
  <!-- Navbar goes here -->
  <nav class="bg-white text-black shadow-lg">
    <div class="mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex flex-1 space-x-7 justify-between">
          <div>
            <!-- Website Logo -->
            <a href="#" class="flex items-center py-4 px-2">
              <img src="logo.png" alt="Logo" class="h-8 mr-2" />
            </a>
          </div>
          <!-- Primary Navbar items -->
          <div class="hidden md:flex items-center space-x-1">
            <a
              href=""
              class="
                py-4
                px-2
                uppercase
                hover:text-primary
                transition
                duration-300
              "
              >Home</a
            >
            <a
              href=""
              class="
                py-4
                px-2
                uppercase
                hover:text-primary
                transition
                duration-300
              "
              >Our Legacy</a
            >
            <a
              href=""
              class="
                py-4
                px-2
                uppercase
                hover:text-primary
                transition
                duration-300
              "
              >Collection 2021</a
            >
            <a
              href=""
              class="
                py-4
                px-2
                uppercase
                hover:text-primary
                transition
                duration-300
              "
              >Contact</a
            >
          </div>
        </div>
        <!-- Secondary Navbar items -->
        <div class="hidden md:flex items-center space-x-3">
          <a
            href="tel:+919820110051"
            class="py-2 px-2 rounded hover:text-primary transition duration-300"
            >+91-98201-10051</a
          >
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button class="outline-none mobile-menu-button">
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
    <div class="hidden mobile-menu">
      <ul class="">
        <li class="active">
          <a
            href="index.html"
            class="
              block
              text-sm
              px-2
              py-4
              text-white
              bg-green-500
              font-semibold
            "
            >Home</a
          >
        </li>
        <li>
          <a
            href="#services"
            class="
              block
              text-sm
              px-2
              py-4
              hover:bg-green-500
              transition
              duration-300
            "
            >Services</a
          >
        </li>
        <li>
          <a
            href="#about"
            class="
              block
              text-sm
              px-2
              py-4
              hover:bg-green-500
              transition
              duration-300
            "
            >About</a
          >
        </li>
        <li>
          <a
            href="#contact"
            class="
              block
              text-sm
              px-2
              py-4
              hover:bg-green-500
              transition
              duration-300
            "
            >Contact Us</a
          >
        </li>
      </ul>
    </div>
    <script>
      const btn = document.querySelector('button.mobile-menu-button')
      const menu = document.querySelector('.mobile-menu')

      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden')
      })
    </script>
  </nav>
</template>

<script>
export default {}
</script>

<style></style>
