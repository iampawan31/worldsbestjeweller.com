<template>
  <div>
    <!-- Main Slider -->
    <div></div>
    <MainSlider />
    <!-- Browse Collection -->
    <div class="container mx-auto py-16">
      <div class="text-center">
        <div class="font-light text-5xl">Browse Collection</div>
        <div class="grid grid-cols-4 py-10 gap-4">
          <Product
            v-for="(product, index) in products"
            :key="index"
            :product="product"
          />
        </div>
        <div class="mt-4">
          <NuxtLink
            to="/collection-2021"
            class="
              bg-primary
              text-black
              px-8
              py-4
              text-2xl
              hover:bg-black hover:text-primary
              transition
            "
            >Explore Collection Now
            <font-awesome-icon :icon="longArrow"></font-awesome-icon>
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- Testimonials -->
    <TestimonialSlider />
  </div>
</template>

<script>
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
export default {
  async asyncData({ $content, error }) {
    let products
    try {
      products = await $content('products').where({ isFeatured: true }).fetch()
    } catch (e) {
      return error({ message: 'Products not found' })
    }
    return {
      products,
    }
  },
  computed: {
    longArrow() {
      return faLongArrowAltRight
    },
  },
}
</script>
