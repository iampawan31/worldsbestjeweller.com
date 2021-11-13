<template>
  <div>
    <div class="group relative mb-4">
      <img
        class="w-72 h-96 object-cover"
        :src="product.images"
        :alt="product.name"
      />
      <div
        class="
          transition
          opacity-0
          absolute
          bottom-5
          transform
          group-hover:-translate-y-6
          uppercase
          group-hover:opacity-100
          mx-6
          left-auto
          right-auto
          w-3/4
          px-8
          py-4
          z-50
          bg-white
        "
      >
        View Product
      </div>
    </div>
    <div class="text-left text-lg">{{ product.name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style></style>
