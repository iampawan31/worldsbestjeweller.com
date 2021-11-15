<template>
  <div>
    <div class="shadow-md h-96 rounded-md border border-gray">
      <div class="group relative mb-4">
        <img
          class="w-full h-96 object-cover rounded-md"
          :src="product.images"
          :alt="product.name"
        />
        <NuxtLink
          :to="productUrl"
          class="
            block
            transition
            opacity-100
            lg:opacity-0
            absolute
            bottom-0
            transform
            lg:group-hover:-translate-y-6
            uppercase
            lg:group-hover:opacity-100
            left-auto
            text-center
            right-auto
            w-full
            px-8
            py-4
            rounded-bl-md rounded-br-md
            z-50
            bg-primary
            text-black
          "
        >
          View Product
        </NuxtLink>
      </div>
      <div v-if="showName" class="text-left text-lg">{{ product.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: null,
    },
    showName: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    productUrl() {
      return `/products/${this.product.slug}`
    },
  },
}
</script>

<style></style>
