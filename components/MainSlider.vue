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
            :src="slide.imageFullPath"
            :srcset="`/slides/small_${slide.image} 480w, /slides/medium_${slide.image} 768w, /slides/large_${slide.image} 1080w, /slides/${slide.image} 1280w`"
            sizes="50vw"
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
          image: '1_70f2359333.webp',
          imageFullPath: '/slides/1_70f2359333.webp',
          text: 'Jeweller to the royal families of the world since 1807',
        },
        {
          image: '2_ee3817ce7a.webp',
          imageFullPath: '/slides/2_ee3817ce7a.webp',
          text: 'regal estate jewellery from the treasure troves',
        },
        {
          image: '3_8b7493e8e0.webp',
          imageFullPath: '/slides/3_8b7493e8e0.webp',
          text: 'splendid artistry',
        },
        {
          image: '4_d476d652fa.webp',
          imimageFullPathage: '/slides/4_d476d652fa.webp',
          text: 'intricate & timeless craftsmanship',
        },
        {
          image: '5_85dd3f6054.webp',
          imageFullPath: '/slides/5_85dd3f6054.webp',
          text: 'delicate luxury',
        },
        {
          image: '6_ded88c4888.webp',
          imageFullPath: '/slides/6_ded88c4888.webp',
          text: 'jewellery that is your crowning glory',
        },
        {
          image: '7_fb8f12b1ed.webp',
          imageFullPath: '/slides/7_fb8f12b1ed.webp',
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
