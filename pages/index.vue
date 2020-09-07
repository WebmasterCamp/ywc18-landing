<template>
  <div>
    <Hero />
    <!-- <PaperDivider /> -->
    <WhatIsYWC />
    <Timeline />
    <DiverderTwoM />
    <Majors />
    <Blog />
    <Location />
    <Guru />
    <Gallery />
    <Sponsor />
    <!-- <MediaPartner /> -->
    <!-- <PaperDivider /> -->
    <QA />
    <FollowUs />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Hero from '~/components/sections/ywc18/Hero.vue'
import WhatIsYWC from '~/components/sections/ywc18/WhatIsYWC'
import Timeline from '~/components/sections/ywc18/Timeline.vue'
export default {
  components: {
    Hero,
    WhatIsYWC,
    Timeline,
    DiverderTwoM: () => import('~/components/sections/ywc18/2m'),
    Majors: () => import('~/components/sections/ywc18/Majors'),
    Blog: () => import('~/components/sections/ywc18/Blog'),
    Location: () => import('~/components/sections/ywc18/Location'),
    Guru: () => import('~/components/sections/ywc18/Guru'),
    Gallery: () => import('~/components/sections/ywc18/Gallery'),
    Sponsor: () => import('~/components/sections/ywc18/Sponsor'),
    // MediaPartner: () => import('~/components/sections/ywc18/MediaPartner'),
    // PaperDivider: () => import('~/components/sections/ywc18/PaperDivider'),
    QA: () => import('~/components/sections/ywc18/QA'),
    FollowUs: () => import('~/components/sections/ywc18/FollowUs')
    // TODO: Footer: () => import('~/components/sections/Footer'),
  }
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
