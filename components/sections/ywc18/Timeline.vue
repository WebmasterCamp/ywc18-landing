<template>
  <section class="timeline">
    <div class="container">
      <div class="backdrop__wrapper">
        <div class="timeline__backdrop">
          <div class="timeline__backdrop__top-left">
            <span class="filled">TIMELINE</span>
            <span>TIMELINE</span>
            <span>TIMELINE</span>
            <span>TIMELINE</span>
          </div>
          <div class="timeline__backdrop__center-right">
            <span>TIMELINE</span>
            <span>TIMELINE</span>
            <span>TIMELINE</span>
          </div>
        </div>
        <div class="content">
          <div class="header">
            <h3 class="title">กำหนดการ</h3>
            <span class="subtitle">TIMELINE</span>
          </div>
          <div class="events">
            <div class="event active">
              <div class="event__date__from">14 SEP</div>
              <div class="event__image">
                <div class="event__date__to">- 7 NOV</div>
                <div class="event__image__text">
                  <div class="event__text">RE</div>
                  <div class="event__text">GIS</div>
                </div>
                <div class="event__image__filter"></div>
                <img src="~/assets/images/ywc18/timeline/register.png" alt="register" />
              </div>
              <div class="event__text">TER</div>
              <div class="event__subtext">สมัครค่าย</div>
            </div>
            <div class="event">
              <div class="event__image">
                <div class="event__date__to">16 NOV</div>
                <div class="event__image__text">
                  <div class="event__text">AN</div>
                  <div class="event__text">NOUNCE</div>
                  <div class="event__text">MENT</div>
                </div>
                <div class="event__image__filter"></div>
                <img src="~/assets/images/ywc18/timeline/announcement1.png" alt="announcement1" />
              </div>
              <div class="event__text">#1</div>
              <div class="event__subtext">ประกาศผล</div>
              <div class="event__subtext">รอบใบสมัคร</div>
            </div>
            <div class="event">
              <div class="event__date__from">21 NOV</div>
              <div class="event__image">
                <div class="event__image__text">
                  <div class="event__text">INTER</div>
                </div>
                <div class="event__image__filter"></div>
                <img src="~/assets/images/ywc18/timeline/interview.png" alt="interview" />
              </div>
              <div class="event__text">VIEW</div>
              <div class="event__subtext">สัมภาษณ์</div>
            </div>
            <div class="event">
              <div class="event__image">
                <div class="event__date__to">25 NOV</div>
                <div class="event__image__text">
                  <div class="event__text">AN</div>
                  <div class="event__text">NOUNCE</div>
                  <div class="event__text">MENT</div>
                </div>
                <div class="event__image__filter"></div>
                <img src="~/assets/images/ywc18/timeline/announcement2.png" alt="announcement2" />
              </div>
              <div class="event__text">#2</div>
              <div class="event__subtext">ประกาศผล</div>
              <div class="event__subtext">รอบสัมภาษณ์</div>
            </div>
            <div class="event pending">
              <div class="event__date__from">TO BE</div>
              <div class="event__image">
                <div class="event__date__to">ANNOUNCED</div>
                <div class="event__image__text">
                  <div class="event__text">CAMP</div>
                </div>
                <div class="event__image__filter"></div>
                <img src="~/assets/images/ywc18/timeline/camp-day.png" alt="camp-day" />
              </div>
              <div class="event__text">DAY</div>
              <div class="event__subtext">วันเข้าค่าย</div>
              <div class="event__subtext">(ไม่ค้างคืน)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import dayjs from 'dayjs'
import 'dayjs/locale/th'

dayjs.locale('th')

export default {
  components: {},
  data() {
    return {
      items: {
        register: {
          name: 'รับสมัคร',
          startDate: '2019-09-02',
          endDate: '2019-10-15'
        },
        announce: { name: 'ประกาศผล', startDate: '2019-10-26' },
        interview: { name: 'สัมภาษณ์', startDate: '2019-11-02', oneDay: true },
        finalist: { name: 'ประกาศผลสัมภาษณ์', startDate: '2019-11-05' },
        camp: {
          name: 'วันค่าย',
          startDate: '2019-12-26',
          endDate: '2019-12-29'
        }
      },
      isActive: {
        register: false,
        announce: false,
        interview: false,
        finalist: false,
        camp: false
      }
    }
  },
  mounted() {
    // this.timelineProcess()
  }
  // methods: {}
}
</script>

