<template>
  <section class="container">
    <SectionName title="GALLERY" subTitle="ประมวลภาพกิจกรรม" />
    <no-ssr placeholder="Loading...">
      <agile
        ref="main"
        class="main"
        :options="options1"
        :as-nav-for="asNavFor1"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="slide"
          :class="`slide--${index}`"
        >
          <img v-lazy="slide" :alt="`รูปที่ ${index}`" />
        </div>
      </agile>
      <agile
        ref="thumbnails"
        class="thumbnails"
        :options="options2"
        :as-nav-for="asNavFor2"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="slide slide--thumbnail"
          :class="`slide--${index}`"
          @click="$refs.thumbnails.goTo(index)"
        >
          <img v-lazy="slide" :alt="`รูปที่ ${index}`" />
        </div>
        <template slot="prevButton">
          <Picture fileName="ywc18/button-arrow-left" />
        </template>
        <template slot="nextButton">
          <Picture fileName="ywc18/button-arrow-right" />
        </template>
      </agile>
    </no-ssr>
  </section>
</template>
<style scoped>
section {
  margin-top: 150px;
}
</style>
<script>
import SectionName from '~/components/ywc18/SectionName.vue'
import Picture from '~/components/Picture.vue'
export default {
  components: {
    SectionName,
    Picture,
  },
  data() {
    return {
      asNavFor1: [],
      asNavFor2: [],
      options1: {
        autoplaySpeed: 4500,
        dots: false,
        fade: true,
        navButtons: false,
        unagile: true,
        responsive: [
          {
            breakpoint: 768,
            settings: { unagile: false },
          },
        ],
      },
      options2: {
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 4500,
        dots: false,
        navButtons: false,
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1008,
            settings: {
              navButtons: true,
            },
          },
        ],
      },
      slides: [
        '/images/gallery/ywc18/1.jpg',
        '/images/gallery/ywc18/2.jpg',
        '/images/gallery/ywc18/3.jpg',
        '/images/gallery/ywc18/4.jpg',
        '/images/gallery/ywc18/5.jpg',
        '/images/gallery/ywc18/6.jpg',
        '/images/gallery/ywc18/7.jpg',
        '/images/gallery/ywc18/8.jpg',
        '/images/gallery/ywc18/9.jpg',
        '/images/gallery/ywc18/10.jpg',
        '/images/gallery/ywc18/11.jpg',
        '/images/gallery/ywc18/12.jpg',
        '/images/gallery/ywc18/13.jpg',
      ],
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.asNavFor1.push(this.$refs.thumbnails)
      this.asNavFor2.push(this.$refs.main)
    })
  },
}
</script>

<style lang="sass" scoped>
.container
  max-width: 720px;
img
  background: url(~assets/images/loading.svg) no-repeat
  background-size: 64px
  background-position: center
.main
  margin: 60px auto -10px
  @media (max-width:768px)
    display: none

.thumbnails
  margin: 0 -12px
  width: calc(100% + 24px)
  background: none

  @media (max-width:768px)
    padding-top: 8px
    padding-bottom: 8px
</style>

<style lang="sass">
.agile
  &__slides
    @media (max-width:768px)
      align-items: flex-start
      padding-top: 30px

  &__nav-button
    background: transparent
    border: none
    color: #ccc
    cursor: pointer
    width: 38px
    height: 38px
    padding: 0
    transition-duration: .3s

    @media (max-width:1280px)
      display: none

    .thumbnails &
      position: absolute
      top: 50%

      &--prev
        user-select: none
        transform: translate(-100%, -50%)
        left: -8px

      &--next
        user-select: none
        transform: translate(100%, -50%)
        right: -8px

    &:hover
      color: #fff

  &__dot
    margin: 0 10px

    button
      background-color: #eee
      border: none
      border-radius: 50%
      cursor: pointer
      display: block
      height: 10px
      font-size: 0
      line-height: 0
      margin: 0
      padding: 0
      transition-duration: .3s
      width: 10px

    &--current,
    &:hover
      button
        background-color: #fff

.slide
  align-items: center
  box-sizing: border-box
  color: #fff
  display: flex
  justify-content: center

  &--thumbnail
    cursor: pointer
    width: 25%
    padding: 0 12px
    transition: opacity .3s

    &:hover
      opacity: .75

  img
    height: 100%
    object-fit: contain
    object-position: center
    width: 100%
</style>
