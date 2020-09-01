<template>
  <div>
    <Y18Hero />
    <!-- <Hero /> -->
    <!-- <WhatIsYWC /> -->
    <!-- <Timeline />
    <Majors />
    <Location />
    <Guru />
    <Gallery />
    <Sponsor />
    <QA />
    <FollowUs />
    <Footer />
    <PR /> -->
  </div>
</template>

<script>
import Y18Hero from '~/components/sections/ywc18/Hero.vue'
// import WhatIsYWC from '~/components/sections/ywc18/WhatIsYWC'
// import Hero from '~/components/sections/Hero'
// import Timeline from '~/components/ sections/ywc18/Timeline.vue'
export default {
  components: {
    Y18Hero,
    // Hero,
    // WhatIsYWC,
    // Location: () => import('~/components/sections/Location'),
    // Timeline
    // Guru: () => import('~/components/sections/Guru'),
    // Majors: () => import('~/components/sections/Majors'),
    // QA: () => import('~/components/sections/QA'),
    // FollowUs: () => import('~/components/sections/FollowUs'),
    // Sponsor: () => import('~/components/sections/Sponsor'),
    // Gallery: () => import('~/components/sections/Gallery'),
    // PR: () => import('~/components/sections/PR'),
    // Footer: () => import('~/components/sections/Footer'),
  },
}
</script>

<style>
.container {
  max-width: 1140px;
  margin: 0 auto;
  text-align: center;
}
.cta-button {
  transform: scale(1.3);
  display: block !important;
  margin: 0 auto;
  animation: cta 0.9s alternate infinite ease-in;
}
@media screen and (max-width: 768px) {
  .cta-button {
    transform: scale(1.1);
    animation: cta-mobile 0.9s alternate infinite ease-in;
  }
}
@keyframes cta {
  0% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1.5);
  }
}
@keyframes cta-mobile {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.3);
  }
}
</style>
