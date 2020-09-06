<template>
  <div class="location">
    <SectionName class="header" title="LOCATION" subTitle="สถานที่จัดกิจกรรม" />
    <div class="location-content">
      <img
        class="location-image"
        v-lazy="locationImage"
        style="object-fit: cover;"
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
                      allowfullscreen=""
                    ></iframe>
                  </lazy-component>
                </no-ssr>
              </div>
              <div class="location-text">
                <div v-if="isActive" class="location-detail">
                  <span class="highlight">Chulalongkorn University</span>
                  <br />
                  จุฬาลงกรณ์มหาวิทยาลัย
                </div>
                <div v-else class="location-detail-soon">
                  Coming Soon!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Picture class="bg bg-top" fileName="ywc18/location/paper-location-top" />
      <Picture
        class="bg bg-bottom"
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
      locationImage: require('~/assets/images/ywc18/location/image-location.png'),
      isActive: true,
    }
  },
  mounted() {
    // this.timelineProcess()
  },
  // methods: {}
}
</script>

<style lang="scss">
.header {
  margin-bottom: 80px;
}
.bg {
  width: 100%;
  position: absolute;
  z-index: 3;

  &.bg-top {
    top: 0;
  }

  &.bg-bottom {
    bottom: -10px;
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
}
.location-content {
  font-family: Barlow, Anuphan;
  min-height: 700px;
  padding: 64px 0;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.location-container {
  width: 100%;
  margin: 20px 0;
}
.location {
  position: relative;
  padding: 30px 0 30px 0;
  background-color: #0c1521;
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
  text-align: left;
  font-size: 30px;
  .highlight {
    font-size: 36px;
    line-height: 50px;
    font-weight: bold;
  }
  @media screen and (max-width: 950px) {
    text-align: center;
  }
}
.location-detail-soon {
  text-align: center;
  font-size: 60px;
}
@media screen and (max-width: 950px) {
}
</style>
