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
            lg:bottom-48
            left-2
            lg:left-10
            md:text-2xl
            lg:text-5xl
            max-w-xs
            md:max-w-xl
            lg:max-w-5xl
            uppercase
            font-sliderFont
          "
        >
          {{ slide.text }}
        </div></swiper-slide
      >
      <div slot="pagination" class="swiper-pagination"></div>
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
          image: '/slides/1.jpg',
          text: 'Jeweller to the royal families of the world since 1807',
        },
        {
          image: '/slides/2.jpg',
          text: 'regal estate jewellery from the treasure troves',
        },
        {
          image: '/slides/3.jpg',
          text: 'splendid artistry',
        },
        {
          image: '/slides/4.jpg',
          text: 'intricate & timeless craftsmanship',
        },
        {
          image: '/slides/5.jpg',
          text: 'delicate luxury',
        },
        {
          image: '/slides/6.jpg',
          text: 'jewellery that is your crowning glory',
        },
        {
          image: '/slides/7.jpg',
          text: 'masters of dreams',
        },
      ],
    }
  },
}
</script>

<style></style>
