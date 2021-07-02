<template>
  <section class="container" @click="dismissQ($event)">
    <SectionTitle title="Q & A" subtitle="ตอบคำถามยอดฮิต" />
    <QuestionZone>
      <div
        v-for="(a, q) in questions"
        :key="q"
        class="qa"
        :class="{ darken: showingQ !== '' && q !== showingQ }"
      >
        <QuestionItem
          :qa="{ q: q, a: a }"
          :showAns="q == showingQ"
          :selectQ="selectQ"
        />
      </div>
    </QuestionZone>
  </section>
</template>
<style>
.qa {
  display: inline-grid;
}
.qa.darken {
  opacity: 0.6;
}
</style>
<script>
import styled from 'vue-styled-components'
import SectionTitle from '~/components/ywc18/SectionTitle.vue'
import QuestionItem from '~/components/ywc18/QuestionItem.vue'

const QuestionZone = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-gap: 24px 24px;

  @media (max-width: 768px) {
    & {
      grid-template-columns: auto;
    }
  }
`
export default {
  components: {
    SectionTitle,
    QuestionZone,
    QuestionItem,
  },
  data() {
    return {
      showingQ: '',
      questions: {
        'ค่าย Young Webmaster Camp คือค่ายอะไร ?': `ค่ายสร้างเว็บไซต์ระดับอุดมศึกษาที่จัดโดยสมาคมผู้ดูแลเว็บไทย จัดขึ้นเป็นประจำทุกปี เพื่อผลิตบุคลากรหน้าใหม่ด้านดิจิทัลให้พร้อมเข้าสู่การทำงานด้านดิจิทัลในอนาคต`,
        'ค่ายนี้ให้อะไรกลับไปบ้าง ?': `ได้ความรู้เพิ่มเติมจากวิทยากรมากความสามารถ ได้พัฒนาและออกแบบเว็บไซต์ สร้างประสบการณ์ดี ๆ ร่วมกัน`,
        'สมัครได้กี่สาขา ?': `สมัครได้เพียง 1 สาขาเท่านั้น โดยแต่ละสาขาจะมีโจทย์ที่แตกต่างกันออกไป`,
        'สมัครแล้วได้ไปค่ายทุกคนหรือไม่ ?': `ทางทีมงานจะคัดเลือกแต่ละสาขา สาขาละ 20 คน รวมแล้วจะมีผู้ที่ถูกคัดเลือกให้เข้าร่วมค่าย 80 คน`,
        'ใครสมัครได้บ้าง ?': `บุคคลที่มีอายุ 18 - 23 ปี หรือผู้ที่เกิดในช่วง 1 มกราคม 2540 - 1 มกราคม 2546`,
        'ค่ายจัดเมื่อไหร่ ?': `วันที่ 12 - 15 สิงหาคม 2564 ในรูปแบบของการเดินทางแบบไป-กลับ ไม่มีการค้างคืน`,
        'มีค่าใช้จ่ายไหม ?': `ไม่มีค่าใช้จ่ายในการสมัครและการเข้าร่วมกิจกรรมภายในค่าย`,
      },
    }
  },
  methods: {
    dismissQ(event) {
      if (!event.target.className.includes('not-close-zone')) {
        this.showingQ = ''
      }
    },
    selectQ(q) {
      if (this.showingQ === q) {
        this.showingQ = ''
      } else {
        this.showingQ = q
      }
    },
  },
}
</script>

<style scoped>
section {
  margin-top: 150px;
}
</style>
