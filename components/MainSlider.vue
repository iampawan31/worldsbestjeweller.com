<template>
  <client-only>
    <swiper
      class="w-full swiper h-72 md:h-96 lg:h-screen"
      :options="swiperOption"
    >
      <swiper-slide v-for="(slide, index) in slideImages" :key="index">
        <div>
          <img
            class="w-full h-72 md:h-96 lg:h-screen object-cover"
            :src="slide.image"
            alt=""
          />
        </div>
        <div
          class="
            text-white
            bg-black bg-opacity-80
            p-1
            lg:p-3
            absolute
            bottom-10
            lg:bottom-24
            left-2
            lg:left-10
            sm:text-xl
            md:text-2xl
            lg:text-5xl
            max-w-xs
            sm:max-w-lg
            md:max-w-xl
            lg:max-w-5xl
            uppercase
            font-sliderFont
          "
        >
          {{ slide.text }}
        </div></swiper-slide
      >
      <div slot="pagination" class="hidden lg:block swiper-pagination"></div>
    </swiper>
  </client-only>
</template>

<script>
import 'swiper/css/swiper.css'
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 2000,
        autoplay: {
          delay: 4000,
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      slideImages: [
        {
          image: '/slides/1.webp',
          text: 'Jeweller to the royal families of the world since 1807',
        },
        {
          image: '/slides/2.webp',
          text: 'regal estate jewellery from the treasure troves',
        },
        {
          image: '/slides/3.webp',
          text: 'splendid artistry',
        },
        {
          image: '/slides/4.webp',
          text: 'intricate & timeless craftsmanship',
        },
        {
          image: '/slides/5.webp',
          text: 'delicate luxury',
        },
        {
          image: '/slides/6.webp',
          text: 'jewellery that is your crowning glory',
        },
        {
          image: '/slides/7.webp',
          text: 'masters of dreams',
        },
      ],
    }
  },
}
</script>

<style>
.swiper-pagination-bullet-active {
  background-color: #ffcc33;
}
</style>
