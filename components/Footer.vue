<template>
  <div class="py-10 bg-black text-white">
    <div class="container mx-auto px-4 lg:px-48">
      <div class="flex flex-col justify-center items-center space-y-4">
        <div>
          <img
            src="/logo-white.webp"
            class="w-48 lg:w-72 p-1 bg-opacity-50"
            alt=""
          />
        </div>
        <div class="flex flex-row space-x-2 lg:space-x-4">
          <NuxtLink
            to="/"
            class="
              hover:text-primary
              transition
              text-xs
              lg:text-lg
              font-light
              uppercase
            "
            >Home</NuxtLink
          >
          <NuxtLink
            to="/our-legacy"
            class="
              hover:text-primary
              transition
              text-xs
              lg:text-lg
              font-light
              uppercase
            "
            >Our legacy</NuxtLink
          >
          <NuxtLink
            to="/collection"
            class="
              hover:text-primary
              transition
              text-xs
              lg:text-lg
              font-light
              uppercase
            "
            >Collection</NuxtLink
          >
          <NuxtLink
            to="/contact"
            class="
              hover:text-primary
              transition
              text-xs
              lg:text-lg
              font-light
              uppercase
            "
            >Contact</NuxtLink
          >
        </div>
        <div class="flex justify-center items-center space-x-4">
          <a
            href="http://instagram.com/jhaverinalin"
            aria-label="Instagram"
            target="_blank"
            ><font-awesome-icon
              size="2x"
              :icon="faInstagram"
            ></font-awesome-icon
          ></a>
          <a
            href="https://www.facebook.com/nalinjhaveri"
            aria-label="Facebook"
            target="_blank"
            ><font-awesome-icon size="2x" :icon="faFacebook"></font-awesome-icon
          ></a>
        </div>
        <div class="text-xs lg:text-base">
          All rights reserved. Lustrous Gems Group
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
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style></style>
