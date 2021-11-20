<template>
  <div class="container mx-auto my-16">
    <div class="text-3xl lg:text-5xl font-light text-center mt-10 mb-24">
      Collection 2022
    </div>
    <div class="grid grid-cols-4 gap-10">
      <div class="hidden lg:block h-auto px-4 pb-6">
        <div class="flex flex-col mb-4">
          <div class="text-sm uppercase mb-4 p-4 bg-gray font-semibold">
            Collection Type
          </div>
          <div
            v-for="(collection, index) in collectionTypes"
            :key="index"
            class="mb-1"
          >
            <input
              v-model="selectedCollectionType"
              type="checkbox"
              name="collection"
              class="text-sm"
              :value="collection"
            />
            <label :for="collection" class="text-sm">{{ collection }}</label>
          </div>
        </div>
        <div class="flex flex-col mb-4">
          <div class="text-sm uppercase mb-4 p-4 bg-gray font-semibold">
            Gem Type
          </div>
          <div v-for="(gem, index) in gemsTypes" :key="index" class="mb-1">
            <input
              v-model="selectedGemType"
              type="checkbox"
              name="gem"
              class="text-sm"
              :value="gem"
            />
            <label :for="gem" class="text-sm">{{ gem }}</label>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="text-sm uppercase mb-4 p-4 bg-gray font-semibold">
            Jewellery Type
          </div>
          <div
            v-for="(jewellery, index) in jewelleryTypes"
            :key="index"
            class="mb-1"
          >
            <input
              v-model="selectedJewelleryType"
              type="checkbox"
              name="jewellery"
              class="text-sm"
              :value="jewellery"
            />
            <label :for="jewellery" class="text-sm">{{ jewellery }}</label>
          </div>
        </div>
      </div>
      <div
        class="
          px-4
          lg:px-4
          col-span-4
          lg:col-span-3
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-x-8 gap-y-36
          lg:gap-y-48
        "
      >
        <Product
          v-for="(product, index) in productResult"
          :key="index"
          :product="product"
          :show-name="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let products
    try {
      products = await $content('products').fetch()
    } catch (e) {
      return error({ message: 'Products not found' })
    }
    return {
      products,
    }
  },

  data() {
    return {
      selectedJewelleryType: [],
      selectedGemType: [],
      selectedCollectionType: [],
      filteredProducts: [],
      gemsTypes: [
        'Blue Sapphire',
        'Diamond',
        'Emerald',
        'Pearl',
        'Pink Diamond',
        'Ruby',
        'Tourmaline',
        'Yellow Sapphire',
      ],
      jewelleryTypes: ['Bracelet', 'Earrings', 'Necklace', 'Ring', 'Tiara'],
      collectionTypes: [
        'Bridal and Wedding Jewellery',
        "Collector's Edition Jewellery",
      ],
    }
  },
  computed: {
    isFilterSelected() {
      return (
        this.selectedJewelleryType.length > 0 ||
        this.selectedGemType.length > 0 ||
        this.selectedCollectionType.length > 0
      )
    },
    productResult() {
      if (!this.isFilterSelected) {
        return this.products
      } else {
        return this.filteredProducts
      }
    },
  },
  watch: {
    selectedJewelleryType() {
      this.getFilteredData()
    },
    selectedGemType() {
      this.getFilteredData()
    },
    selectedCollectionType() {
      this.getFilteredData()
    },
  },
  methods: {
    async getFilteredData() {
      const products = await this.$content('products')
        .where({
          gems: { $in: this.selectedGemType },
        })
        .fetch()

      this.filteredProducts = products
    },
  },
}
</script>

<style></style>
