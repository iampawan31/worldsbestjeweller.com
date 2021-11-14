<template>
  <client-only>
    <swiper class="swiper w-full h-1/3" :options="swiperOption">
      <swiper-slide
        ><img class="w-full" src="/slides/1.jpeg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img class="w-full" src="/slides/2.jpeg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img class="w-full" src="/slides/3.jpeg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img class="w-full" src="/slides/4.jpeg" alt=""
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
        pagination: {
          el: '.swiper-pagination',
        },
      },
    }
  },
}
</script>

<style></style>
