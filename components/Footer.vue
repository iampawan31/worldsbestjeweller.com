<template>
  <div class="py-10">
    <div class="container mx-auto px-48">
      <div class="flex flex-col justify-center items-center space-y-4">
        <div>
          <img src="/logo.png" class="w-60 p-1 bg-opacity-50" alt="" />
        </div>
        <div class="flex flex-row space-x-4">
          <NuxtLink
            to="/"
            class="hover:text-primary transition text-lg font-light uppercase"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/our-legacy"
            class="hover:text-primary transition text-lg font-light uppercase"
            >Our legacy</NuxtLink
          >
          <NuxtLink
            to="/collection-2021"
            class="hover:text-primary transition text-lg font-light uppercase"
            >Collection 2021</NuxtLink
          >
          <NuxtLink
            to="/contact"
            class="hover:text-primary transition text-lg font-light uppercase"
            >Contact</NuxtLink
          >
        </div>
        <div class="flex justify-center items-center space-x-4">
          <a href="#"
            ><font-awesome-icon
              size="2x"
              :icon="faInstagram"
            ></font-awesome-icon
          ></a>
          <a href="https://www.facebook.com/nalinjhaveri" target="_blank"
            ><font-awesome-icon size="2x" :icon="faFacebook"></font-awesome-icon
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
export default {
  computed: {
    faInstagram() {
      return faInstagram
    },
    faFacebook() {
      return faFacebook
    },
  },
}
</script>

<style></style>
