<template>
  <div class="blog-card__wrapper">
    <div class="blog-card__cover">
      <img
        v-lazy="`https://miro.medium.com/max/700/1*GXYBJclQ686PDgFD0mgVWg.jpeg`"
        alt=""
      />
    </div>
    <div class="blog-card__detail">
      <div>
        <h3>YWC ก็เหมือนเซ็กส์ (บันทึกชีวิตในค่าย + ระบายจากใจฝั่งคอนเทนต์)</h3>
      </div>
      <div class="blog-card__author">
        <img
          v-lazy="
            `https://miro.medium.com/max/700/1*GXYBJclQ686PDgFD0mgVWg.jpeg`
          "
          alt=""
          class="blog-card__author--img"
        />
        <div class="blog-card__author--name">
          <span>Chayanon Thongpila</span>
          <span>YWC17 Programming</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.blog-card {
  &__wrapper {
    font-family: Anuphan;
    color: black;
  }
  &__cover {
    height: 200px;
    img {
      width: 100% !important;
      height: 200px !important;
      object-fit: cover !important;
    }
  }
  &__detail {
    display: flex;
    flex-direction: column;
    padding: 15px;
    background: rgba(242, 246, 252, 0.9);
    h3 {
      font-weight: 600;
      font-size: 20px;
      text-align: left;
      margin: 0 0 12px;
    }
  }
  &__author {
    display: flex;
    align-items: center;
    &--name {
      display: flex;
      flex: 1;
      flex-direction: column;
      span {
        font-size: 16px;
        line-height: 22px;
        text-align: left;
        margin: 0;
        &:first-child {
          font-weight: 600;
        }
      }
    }
    &--img {
      width: 40px !important;
      height: 40px !important;
      border-radius: 50%;
      margin-right: 1rem;
    }
  }
}
</style>
