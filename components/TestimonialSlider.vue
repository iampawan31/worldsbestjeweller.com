<template>
  <div class="container mx-auto py-8 lg:py-16 px-4 lg:px-40 text-center">
    <div class="testimonial-slider">
      <ul class="slider">
        <li>
          <div class="testimonial-slider-content">
            <div class="text-2xl mb-4">
              Never visiting a dispensary again, crazy prices for less quality
              than I can grow. No thanks bro!
            </div>
            <p class="source">Matthew A, San Diego. Verified Customer.</p>
          </div>
        </li>
        <li>
          <div class="testimonial-slider-content">
            <div class="text-2xl mb-4">
              After looking at cheap kits on amazon and expensive automated kits
              online I opted for this kit because of the guarantee and support.
              I'm probaly the worst gardener in the world lol and I still was
              able to grow really nice bud.
            </div>
            <p class="source">Lisa L, El Cajon. Verified Customer.</p>
          </div>
        </li>
        <li>
          <div class="testimonial-slider-content">
            <div class="text-2xl mb-4">
              I love the way the nutrients come already packaged for each week
              so I don't have to figure anything out. Taking care of the plants
              was so much easier than I thought, shoulda been doing it years ago
              damn.
            </div>
            <p class="source">Mitchell N, Santa Ana. Verified Customer.</p>
          </div>
        </li>
        <li>
          <div class="testimonial-slider-content">
            <div class="text-2xl mb-4">
              Grew about a pound in 3 months and now I'm set for the year...if
              my boys stop hitting me up for seshs hahaha
            </div>
            <p class="source">Joe L, Verified Customer.</p>
          </div>
        </li>
        <li>
          <div class="testimonial-slider-content">
            <div class="text-2xl mb-4">
              These guys know their stuff.. I'm too busy to take care of the
              plants myself but still wanted to grow so I got the support
              package. They show up and take care of the weekly maintenance.
              About 3 weeks left of flowering and this stuff already looks
              better than what i normally buy.
            </div>
            <p class="source">Gerald G, Riverside. Verified Customer.</p>
          </div>
        </li>
        <li>
          <div class="testimonial-slider-content">
            <div class="text-2xl mb-4">
              I love the way the nutrients come already packaged for each week
              so I don't have to figure anything out. Taking care of the plants
              was so much easier than I thought, shoulda been doing it years ago
              damn. Mitchell N, Santa Ana. Verified Customer. Grew about a pound
              in 3 months and now I'm set for the year...if my boys stop hitting
              me up for seshs hahaha Joe L, Verified Customer. These guys know
              their stuff.. I'm too busy to take care of the plants myself but
              still wanted to grow so I got the support package. They show up
              and take care of the weekly maintenance. About 3 weeks left of
              flowering and this stuff already looks better than what i normally
              buy.
            </div>
            <p class="source">Gerald G, Riverside. Verified Customer.</p>
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
  margin-top: 100px;
}

.testimonial-slider ul.slider {
  display: block;
  list-style: none;
  padding: 0;
  position: relative;
  display: inline-block;
  width: 100%;
  height: 250px;
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

  -webkit-animation: fade-animation-1 25s infinite;
  animation: fade-animation-1 25s infinite;
}
.testimonial-slider ul.slider li:nth-child(2) {
  -webkit-animation: fade-animation-2 25s infinite;
  animation: fade-animation-2 25s infinite;
}
.testimonial-slider ul.slider li:nth-child(3) {
  -webkit-animation: fade-animation-3 25s infinite;
  animation: fade-animation-3 25s infinite;
}
.testimonial-slider ul.slider li:nth-child(4) {
  -webkit-animation: fade-animation-4 25s infinite;
  animation: fade-animation-4 25s infinite;
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
