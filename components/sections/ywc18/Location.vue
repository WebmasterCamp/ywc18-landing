<template>
  <div class="location">
    <SectionName
      class="location__header"
      title="LOCATION"
      subTitle="สถานที่จัดกิจกรรม"
    />
    <div class="location-content">
      <img
        v-lazy="locationImage"
        class="location-image"
        style="object-fit: cover;"
        alt="สถานที่จัดค่าย"
      />
      <div class="location-image-gradient" />
      <section class="container location-container">
        <div class="location-split">
          <div class="location-backdrop-wrapper">
            <div class="location-backdrop">
              <BackdropText
                style="transform: rotate(-90deg);"
                text="LOCATION"
                :times="4"
                gap
                highlight
                bright
                fade
              />
            </div>
          </div>
          <div class="location-map">
            <div class="location-gmap-text">
              <div v-if="isActive" class="location-gmap">
                <no-ssr>
                  <lazy-component tag="div" class="video">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.793301226501!2d100.77898871535137!3d13.730960501474286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d66308ce98ffd%3A0xcb43a76f038c38ca!2sFaculty%20of%20Information%20Technology!5e0!3m2!1sen!2sth!4v1567244733954!5m2!1sen!2sth"
                      width="100%"
                      height="100%"
                      frameborder="0"
                      style="border:0;"
                      allowfullscreen
                    ></iframe>
                  </lazy-component>
                </no-ssr>
              </div>
              <div class="location-text">
                <div v-if="isActive" class="location-detail">
                  <span class="highlight">Chulalongkorn University</span>
                  <br />จุฬาลงกรณ์มหาวิทยาลัย
                </div>
                <div v-else class="location-detail-soon">
                  <Picture fileName="ywc18/location-pending.svg" />
                  <p>TO BE ANNOUNCED</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Picture
        class="bg bg-location-cover bg-location-top"
        fileName="ywc18/location/paper-location-top"
      />
      <Picture
        class="bg bg-location-cover bg-location-bottom"
        fileName="ywc18/location/paper-location-bottom"
      />
    </div>
  </div>
</template>
<script>
import SectionName from '../../ywc18/SectionName'
import BackdropText from '../../ywc18/BackdropText'
import Picture from '~/components/Picture.vue'

export default {
  components: {
    SectionName,
    Picture,
    BackdropText,
  },
  data() {
    return {
      locationImage: require('~/assets/images/ywc18/location/location-bg-pending.jpg'),
      isActive: false,
    }
  },
  mounted() {
    // this.timelineProcess()
  },
  // methods: {}
}
</script>

<style lang="scss">
.location__header {
  margin-top: 150px;
  margin-bottom: 0px;
}

.location__bg__cover {
  position: absolute;
  top: 0;
  height: 840px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1920px;
  @media screen and (min-width: 1921px) {
    width: 100%;
    img {
      width: 100%;
    }
  }
  img {
    max-width: unset !important;
  }

  &--bottom {
    transform: rotate(180deg);
  }
}

.bg {
  &.bg-location-cover {
    width: 1920px;
    position: absolute;
    z-index: 3;
    width: 1920px;
    max-width: unset !important;
    @media screen and (min-width: 1921px) {
      width: 100%;
    }
    &.bg-location-top {
      top: 0;
    }

    &.bg-location-bottom {
      bottom: 0;
    }
  }

  img {
    width: 100%;
  }
}
.location-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  height: calc(100% - 10px);
}
.location-image-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  height: calc(100% - 10px);
}
.location-content {
  font-family: Barlow, Anuphan, system-ui, -apple-system, sans-sreif;
  padding: 64px 0;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.location-container {
  width: 100%;
  padding: 100px 0;
  @media screen and (max-width: 768px) {
    padding: 75px 0;
  }
  @media screen and (max-width: 425px) {
    padding: 20px 0;
  }
}
.location {
  position: relative;
  padding: 30px 0 30px 0;
  background-color: #061625;
  margin-bottom: 120px;
}
.location-split {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 500px;
  max-width: 1140px;
  width: 100%;
  position: relative;
  @media screen and (max-width: 425px) {
    padding: 32px 0;
    height: unset;
  }
}
.location-backdrop-wrapper {
  z-index: 2;
  display: block;
  margin-right: 20px;

  @media screen and (max-width: 950px) {
    display: none;
  }
}
.location-map {
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
}
.location-gmap-text {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 10px;
  justify-content: center;
}
.location-gmap {
  flex: 1;
  margin: 20px;
}
.video {
  width: 100%;
  height: 100%;
}
.location-detail {
  font-weight: 600;
  font-family: Anuphan, system-ui, -apple-system, sans-sreif;
  text-align: left;
  font-size: 30px;
  .highlight {
    text-transform: uppercase;
    font-family: Barlow Semi Condensed, system-ui, -apple-system, sans-sreif;
    letter-spacing: 0.05em;
    font-size: 36px;
    line-height: 50px;
    font-weight: bold;
    @media screen and (max-width: 425px) {
      font-size: 25px;
      line-height: 30px;
    }
  }
  @media screen and (max-width: 425px) {
    font-size: 24px;
    line-height: 30px;
  }
  @media screen and (max-width: 950px) {
    text-align: center;
  }
}
.location-detail-soon {
  font-family: Barlow Semi Condensed, system-ui, -apple-system, sans-sreif;
  text-align: center;
  font-style: italic;
  font-weight: bold;
  font-size: 60px;
  letter-spacing: 0.03em;
  color: rgba(242, 246, 252, 0.8);
  @media screen and (max-width: 425px) {
    font-size: 32px;
  }
}
</style>
