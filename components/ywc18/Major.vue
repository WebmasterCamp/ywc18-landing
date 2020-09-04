<template>
  <div style="max-width: 100%; width:100%">
    <div class="major">
      <div
        class="major__image"
        :style="{ backgroundImage: `url(/images/ywc18/major/${image}.svg)` }"
      >
        <p>
          สมัครแล้ว <span>{{ count }}</span> คน
        </p>
      </div>
      <div class="major__button">
        <Button size="sm">สมัครสาขานี้</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Button: () => import('~/components/ywc18/Button'),
  },
  props: {
    image: {
      default: '',
      type: String,
    },
    count: {
      default: 123,
      type: Number,
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/css/global';
.major {
  cursor: pointer;
  position: relative;
  width: 100%;
  max-width: 100%;

  &__image {
    position: relative;
    width: 100%;
    padding-top: 75%;
    background-size: contain;
    background-repeat: no-repeat;
    transition: all 0.15s ease-in;
    p {
      position: absolute;
      right: 0;
      top: -40px;
      font-family: Anuphan;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 100%;
      text-align: right;
      letter-spacing: 0.01em;
      @media screen and (max-width: 425px) {
        top: -18px;
        font-size: 12px;
      }
      span {
        font-family: Barlow Semi Condensed;
        font-style: italic;
        font-weight: 800;
        font-size: 48px;
        -webkit-text-stroke-color: $primary-color;
        -webkit-text-stroke-width: 3px;
        letter-spacing: 0.01em;
        color: #061625;
        @media screen and (max-width: 425px) {
          font-size: 28px;
          -webkit-text-stroke-width: 2px;
        }
      }
    }
  }
  &__button {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
}
</style>
