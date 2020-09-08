<template>
  <section class="container">
    <div class="divider-2m__wrapper">
      <img src="~/assets/images/ywc18/vertical-line.svg" />
      <span>2M</span>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~/assets/css/global.scss';
.divider-2m__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  img {
    margin-right: 0.5em;
  }
  span {
    font-family: Barlow, system-ui, -apple-system, sans-sreif;
    font-style: italic;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 0.16em;
    color: $primary-color;
  }
}
</style>
