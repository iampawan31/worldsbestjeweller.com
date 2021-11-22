<template>
  <div>
    <!-- Main Slider -->
    <MainSlider />
    <!-- Browse Collection -->
    <div class="container mx-auto py-16">
      <div class="text-center">
        <div class="font-light mb-6 lg:mb-16 text-4xl lg:text-5xl">
          Browse Collection
        </div>
        <div
          class="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            py-10
            gap-4
            px-4
            lg:px-2
          "
        >
          <div v-for="(product, index) in products" :key="index">
            <Product :key="index" :product="product" :show-name="false" />
          </div>
        </div>
        <div class="mt-4">
          <NuxtLink
            to="/collection-2022"
            class="
              bg-primary
              text-black
              px-8
              font-light
              uppercase
              py-4
              text-xl
              lg:text-2xl
              hover:bg-black hover:text-primary
              transition
            "
            >Explore Collection
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- Highlights -->
    <div class="container mx-auto px-2 lg:px-0 py-16">
      <div
        class="
          grid grid-cols-1
          sm:grid-cols-2 sm:gap-4
          md:gap-6
          lg:grid-cols-3
          gap-12
        "
      >
        <div
          class="bg-gray text-black shadow-md p-2 lg:py-8 lg:px-4 rounded-md"
        >
          <div class="text-center">
            <font-awesome-icon
              size="4x"
              fixed
              class="text-primary mb-2 md:mb-6"
              :icon="envelope"
            ></font-awesome-icon>
          </div>
          <div class="text-2xl lg:text-3xl font-light text-center pb-2">
            By Invitation Only
          </div>
          <div>
            <div>
              We welcome you to the world of luxury. We extend access to our
              premium collection by invite only.
            </div>
            <div>
              Our closed buyer network assures exclusivity for our patrons.
            </div>
          </div>
        </div>
        <div
          class="bg-gray text-black shadow-md p-2 lg:py-8 lg:px-4 rounded-md"
        >
          <div class="text-center">
            <font-awesome-icon
              size="4x"
              fixed
              class="text-primary mb-2 md:mb-6"
              :icon="lock"
            ></font-awesome-icon>
          </div>
          <div class="text-2xl lg:text-3xl font-light text-center pb-2">
            Highest Confidentiality
          </div>
          <div class="text-sm md:text-base">
            <div>
              We promise utmost confidentiality to our patrons. This makes us
              the most trusted jewellery brand in the world amongst celebrities
              and top professionals.
            </div>
          </div>
        </div>
        <div
          class="bg-gray text-black shadow-md p-2 lg:py-8 lg:px-4 rounded-md"
        >
          <div class="text-center">
            <font-awesome-icon
              size="4x"
              fixed
              class="text-primary mb-2 md:mb-6"
              :icon="user"
            ></font-awesome-icon>
          </div>
          <div class="text-2xl lg:text-3xl font-light text-center pb-2">
            Award Winning Concierge
          </div>
          <div>
            <div>We understand time is the new currency.</div>
            <div>
              Our award-winning design concierge makes every purchase for our
              patrons - a privileged one.
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Testimonials -->
    <div class="bg-gray">
      <TestimonialSlider />
    </div>
    <!-- Rendevouz -->
    <div class="container mx-auto py-16">
      <div class="grid md:grid-cols-2 gap-8 md:gap-4">
        <div
          class="
            order-last
            md:order-first
            flex
            justify-center
            align-middle
            items-center
          "
        >
          <NuxtLink
            class="
              bg-primary
              uppercase
              text-2xl
              font-light
              px-10
              py-4
              transition
              hover:bg-black hover:text-primary
            "
            to="/collection-2022"
            >Explore Collection</NuxtLink
          >
        </div>
        <div>
          <div class="grid grid-cols-2">
            <div>
              <img
                class="w-full h-48 md:h-60 object-cover"
                src="/home_1_4cbf018724.webp"
                :srcset="`/small_home_1_4cbf018724.webp 480w, /medium_home_1_4cbf018724.webp 768w, /large_home_1_4cbf018724.webp 1080w, /home_1_4cbf018724.webp 1280w`"
                sizes="50vw"
                alt=""
              />
            </div>
            <div>
              <img
                class="w-full h-48 md:h-60 object-cover"
                src="/home_2_5e9a24e137.webp"
                :srcset="`/small_home_2_5e9a24e137.webp 480w, /medium_home_2_5e9a24e137.webp 768w, /large_home_2_5e9a24e137.webp 1080w, /home_2_5e9a24e137.webp 1280w`"
                sizes="50vw"
                alt=""
              />
            </div>
            <div>
              <img
                class="w-full h-48 md:h-60 object-cover"
                src="/home_3_89046751d7.webp"
                :srcset="`/small_home_3_89046751d7.webp 480w, /medium_home_3_89046751d7.webp 768w, /large_home_3_89046751d7.webp 1080w, /home_3_89046751d7.webp 1280w`"
                sizes="50vw"
                alt=""
              />
            </div>
            <div>
              <img
                class="w-full h-48 md:h-60 object-cover"
                src="/home_4_86076d5d23.webp"
                :srcset="`/small_home_4_86076d5d23.webp 480w, /medium_home_4_86076d5d23.webp 768w, /large_home_4_86076d5d23.webp 1080w, /home_4_86076d5d23.webp 1280w`"
                sizes="50vw"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  faLongArrowAltRight,
  faEnvelope,
  faLock,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

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
  head: {
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Jewellers since 1807. Jewellers to the Royal Families of the world. Best of the best diamonds, gems and jewellery. Rare, Timeless and Regal Estate Jewellery',
      },
    ],
  },
  computed: {
    longArrow() {
      return faLongArrowAltRight
    },
    envelope() {
      return faEnvelope
    },
    lock() {
      return faLock
    },
    user() {
      return faUser
    },
  },
}
</script>
