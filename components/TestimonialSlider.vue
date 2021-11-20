<template>
  <div class="container mx-auto py-8 lg:py-2 px-4 lg:px-40 text-center">
    <div class="testimonial-slider block w-full h-auto">
      <ul
        class="slider h-60 block list-none p-0 relative w-full overflow-hidden"
      >
        <li
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="absolute block w-full opacity-0"
        >
          <div class="testimonial-slider-content">
            <div class="flex justify-center items-center">
              <Rating :rating="testimonial.rating" />
            </div>
            <div class="sm:text-3xl font-light mb-4">
              {{ testimonial.feedback }}
            </div>
            <div class="source font-semibold">{{ testimonial.name }}</div>
            <div class="text-xs">{{ testimonial.designation }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          rating: 5,
          feedback:
            'My association with Lustrous Gems is decades old. I value every jewelery purchase made from them. Everything is an asset and apromising investment.',
          name: 'CHRISTOPHER J.',
          designation: 'CFO, Fortune 500, US',
        },
        {
          rating: 5,
          feedback:
            'Lustrous Gems is our family jeweller for generations. We appreciate the personalized guidance by the director, Nalin Jhaveri at every step.',
          name: 'RUBINA MUNJAL',
          designation: 'Top Corporate House, India',
        },
        {
          rating: 5,
          feedback:
            'My association with Lustrous Gems is decades old. I value every jewelery purchase made from them. Everything is an asset and apromising investment.',
          name: 'CHRISTOPHER J.',
          designation: 'CFO, Fortune 500, US',
        },
        {
          rating: 5,
          feedback:
            'Lustrous Gems is our family jeweller for generations. We appreciate the personalized guidance by the director, Nalin Jhaveri at every step.',
          name: 'RUBINA MUNJAL',
          designation: 'Top Corporate House, India',
        },
      ],
    }
  },
}
</script>

<style scoped>
.testimonial-slider ul.slider {
  margin: 0 auto;
}

.testimonial-slider ul.slider li {
  margin: 0 auto;
}
.testimonial-slider ul.slider li:nth-child(1) {
  opacity: 1;

  -webkit-animation: fade-animation-1 20s infinite;
  animation: fade-animation-1 20s infinite;
}
.testimonial-slider ul.slider li:nth-child(2) {
  -webkit-animation: fade-animation-2 20s infinite;
  animation: fade-animation-2 20s infinite;
}
.testimonial-slider ul.slider li:nth-child(3) {
  -webkit-animation: fade-animation-3 20s infinite;
  animation: fade-animation-3 20s infinite;
}
.testimonial-slider ul.slider li:nth-child(4) {
  -webkit-animation: fade-animation-4 20s infinite;
  animation: fade-animation-4 20s infinite;
}

/* KEYFRAME DECLARATIONS */
@keyframes fade-animation-1 {
  0%,
  25%,
  100% {
    opacity: 0;
  }
  3%,
  22% {
    opacity: 1;
  }
}
@keyframes fade-animation-2 {
  0%,
  25%,
  50%,
  100% {
    opacity: 0;
  }
  28%,
  47% {
    opacity: 1;
  }
}
@keyframes fade-animation-3 {
  0%,
  50%,
  75%,
  100% {
    opacity: 0;
  }
  53%,
  72% {
    opacity: 1;
  }
}
@keyframes fade-animation-4 {
  0%,
  75%,
  100% {
    opacity: 0;
  }
  78%,
  97% {
    opacity: 1;
  }
}

@-webkit-keyframes fade-animation-1 {
  0%,
  25%,
  100% {
    opacity: 0;
  }
  3%,
  22% {
    opacity: 1;
  }
}
@-webkit-keyframes fade-animation-2 {
  0%,
  25%,
  50%,
  100% {
    opacity: 0;
  }
  28%,
  47% {
    opacity: 1;
  }
}
@-webkit-keyframes fade-animation-3 {
  0%,
  50%,
  75%,
  100% {
    opacity: 0;
  }
  53%,
  72% {
    opacity: 1;
  }
}
@-webkit-keyframes fade-animation-4 {
  0%,
  75%,
  100% {
    opacity: 0;
  }
  78%,
  97% {
    opacity: 1;
  }
}
</style>
