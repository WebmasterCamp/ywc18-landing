<template>
  <section class="timeline">
    <div class="container">
      <div class="backdrop__wrapper">
        <div class="timeline__backdrop">
          <div class="timeline__backdrop__top-left">
            <BackdropText text="TIMELINE" :times="4" gap highlight />
          </div>
          <div class="timeline__backdrop__center-right">
            <BackdropText text="TIMELINE" :times="3" gap />
          </div>
        </div>
        <div class="timeline-content">
          <SectionName class="header" title="กำหนดการ" subTitle="TIMELINE" />
          <div class="events">
            <div
              v-for="(item, key) in items"
              :key="key"
              class="event"
              :class="{ active: isActive[key], pending: isPending[key] }"
            >
              <div v-if="item.topDate" class="event__date__from">
                {{ item.topDate }}
              </div>
              <div class="event__image">
                <div v-if="item.bottomDate" class="event__date__to">
                  {{ item.bottomDate }}
                </div>
                <div class="event__image__text">
                  <div
                    v-for="(word, index) in item.text.split(' ').slice(0, -1)"
                    :key="index"
                    class="event__text"
                  >
                    {{ word }}
                  </div>
                </div>
                <div class="event__image__filter"></div>
                <img :src="item.image" alt="register" />
              </div>
              <div
                v-for="(word, index) in item.text.split(' ').slice(-1)"
                :key="`1-${index}`"
                class="event__text"
              >
                {{ word }}
              </div>
              <div
                v-for="(word, index) in item.subText.split(' ')"
                :key="`2-${index}`"
                class="event__subtext"
              >
                {{ word }}
              </div>
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
import SectionName from '../../ywc18/SectionName'
import BackdropText from '../../ywc18/BackdropText'

dayjs.locale('th')

export default {
  components: {
    SectionName,
    BackdropText,
  },
  data() {
    return {
      items: {
        register: {
          text: 'RE GIS TER',
          subText: 'สมัครค่าย',
          image: require('~/assets/images/ywc18/timeline/register.png'),
          topDate: '14 SEP',
          bottomDate: '- 7 NOV',
        },
        announce: {
          text: 'AN NOUNCE MENT #1',
          subText: 'ประกาศผู้มีสิทธิ์ สัมภาษณ์',
          image: require('~/assets/images/ywc18/timeline/announcement1.png'),
          bottomDate: '14 NOV',
        },
        interview: {
          text: 'INTER VIEW',
          subText: 'สัมภาษณ์',
          image: require('~/assets/images/ywc18/timeline/interview.png'),
          topDate: '21 NOV',
        },
        finalist: {
          text: 'AN NOUNCE MENT #2',
          subText: 'ประกาศผล รอบสัมภาษณ์',
          image: require('~/assets/images/ywc18/timeline/announcement2.png'),
          bottomDate: '25 NOV',
        },
        camp: {
          text: 'CAMP DAY',
          subText: 'วันเข้าค่าย (Online)',
          image: require('~/assets/images/ywc18/timeline/camp-day.png'),
          topDate: '12 - 15 AUG',
        },
      },
      isActive: {
        register: false,
        announce: false,
        interview: false,
        finalist: false,
        camp: false,
      },
      isPending: {
        register: false,
        announce: false,
        interview: false,
        finalist: false,
        camp: false,
      },
    }
  },
  mounted() {
    // this.timelineProcess()
  },
  // methods: {}
}
</script>

<style lang="scss">
.events {
  font-family: Barlow, Anuphan, system-ui, -apple-system, sans-sreif;
  display: flex;
  flex-basis: 190px;
  justify-content: space-between;
  width: 100%;
}
.header {
  .section__name--subtitle {
    letter-spacing: 0.16em;
    font-family: Barlow, system-ui, -apple-system, sans-sreif;
    font-weight: 400;
    font-style: italic;
  }
}
.event {
  position: relative;
  flex-grow: 0;
  height: 100%;
  line-height: 0;
  padding: 10px 15px;
  box-sizing: border-box;

  &.pending {
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
  &.active {
    .event__image__filter {
      background: linear-gradient(
        180deg,
        rgba(255, 93, 41, 0.6) 0%,
        rgba(248, 151, 66, 0.6) 100%
      );
      box-shadow: 0px 0px 20px rgba(255, 93, 41, 0.6);
    }
  }

  &__date__from {
    font-family: Barlow Semi Condensed, system-ui, -apple-system, sans-sreif;
    padding: 4px;
    font-weight: 600;
    font-size: 24px;
    text-align: right;
    line-height: 100%;
  }
  &__date__to {
    font-family: Barlow Semi Condensed, system-ui, -apple-system, sans-sreif;
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
      letter-spacing: 0.1em;
    }
    .event__text {
      margin-bottom: 0 !important;
    }
  }
  &__text {
    font-family: Barlow Semi Condensed, system-ui, -apple-system, sans-sreif;
    padding-left: 5px;
    font-size: 34px;
    font-weight: bold;
    line-height: 100%;
    z-index: 4;
    text-align: left;
    letter-spacing: 0.1em;
    margin-bottom: 0.25em;
  }

  &__subtext {
    padding-left: 5px;
    font-style: normal;
    font-size: 16px;
    color: #ff5d29;
    text-align: left;
    font-weight: 600;
    line-height: 125%;
  }
}
.timeline-content {
  min-height: 500px;
  position: relative;
  z-index: 2;
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

    @media screen and (max-width: 768px) {
      display: none;
    }

    &__top-left {
      position: absolute;
      top: 0;
      left: 0;
    }
    &__center-right {
      position: absolute;
      top: 30%;
      right: 0;
    }
  }
}

@media screen and (max-width: 768px) {
  .events {
    flex-wrap: wrap;
    flex-basis: 50%;
    justify-content: center;
  }
  .event {
    /* width: calc(50% - 20px); */
    width: calc(33.33% - 30px);
  }
}
@media screen and (max-width: 425px) {
  .events {
    flex-wrap: wrap;
    flex-basis: 50%;
    justify-content: space-around;
    align-items: space-between;
  }
  .event {
    &__date__to,
    &__date__from {
      font-size: 16px;
    }
    &__text {
      margin-bottom: 0.25em;
    }
    width: calc(50% - 7.5px);
  }
}
@media screen and (max-width: 375px) {
  .event {
    &__text {
      font-size: 24px;
    }
  }
}
</style>
