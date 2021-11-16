<template>
  <client-only>
    <swiper
      class="w-full swiper h-72 md:h-96 lg:h-screen"
      :options="swiperOption"
    >
      <swiper-slide
        ><img
          class="w-full h-72 md:h-96 lg:h-screen object-cover"
          src="/slides/1.jpg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="w-full h-72 md:h-96 lg:h-screen object-cover"
          src="/slides/2.jpg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="w-full h-72 md:h-96 lg:h-screen object-cover"
          src="/slides/3.jpg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="w-full h-72 md:h-96 lg:h-screen object-cover"
          src="/slides/4.jpg"
          alt=""
      /></swiper-slide>
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
        speed: 600,
        autoplay: {
          delay: 4000,
        },
        effecct: 'slide',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    }
  },
}
</script>

<style></style>
