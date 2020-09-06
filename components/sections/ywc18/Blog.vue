<template>
  <div class="blog__container">
    <SectionName
      title="YWC BLOG"
      subTitle="บทความจากเพื่อน ๆ YWC"
      bgLeft
      bgRight
      class="blog__heading"
    />
    <section class="container">
      <no-ssr placeholder="Loading...">
        <agile ref="thumbnails" class="thumbnails" :options="options">
          <div
            v-for="(blog, index) in blogs"
            :key="index"
            class="blog blog--thumbnail"
            :class="`blog--${index}`"
            @click="onClickBlog(blog)"
          >
            <Blog :detail="blog" />
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
  </div>
</template>

<script>
import SectionName from '~/components/ywc18/SectionName'
import Blog from '~/components/ywc18/Blog'
import { BLOGS } from '~/utils/const'
import Picture from '~/components/Picture.vue'
export default {
  components: {
    SectionName,
    Blog,
    Picture,
  },
  data: () => ({
    blogs: BLOGS,
    options: {
      autoplay: false,
      centerMode: false,
      autoplaySpeed: 4500,
      dots: true,
      navButtons: false,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 426,
          settings: {
            slidesToShow: 2,
            navButtons: true,
            autoplay: true,
          },
        },
        {
          breakpoint: 769,
          settings: {
            dots: false,
            slidesToShow: 3,
            navButtons: BLOGS.length > 3,
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
  }),
  methods: {
    onClickBlog(blog) {
      window.open(blog.url)
    },
  },
}
</script>

<style lang="scss">
.blog__container {
  padding: 55px 0;
}
.blog__heading {
  margin-bottom: 55px;
}
</style>

<style lang="sass" scoped>
img
  background: url(~assets/images/loading.svg) no-repeat
  background-size: 64px
  background-position: center

.thumbnails
  margin: 0 -5px
  width: calc(100% + 10px)
  background: none

  @media (max-width:768px)
    padding-top: 8px
    padding-bottom: 8px
.agile
  &__nav-button
    background: transparent
    border: none
    color: #ccc
    cursor: pointer
    font-size: 24px
    transition-duration: .3s

    .thumbnails &
      position: absolute
      top: 50%
      transform: translateY(-50%)

      &--prev
        user-select: none
        left: -30px

      &--next
        user-select: none
        right: -30px

    &:hover
      color: #888

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
        background-color: #888

.blog
  align-items: center
  box-sizing: border-box
  color: #fff
  display: flex
  height: 450px
  justify-content: center

  &--thumbnail
    cursor: pointer
    height: auto
    padding: 0 15px
    transition: opacity .3s
    &:hover
      opacity: 1
</style>
