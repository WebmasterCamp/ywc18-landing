<template>
  <a class="cta__btn" :class="{ isSmall: size === 'sm' }" @click="onClick">
    <!-- <div class="button__content">
    <div class="button__bg"></div>-->
    <slot></slot>
    <!-- </div> -->
  </a>
</template>

<script>
export default {
  methods: {
    onClick() {
      if (this.link) {
        window.open(this.link)
        return
      }
      this.$emit('click')
    }
  },
  props: {
    size: {
      type: String,
      default: 'md'
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import '~assets/css/global.scss';
.button {
  &__bg {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: #091827;
    border: 3px solid $primary-color;
    transform: skew(-30deg, 0deg);
  }
  &__content {
    position: absolute;
    padding: 0.375rem 0.75rem;
    width: auto;
    height: auto;
    text-align: center;
    white-space: nowrap;
    user-select: none;
    font-size: 1rem;
    line-height: 1.5;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
  }
}
.cta__btn {
  cursor: pointer;
  display: block;
  position: relative;
  font-family: Barlow, Anuphan;
  width: 260px;
  height: 74px;
  background: url(/images/ywc18/button/bg-cta.svg),
    url(/images/ywc18/button/bg-dots.png),
    url(/images/ywc18/button/bg-cta_hover.svg);
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: top left, bottom right, center center;
  background-size: 260px, 260px, 0;
  font-weight: 500;
  font-size: 24px;
  line-height: 62px;
  color: #f2f6fc;
  margin: 0 auto 24px;
  padding-right: 12px;
  text-decoration: none;
  text-align: center;
  user-select: none;
  &:hover {
    background: url(/images/ywc18/button/bg-cta_hover.svg),
      url(/images/ywc18/button/bg-dots.png);
    background-repeat: no-repeat, no-repeat;
    background-position: top left, bottom right;
    background-size: 260px, 260px;
  }
  @media screen and (max-width: 428px) {
    transform: scale(0.8);
  }

  &.isSmall {
    transform: scale(0.7);
    font-size: 32px;
    @media screen and (max-width: 428px) {
      transform: scale(0.5);
      font-size: 32px;
    }
  }
}
</style>
