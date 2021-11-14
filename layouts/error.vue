<template>
  <div class="h-screen container mx-auto">
    <div
      class="
        flex flex-col
        text-center
        justify-center
        h-screen
        flex-wrap
        align-middle
        content-center
      "
    >
      <div class="text-center">
        <font-awesome-icon
          size="4x"
          class="my-6 text-center"
          :icon="faExclamationCircle"
        ></font-awesome-icon>
      </div>
      <h1 v-if="error.statusCode === 404" class="text-5xl font-bold uppercase">
        Page not found
      </h1>
      <h1 v-else class="text-5xl font-bold uppercase">An error occurred</h1>
      <NuxtLink
        to="/"
        class="
          bg-primary
          rounded-md
          shadow-md
          uppercase
          text-xl
          my-10
          px-10
          py-4
          font-light
        "
        >Go To Home</NuxtLink
      >
    </div>
  </div>
</template>

<script>
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
export default {
  props: ['error'],
  layout: 'error',
  computed: {
    faExclamationCircle() {
      return faExclamationCircle
    },
  },
}
</script>
