<template>
  <div class="circle">
    <a
      v-if="!!link && link !== '#'"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img :src="require(`~/assets/images/${fileName}`)" :alt="alt" />
    </a>
    <span v-else>
      <img :src="require(`~/assets/images/${fileName}`)" :alt="alt" />
    </span>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    fileName: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '#',
    },
    alt: {
      type: String,
      default: '',
    },
  },
  computed: {
    image() {
      return require('~/assets/images/' + this.fileName + '.png')
    },
  },
})
</script>

<style lang="scss">
@import '~/assets/css/global.scss';
$small-size: 60px;
$normal-size: 80px;
.circle {
  width: $small-size;
  height: $small-size;

  a,
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    // picture {
    img {
      width: 100%;
      height: 100%;
    }
    // }
  }

  @media screen and (min-width: 768px) {
    width: $normal-size;
    height: $normal-size;
  }

  &.horizontal {
    width: 140px;
    @media screen and (min-width: 768px) {
      width: 200px;
    }
  }
}
</style>
