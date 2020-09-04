<template>
  <a class="cta__btn" :class="{ isSmall: size === 'sm' }" @click="onClick">
    <slot></slot>
  </a>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
  props: {
    size: {
      type: String,
      default: 'md',
    },
  },
}
</script>

<style lang="scss">
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
