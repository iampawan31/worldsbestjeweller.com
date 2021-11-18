<template>
  <div class="container mx-auto py-8 lg:py-2 px-4 lg:px-40 text-center">
    <div class="testimonial-slider">
      <ul class="slider">
        <li>
          <div class="testimonial-slider-content">
            <div class="flex justify-center items-center">
              <Rating :rating="5" />
            </div>
            <div class="text-3xl font-light mb-4">
              My association with Lustrous Gems is decades old. I value every
              jewelery purchase made from them. Everything is an asset and a
              promising investment.
            </div>
            <div class="source font-semibold">CHRISTOPHER J.</div>
            <div class="text-xs">CFO, Fortune 500, US</div>
          </div>
        </li>
        <li>
          <div class="testimonial-slider-content">
            <div class="flex justify-center items-center">
              <Rating :rating="5" />
            </div>
            <div class="text-3xl mb-4 font-light">
              Lustrous Gems is our family jeweller for generations. We
              appreciate the personalized guidance by the director, Nalin
              Jhaveri at every step.
            </div>
            <div class="source font-semibold">RUBINA MUNJAL</div>
            <div class="text-xs">Top Corporate House, India</div>
          </div>
        </li>
        <li>
          <div class="testimonial-slider-content">
            <div class="flex justify-center items-center">
              <Rating :rating="5" />
            </div>
            <div class="text-2xl mb-4">
              My association with Lustrous Gems is decades old. I value every
              jewelery purchase made from them. Everything is an asset and a
              promising investment.
            </div>
            <div class="source font-semibold">CHRISTOPHER J.</div>
            <div class="text-xs">CFO, Fortune 500, US</div>
          </div>
        </li>
        <li>
          <div class="testimonial-slider-content">
            <div class="flex justify-center items-center">
              <Rating :rating="5" />
            </div>
            <div class="text-2xl mb-4">
              Lustrous Gems is our family jeweller for generations. We
              appreciate the personalized guidance by the director, Nalin
              Jhaveri at every step.
            </div>
            <div class="source font-semibold">RUBINA MUNJAL</div>
            <div class="text-xs">Top Corporate House, India</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.testimonial-slider {
  display: block;
  width: 100%;
  height: auto;
}

.testimonial-slider ul.slider {
  display: block;
  list-style: none;
  padding: 0;
  position: relative;
  display: inline-block;
  width: 100%;
  height: 350px;
  overflow: hidden;
  margin: 0 auto;
}

.testimonial-slider ul.slider li {
  position: absolute;
  display: block;
  width: 100%;
  opacity: 0;
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
