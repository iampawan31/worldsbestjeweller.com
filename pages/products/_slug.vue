<template>
  <div class="container mx-auto py-16 lg:py-24">
    <div
      v-if="product.length > 0"
      class="grid grid-cols-1 md:grid-cols-12 gap-16"
    >
      <div class="h-auto md:col-span-5 px-2 lg:px-0">
        <img
          :src="productImageUrl"
          :alt="productName"
          class="
            w-full
            h-auto
            object-cover
            rounded-md
            border border-gray
            shadow-md
          "
        />
      </div>
      <div class="md:col-span-7 px-2 lg:px-0">
        <div class="text-4xl font-light mb-4">
          {{ productName }}
        </div>
        <div class="flex flex-col lg:flex-row space-y-2 lg:space-x-4 mb-4">
          <div
            v-for="(category, index) in productCategories"
            :key="index"
            class="
              border border-gray
              bg-primary
              rounded-md
              bg-opacity-40
              px-2
              py-1
            "
          >
            {{ category }}
          </div>
        </div>
        <div class="text-xl mb-6 lg:mb-10">SKU: {{ productSku }}</div>
        <div class="text-2xl font-semi">Product Description:</div>
        <div class="font-normal mb-4">
          {{ productDescription }}
        </div>
        <div class="mb-4 text-2xl font-semi">Additional Information:</div>
        <div class="mb-4">
          <span class="font-bold uppercase">Collection:</span>
          {{ productCategories.join(', ') }}
        </div>
        <div class="mb-4">
          <span class="font-bold uppercase">Gems:</span>
          {{ productGems.join(', ') }}
        </div>
        <div class="mb-4">
          <span class="font-bold uppercase">Jewellery Type:</span>
          {{ productJewellery.join(', ') }}
        </div>
      </div>
    </div>
    <div
      class="
        mx-2
        px-4
        py-4
        text-xl
        lg:text-center lg:text-3xl
        font-light
        lg:px-48 lg:py-10
        bg-gray
        my-10
        rounded-md
        shadow
      "
    >
      For more information or custom requests, reach us at +91-98201-10051 or
      email us at info@worldsbestjeweller.com
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $content, error }) {
    const slug = params.slug // When calling /abc the slug will be "abc"
    let product
    try {
      product = await $content('products').where({ slug }).fetch()
    } catch (e) {
      return error({ message: 'Product not found' })
    }
    return {
      product,
    }
  },
  computed: {
    productName() {
      return this.product[0].name
    },
    productImageUrl() {
      return this.product[0].images
    },
    productDescription() {
      return this.product[0].description
    },
    productCategories() {
      return this.product[0].categories
    },
    productGems() {
      return this.product[0].gems
    },
    productJewellery() {
      return this.product[0].jewellery
    },
    productSku() {
      return this.product[0].sku
    },
  },
}
</script>

<style></style>
