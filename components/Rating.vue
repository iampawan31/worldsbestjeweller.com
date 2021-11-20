<template>
  <div class="flex my-4 lg:my-10">
    <div v-for="n in 5" :key="n">
      <font-awesome-icon size="lg:4x" class="text-primary" :icon="faStar" />
    </div>
  </div>
</template>

<script>
import { faStar } from '@fortawesome/free-solid-svg-icons'
export default {
  props: {
    size: {
      type: String,
      default: 'fa-sm',
    },
    rating: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    faStar() {
      return faStar
    },
  },
}
</script>

<style></style>