<style lang="scss">
* {
  font-family: Barlow, Anuphan;
}
.events {
  display: flex;
  flex-basis: 190px;
  justify-content: space-between;
  width: 100%;
}
.header {
  margin-bottom: 40px;
}
.pending {
  opacity: 0.6;
  .event__date__from {
    color: #f89742;
  }
  .event__date__to {
    color: #f89742;
  }
  .event__image__filter {
    background: linear-gradient(
        0deg,
        rgba(6, 22, 37, 0.2),
        rgba(6, 22, 37, 0.2)
      ),
      linear-gradient(
        180deg,
        rgba(255, 93, 41, 0.1) 0%,
        rgba(248, 151, 66, 0.1) 100%
      );
  }
}
.active {
  .event__image__filter {
    background: linear-gradient(
      180deg,
      rgba(255, 93, 41, 0.6) 0%,
      rgba(248, 151, 66, 0.6) 100%
    );
  }
}
.event {
  position: relative;
  flex-grow: 0;
  height: 100%;
  line-height: 0;
  padding: 10px;
  &__date__from {
    padding: 4px;
    font-weight: 600;
    font-size: 24px;
    text-align: right;
    line-height: 100%;
  }
  &__date__to {
    padding: 4px;
    font-weight: 600;
    font-size: 24px;
    text-align: right;
    z-index: 3;
    line-height: 100%;
  }

  &__image {
    position: relative;
    width: 100%;
    height: calc(100% - 5px);
    .event__date__to {
      position: absolute;
      top: 0;
      right: 0;
    }

    &__filter {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      background: linear-gradient(
        180deg,
        rgba(255, 93, 41, 0.2) 0%,
        rgba(248, 151, 66, 0.2) 100%
      );
      background-blend-mode: lighten, normal;
    }

    img {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
    }

    &__text {
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 4;
    }
  }
  &__text {
    padding-left: 5px;
    font-size: 34px;
    font-weight: bold;
    line-height: 100%;
    z-index: 4;
    text-align: left;
  }

  &__subtext {
    padding-left: 5px;
    font-style: normal;
    font-size: 16px;
    color: #ff5d29;
    text-align: left;
    font-weight: 600;
    line-height: 110%;
  }
}
.content {
  min-height: 500px;
  padding: 64px 0;
  position: relative;
  z-index: 2;

  .title {
    font-size: 2.5em;
    font-weight: bold;
    letter-spacing: 0.016em;
    margin-bottom: 24px;
    color: #f5f4f0;
    &::before {
      content: '←';
      padding-right: 10px;
      font-size: 40px;
      font-weight: lighter;
    }
    &::after {
      content: '→';
      padding-left: 10px;
      font-size: 40px;
      font-weight: lighter;
    }
  }
  .subtitle {
    font-size: 24px;
    font-style: italic;
    letter-spacing: 0.16em;
    color: #ff5d29;
  }
}
.backdrop__wrapper {
  width: 100%;
  position: relative;
}
.timeline {
  position: relative;
  padding-top: 20px;
  background-color: #061625;
  &__backdrop {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1;
    overflow: hidden;
    span {
      // border: 2px solid rgba(242, 246, 252, 0.09);
      color: rgba(242, 246, 252, 0.09);
      -webkit-text-fill-color: hsl(
        209deg,
        72%,
        8%
      ); /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: rgba(242, 246, 252, 0.09);
      font-style: italic;
      font-weight: bold;
      font-size: 500%;
      line-height: 90.5%;

      &.filled {
        -webkit-text-fill-color: unset;
        -webkit-text-stroke-width: 0px;
      }
    }
    &__top-left {
      position: absolute;
      display: flex;
      top: 0;
      left: 0;
      flex-direction: column;
    }
    &__center-right {
      position: absolute;
      top: 30%;
      right: 0;
      display: flex;
      flex-direction: column;
    }
  }
}

@media screen and (max-width: 950px) {
  .events {
    flex-wrap: wrap;
    flex-basis: 50%;
    justify-content: center;
  }
  .event {
    width: calc(50% - 20px);

    // &__text {
    //   font-size: 24px;
    // }
    // &__subtext {
    //   font-size: 14px;
    // }
  }
}
</style>
