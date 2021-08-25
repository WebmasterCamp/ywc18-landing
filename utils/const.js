export const majors = {
  content: ['Content', 'red', 'CT'],
  design: ['Design', 'yellow', 'DS'],
  marketing: ['Marketing', 'green', 'MK'],
  programming: ['Programming', 'blue', 'PG'],
}

export const INTERVIEW_QUESTIONS = {
  content: `
    <h4 class="subheading">สิ่งที่ท่านต้องเตรียมมา</h4>
    <ol>
      <li>การบ้าน 1 ข้อ (รายละเอียดด้านล่าง)</li>
      <li>Portfolio</li>
    </ol>
    <p><b class="themeText">เหตุการณ์</b> : ในสถานการณ์ความแตกต่างของวัยที่ปัจจุบันมีความคิดต่าง ที่ทำให้เกิด Generation Gap มากขึ้นเรื่อย ๆ ทั้งเรื่องการเมือง, LGBT+, การแสดงออก, การแต่งกาย, ค่านิยมในการใช้ชีวิตและอีกมากมาย
  </p><p>ทุกฝ่ายต่างมีเหตุผลของแต่ละฝั่ง และปิดกั้นการรับสื่อของฝ่ายตรงข้าม ทำให้เกิดการแตกแยก และขาดการสื่อสารที่ทำให้เกิดความเข้าใจในทั้งสองฝ่าย
</p>
<p>
<b class="themeText">โจทย์</b> : ให้ทำ Content ที่ทำให้ทั้ง 2 ฝ่ายเริ่มหันหน้าเข้ามาพูดคุยกัน เริ่มยอมรับฟังเสียงของอีกฝ่าย เพื่อให้เกิดการพูดคุยกันด้วยเหตุและผล
สามารถทำเป็นคอนเทนต์ประเภทใดก็ได้ ไม่จำกัด แต่เน้นที่ความคิดสร้างสรรค์ และสะดุดตาน่าสนใจพอที่จะทำให้ทั้งสองฝั่ง สนใจ และเริ่มกลับมาพูดคุยกันด้วยเหตุและผลได้จริง
</p><p><b class="themeText">ประเด็น</b> : สามารถเลือกประเด็นใดก็ได้ที่คิดว่าตอนนี้เกิด Generation Gap ที่ชัดเจน
  </p>
  <i class="themeText">หมายเหตุ</i> : ให้สร้าง Content ไม่ใช่เขียนแผนการตลาด หรือวางแผนการลง Media`,
  design: `<h3 class="themeText">ไม่มีการบ้าน</h3>
  โดยในวันสัมภาษณ์ กรรมการจะให้เวลา 30 นาทีในการทำโจทย์<i>ก่อนการเข้าห้องสัมภาษณ์</i> พร้อมทำการนำเสนองานออกแบบจากโจทย์ที่ได้รับภายใน 3 นาที
  <h4 class="subheading">สิ่งที่ท่านต้องเตรียมมา</h4>
  <ol>
    <li>Portfolio</li>
    <li>คอมพิวเตอร์พกพา (Laptop) พร้อมโปรแกรมออกแบบที่ถนัด หรือเตรียม Resource มาเพื่อรับโจทย์ในวันสัมภาษณ์</li>
  </ol>
  <h4 class="subheading">หมายเหตุ</h4>
  <ol class="nolist">
    <li>ผู้ที่มาสัมภาษณ์<b class="themeText">รอบเช้า</b> ให้มาลงทะเบียน<b class="themeText">ภายในเวลา 9:00 น. ทุกคน</b></li>
    <li>ผู้ที่มาสัมภาษณ์<b class="themeText">รอบบ่าย</b> ให้มาลงทะเบียน<b class="themeText">ภายในเวลา 12:45 น. ทุกคน</b></li>
  </ol>
  `,
  marketing: `<h3 class="themeText">ไม่มีการบ้าน</h3><p>ให้น้องเตรียมตัวสำหรับการสัมภาษณ์อย่างเต็มที่</p>`,
  programming: `
  <div style="text-align:center">
    <a href="/images/interview/programming_desktop_full.png" target="_blank" rel="noopener noreferrer" title="คลิกเพื่อแสดงภาพ Desktop ฉบับเต็ม"><img src="${require('~/assets/images/interview/programming_desktop.png')}" alt="ภาพตัวอย่างเว็บไซต์ Desktop" style="margin:1em;" /></a>
    <a href="/images/interview/programming_mobile_full.png" target="_blank" rel="noopener noreferrer" title="คลิกเพื่อแสดงภาพ Mobile ฉบับเต็ม"><img src="${require('~/assets/images/interview/programming_mobile.png')}" alt="ภาพตัวอย่างเว็บไซต์ Mobile" style="margin:1em;" /></a>
  </div>
  <center><i>คลิกที่ภาพเพื่อแสดงฉบับเต็ม</i></center><br />
  ให้พัฒนาเว็บไซต์ให้เหมือนกับภาพข้างบน โดยมีคุณสมบัติดังต่อไปนี้
  <ol>
    <li>รองรับหน้าจอทั้งแบบ Desktop และ Mobile</li>
    <li>สำหรับเนื้อหาต่าง ๆ ให้ใช้จาก JSON API ตาม URL นี้: <a href="https://panjs.com/ywc18.json" target="_blank" rel="noopener noreferrer"><b>https://panjs.com/ywc18.json</b></a></li>
    <li>เนื้อหาส่วนใดที่ API ไม่ได้ส่งมา อนุญาตให้ระบุแบบ Hard coded ลงไปใน HTML ได้</li>
    <li>นำ Source Code ขึ้นไปบน GitHub และ Deploy โดยใช้ GitHub Pages</li>
  </ol>`,
}

export const INTERVIEW_COLUMNS = [
  {
    title: 'รหัส',
    dataIndex: 'ref',
    sorter: (a, b) => a.ref.localeCompare(b.ref),
    defaultSortOrder: 'ascend',
    width: '12.5%',
    scopedSlots: { customRender: 'searchRender' },
  },
  {
    title: 'ชื่อ - นามสกุล',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    width: '72.5%',
    scopedSlots: { customRender: 'searchRender' },
  },
  {
    title: 'รอบ',
    dataIndex: 'round',
    sorter: (a, b) => a.round.localeCompare(b.round),
    width: '15%',
  },
]

export const FINALIST_LOAD_TIME = 4000
export const FINALIST_BANKACCOUNT = {
  no: '333-2-70210-6',
  name: 'นายธนกร ภาแสงเทียน',
  bank: 'ไทยพาณิชย์',
}
export const FINALIST_FORM_LINK = (info) => {
  return `https://bit.ly/ywc18confirm-2020`
}
export const FINALIST_COLUMNS = [
  {
    title: 'รหัส',
    dataIndex: 'interviewRef',
    sorter: (a, b) => a.interviewRef.localeCompare(b.interviewRef),
    width: '12.5%',
  },
  {
    title: 'ชื่อ - นามสกุล',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    width: '62.5%',
  },
  {
    title: 'จำนวนเงิน',
    dataIndex: 'verificationAmount',
    sorter: (a, b) => a.verificationAmount.localeCompare(b.verificationAmount),
    width: '20%',
  },
]
export const RESERVE_COLUMNS = [
  {
    title: 'รหัส',
    dataIndex: 'interviewRef',
    sorter: (a, b) => a.interviewRef.localeCompare(b.interviewRef),
    width: '12.5%',
  },
  {
    title: 'ชื่อ - นามสกุล',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    width: '82.5%',
  },
]

export const SPONSOT_PACKAGES = {
  vip: {
    benefits: [
      'บรรยายพิเศษเดี่ยว 30 นาที',
      'โลโก้บริเวณกิจกรรมย่อยทุกกิจกรรม',
      'โลโก้บนเวที และ Live ถ่ายทอดสดวันสุดท้าย',
      'โลโก้บนเว็บไซต์ทุกจุดสำคัญ',
      'แนะนำข้อมูลและใบสมัครงานของบริษัทแก่ผู้เข้าค่าย',
    ],
    price: '200,000',
  },
  gold: {
    benefits: [
      'Panel Discussion ร่วมเวทีเสวนา',
      'โลโก้บริเวณกิจกรรมย่อย 5 กิจกรรม',
      'โลโก้บนเวที และ Live ถ่ายทอดสดวันสุดท้าย',
      'โลโก้บนเว็บไซต์ในส่วนผู้สนับสนุน',
      'แนะนำข้อมูลและใบสมัครงานของบริษัทแก่ผู้เข้าค่าย',
    ],
    price: '50,000',
  },
  silver: {
    benefits: [
      'Panel Discussion ร่วมเวทีเสวนา',
      'โลโก้บริเวณกิจกรรมย่อย 2 กิจกรรม',
      'โลโก้บนเวที',
      'โลโก้บนเว็บไซต์ในส่วนผู้สนับสนุน',
      'แนะนำข้อมูลและใบสมัครงานของบริษัทแก่ผู้เข้าค่าย',
    ],
    price: '30,000',
  },
}

export const PACKAGES = [
  {
    description: 'จำนวนผู้สนับสนุน (ราย)',
    vip: '3',
    gold: '5',
    silver: 'ไม่จำกัด',
    isTitle: false,
  },
  {
    description: 'ก่อนกิจกรรม',
    vip: false,
    gold: false,
    silver: false,
    isTitle: true,
  },
  {
    description: 'สัมภาษณ์ผู้บริหารลงใน Facebook Page',
    vip: true,
    gold: false,
    silver: false,
  },
  {
    description: 'หน้าเว็บไซต์',
    vip: false,
    gold: false,
    silver: false,
    isTitle: true,
  },
  {
    description: 'โลโก้หัวเว็บไซต์ (Header)',
    vip: true,
    gold: false,
    silver: false,
  },
  {
    description: 'โลโก้ท้ายเว็บไซต์ (Footer)',
    vip: true,
    gold: false,
    silver: false,
  },
  {
    description: 'โลโก้ที่หัวข้อผู้สนับสนุน',
    vip: true,
    gold: true,
    silver: true,
  },
  {
    description: 'สื่อประชาสัมพันธ์',
    vip: false,
    gold: false,
    silver: false,
    isTitle: true,
  },
  {
    description: 'โลโก้บนรูปภาพประชาสัมพันธ์ค่าย',
    vip: true,
    gold: false,
    silver: false,
  },
  {
    description: 'โลโก้บนหน้าปกของ Facebook Page',
    vip: true,
    gold: true,
    silver: false,
  },
  {
    description: 'โลโก้ในวีดีโอ',
    vip: true,
    gold: true,
    silver: true,
  },
  {
    description: 'โลโก้ใน Live ถ่ายทอดสด (วันสุดท้าย)',
    vip: true,
    gold: true,
    silver: false,
  },
  {
    description: 'โลโก้บนโปสเตอร์',
    vip: true,
    gold: false,
    silver: false,
  },
  {
    description: 'สิ่งที่ผู้เข้าร่วมโครงการทุกคนจะได้รับ',
    vip: false,
    gold: false,
    silver: false,
    isTitle: true,
  },
  {
    description: 'เอกสารแนะนำบริษัทและใบสมัครงาน',
    vip: true,
    gold: true,
    silver: true,
  },
  {
    description: 'ป้ายชื่อ: โลโก้บนป้ายชื่อผู้เข้าค่ายและทีมงาน',
    vip: true,
    gold: false,
    silver: false,
  },
  {
    description: 'เสื้อยืด: โลโก้บนหลังเสื้อผู้เข้าค่ายและทีมงาน',
    vip: true,
    gold: true,
    silver: false,
  },
  {
    description: 'ประกาศนียบัตร: โลโก้บนประกาศนียบัตรผู้เข้าค่าย',
    vip: true,
    gold: false,
    silver: false,
  },
  {
    description: 'กิจกรรม',
    vip: false,
    gold: false,
    silver: false,
    isTitle: true,
  },
  {
    description: 'โลโก้ในกิจกรรมย่อยภายในค่าย',
    vip: 'ทุกกิจกรรม',
    gold: '5 กิจกรรม',
    silver: '2 กิจกรรม',
  },
  {
    description: 'โลโก้บนป้ายรางวัล',
    vip: true,
    gold: false,
    silver: false,
  },
  {
    description: 'เวที',
    vip: false,
    gold: false,
    silver: false,
    isTitle: true,
  },
  {
    description:
      'ช่วงบรรยายพิเศษให้ความรู้โดยผู้สนับสนุน (บรรยายเดี่ยว 30 นาที)',
    vip: true,
    gold: false,
    silver: false,
  },
  {
    description: 'Panel Discussion แบ่งปันประสบการณ์การทำงาน (ร่วมเวทีเสวนา)',
    vip: false,
    gold: true,
    silver: true,
  },
  {
    description: 'โลโก้บนเวที',
    vip: true,
    gold: true,
    silver: true,
  },
  {
    description: 'หลังกิจกรรม',
    vip: false,
    gold: false,
    silver: false,
    isTitle: true,
  },
  {
    description:
      'ตัวแทนผู้เข้าค่ายขอบคุณผู้สนับสนุนและนำเสนอรายงานสรุปโครงการที่สำนักงาน พร้อมถ่ายภาพและโพสต์ขอบคุณผ่าน Facebook Page',
    vip: true,
    gold: false,
    silver: false,
  },
  {
    description: 'กล่าวถึงผู้สนับสนุนหลักในข่าวประชาสัมพันธ์ในสื่อต่าง ๆ',
    vip: true,
    gold: false,
    silver: false,
  },
  {
    description: 'แนะนำข้อมูลบริษัทและข้อมูลการรับสมัครงานผ่าน Facebook Page',
    vip: true,
    gold: true,
    silver: false,
  },
  {
    description:
      'แนะนำข้อมูลบริษัทและข้อมูลการรับสมัครงานผ่านอีเมลของผู้เข้าค่าย',
    vip: true,
    gold: true,
    silver: true,
  },
  {
    description: 'โพสต์ขอขอบคุณผู้สนับสนุนทางสื่อสังคมออนไลน์',
    vip: true,
    gold: true,
    silver: true,
  },
]

export const DATA_RETENTION = [
  {
    description: 'ข้อมูลที่บ่งชี้ตัวตน อาทิ ชื่อ อายุ สัญชาติ วันเกิด อายุ',
    no: 1,
    duration: '1 ปี',
  },
  {
    description:
      'ข้อมูลช่องทางการติดต่อ อาทิ ที่อยู่ สถานที่ติดต่อ เบอร์โทร อีเมล',
    no: 2,
    duration: '1 ปี',
  },
  {
    description: 'ข้อมูลบัญชี อาทิ รายละเอียดการชำระเงิน และบัญชีธนาคาร',
    no: 3,
    duration: '1 ปี',
  },
  {
    description:
      'ข้อมูลทางธุรกรรม อาทิ ประวัติการรับบริการต่าง ๆ ประวัติการซื้อขาย',
    no: 4,
    duration: '1 ปี',
  },
  {
    description:
      'ข้อมูลส่วนตัว อาทิ ชื่อบัญชีผู้ใช้ รหัสผ่าน การสั่งซื้อ ความสนใจของท่านที่มีต่อบริการต่างๆของผู้ให้บริการ',
    no: 5,
    duration: '1 ปี',
  },
  {
    description:
      'ข้อมูลทางการตลาด อาทิ ความพึงพอใจของท่านต่อบริการที่ได้รับ และความเห็นต่อการให้บริการของบุคลากร',
    no: 6,
    duration: '1 ปี',
  },
]

export const AGENDA = [
  {
    name: 'วันที่ 1 : วันพฤหัสบดี ที่ 12 สิงหาคม 2564',
    items: [
      {
        time: '9:00 - 9:30 น.',
        events: [
          `พิธีเปิด<br>โดย <b>คุณวโรรส โรจนะ</b> <i>นายกสมาคมผู้ดูแลเว็บไทย</i>`,
        ],
      },
      {
        time: ' 9:30 - 10:30 น.',
        events: [
          `บรรยายหัวข้อ “จริยธรรมและกฎหมายควรรู้ในยุคดิจิทัล”<br>โดย <b>คุณชวรงค์ ลิมป์ปัทมปาณี</b> และ <b>คุณไพบูลย์ อมรภิญโญเกียรติ</b>`,
        ],
      },
      {
        time: '10:30 - 10.40 น.',
        events: [
          `พักเบรก`,
        ],
      },
      {
        time: '10:40 - 11:40 น.',
        events: [
          `Panel Discussion หัวข้อ “ วางแผนการทำงานของวงการดิจิทัลในปี 2021 ”<br>โดย <b>คุณภูมิปรินทร์ มะโน</b> - <i>BRIKL</i>, <b>คุณภัทราวุธ ซื่อสัตยาศิลป์</b> - <i>LINE MAN Wongnai</i>,<br> <b>คุณสิงขร เทพยสุวรรณ</b> - <i>Thairath Online</i> และ <b>คุณธนภูมิ เจริญศิริ</b> - <i>Appman</i>
     `,
        ],
      },
      {
        time: '11:40 - 12:10 น.',
        events: [
          `Panel Discussion หัวข้อ “เทคนิคการนำเสนอผลงานอย่างมืออาชีพ ”<br>โดย <b>คุณอภิศิลป์ ตรุงกานนท์</b> - <i>Pantip</i> และ <b>คุณมติชน มณีกาศ</b> - <i>Easy Rice Digital Technology</i>`,
        ],
      },
      {
        time: '12:10 - 13:00 น.',
        events: [`พักกลางวัน`],
      },
      {
        time: '13:00 - 13:30 น.',
        events: [`กิจกรรมนันทนาการ`],
      },
      {
        time: '13:30 - 14:00 น.',
        events: [
          `การบรรยายในหัวข้อ “Customer Insight for Agile Product Development”<br>
      โดย <b>ดร.นนท์ อัครประเสริฐกุล</b> ฝ่ายส่งเสริมเมืองอัจฉริยะ - <i>สำนักงานส่งเสริมเศรษฐกิจดิจิทัล (depa)</i>`,
        ],
      },
      { time: '', events: [`การบรรยายสาขา ช่วงที่ 1`] },
      {
        time: '14:00 - 15:00 น.',
        events: [
          `บรรยายสาขา Web Content หัวข้อ “เทคนิคการเล่าเรื่องให้คนจำจนวันตาย”<br>โดย <b>คุณอภิศิลป์ ตรุงกานนท์</b>`],
      },
      {
        time: '14:00 - 15:30 น.',
        events: [
          `บรรยายสาขา Web Design หัวข้อ “User Experience Design”<br>โดย <b>คุณสุธัม ธรรมวงศ์</b>`,
          `บรรยายสาขา Web Marketing หัวข้อ “Online Marketing Platform Analysis”<br>โดย <b>ดร.ธีรศานต์ สหัสสพาศน์</b>`,
          `บรรยายสาขา Web Programming หัวข้อ “การสร้างผลงานแบบ Minimum Viable Product และ Task Management for Developer”<br>โดย <b>คุณปัญจมพงศ์ เสริมสวัสดิ์ศรี</b>`,
        ],
      },
      {
        time: '15:00 - 15:15 น.',
        events: [`พักเบรก Web Content`],
      },
      {
        time: '15:30 - 15:45 น.',
        events: [`พักเบรก Web Design, Web Marketing, Web Programming`],
      },
      { time: '', events: [`การบรรยายสาขา ช่วงที่ 2`] },
      {
        time: '15:15 - 17:15 น.',
        events: [
          `บรรยายสาขา Web Content หัวข้อ “Creating Impact with Content & Digital Content Technique และ Valuable Creative Content” <br>
      โดย <b>คุณขจร เจียรนัยพานิชย์</b> และ <b>คุณจักรพงษ์ คงมาลัย</b>`,
        ],
      },
      {
        time: '15:45 - 17:15 น.',
        events: [
          `บรรยายสาขา Web Design หัวข้อ “User Interface Design”<br>โดย <b>คุณอินทนนท์ ปัญญาโสภา</b>`,
          `บรรยายสาขา Web Marketing หัวข้อ “How to make conversion from customer” <br>โดย <b>คุณสุธีรพันธุ์ สักรวัตร</b>`,
          `บรรยายสาขา Web Programming หัวข้อ “Web Optimizations” <br>โดย <b>คุณวรัทธน์ วงศ์มณีกิจ</b>`,
        ],
      },
      {
        time: '17:15 - 17:30 น.',
        events: [`พักเบรก`],
      },
      {
        time: '17:30 - 18:30 น.',
        events: [`กิจกรรมเข้ากลุ่ม`],
      },
      { time: '18:30 น.', events: [`สิ้นสุดกิจกรรมวันที่ 1`] },
    ],
  },
  {
    name: 'วันที่ 2 : วันศุกร์ ที่ 13 สิงหาคม 2564',
    items: [
      { time: '9:00 - 11:00 น.', events: ['แจกโจทย์ค่าย + วิชาเรียนรวม “How to find you idea” โดย คุณวรัทธน์ วงศ์มณีกิจ'] },
      {
        time: '11:00 - 12:00 น.',
        events: ['Workshop การหา Customer Insight โดย คุณวรัทธน์ วงศ์มณีกิจ'],
      },
      {
        time: '12:00 - 13:00 น.',
        events: ['พักกลางวัน'],
      },
      {
        time: '13:00 - 16:00 น.',
        events: ['กิจกรรมเก็บข้อมูลจากผู้ใช้จริง'],
      },
      {
        time: '16:00 - 17:00 น.',
        events: ['Mini Consult'],
      },
      {
        time: '17:00 - 18:00 น.',
        events: ['พักเย็น'],
      },
      {
        time: '18:00 - 21:00 น.',
        events: ['เริ่มเข้า Consult กับกรรมการ และรุ่นพี่ YWC'],
      },
      { time: '21:00 น.', events: ['สิ้นสุดกิจกรรมวันที่ 2'] },
    ],
  },
  {
    name: 'วันที่ 3 : วันเสาร์ ที่ 14 สิงหาคม 2564',
    items: [
      {
        time: '9:00 - 10:00 น.',
        events: ['ชี้แจงรายละเอียด และเตรียมตัวสำหรับการ Workshop'],
      },
      { time: '10:00 - 12:00 น.', events: ['Creation Workshop 1'] },
      { time: '12:00 - 13:00 น.', events: ['พักกลางวัน'] },
      { time: '13:00 - 18:00 น.', events: ['Creation Workshop 2'] },
      {
        time: '18:00 - 18:15 น.',
        events: ['หมดเวลา Workshop และ ชี้แจงรายละเอียดกิจกรรมวันถัดไป'],
      },
      { time: '18:15 น.', events: ['สิ้นสุดกิจกรรมวันที่ 3'] },
    ],
  },
  {
    name: 'วันที่ 4 : วันอาทิตย์ ที่ 15 สิงหาคม 2564',
    items: [
      { time: '9:00 - 9:30 น.', events: ['ชี้แจงรายละเอียดการนำเสนอผลงาน และเกณฑ์การตัดสิน'] },
      { time: '09:30 – 10:00 น.', events: ['เตรียมตัวนำเสนอผลงาน'] },
      { time: '10:00 - 12:00 น.', events: ['การนำเสนอผลงาน ช่วงที่ 1'] },
      { time: '12:00 - 13:00 น.', events: ['พักกลางวัน'] },
      { time: '13:00 - 15:30 น.', events: ['การนำเสนอผลงาน ช่วงที่ 2'] },
      { time: '15:30 – 16:00 น.', events: ['ประกาศผลรางวัล และมอบรางวัล'] },
      {
        time: '16:00 – 16:30 น.',
        events: [
          `พิธีปิดโครงการอบรมเชิงปฏิบัติการ Young Webmaster Camp ครั้งที่ 18<br>โดย <b>คุณศิรณัชชา วุฒิประพันธ์พงศ์</b> <i>ผู้จัดการโครงการ และเลขาธิการ สมาคมผู้ดูแลเว็บไทย</i>`,
        ],
      },
      {
        time: '16:30 น.',
        events: ['สิ้นสุดกิจกรรม'],
      },
    ],
  },
]

export const BLOGS = [
  {
    title: 'รีวิวค่าย YWC18',
    cover: '/images/ywc18/blog/cover/06.jpeg',
    avatar: '/images/ywc18/blog/avatar/06.jpeg',
    name: 'Jirunthanin Pimapidisaya',
    url:
      'https://www.facebook.com/permalink.php?story_fbid=1233639703734767&id=100012662464770',
  },
  {
    title: 'จบค่าย #YWC18 กับ 2 รางวัล Outstanding & Best Teamwork',
    cover: '/images/ywc18/blog/cover/07.jpeg',
    avatar: '/images/ywc18/blog/avatar/07.jpeg',
    name: 'Amonpan Lertbanapan',
    url:
      'https://www.facebook.com/surubamark/posts/3057134764522587',
  },
  {
    title: 'รีวิวประสบการณ์ค่าย Young web master camp ครั้ง ที่ 18 ฉบับเด็กเอ๋อสมัครครั้งแรก',
    cover: '/images/ywc18/blog/cover/08.jpeg',
    avatar: '/images/ywc18/blog/avatar/08.jpeg',
    name: 'Theeraphan Sutthiprapha',
    url:
      'https://www.facebook.com/biw.teerapan/posts/1941221752711406',
  },
  {
    title: 'รีวิวค่าย YWC - Young Webmaster Camp ครั้งที่ 18 "ค่ายสร้างเว็บที่ได้อะไรมากกว่าแค่สร้างเว็บ"',
    cover: '/images/ywc18/blog/cover/09.jpeg',
    avatar: '/images/ywc18/blog/avatar/09.jpeg',
    name: 'Chachrist Thongsumrit',
    url:
      'https://www.facebook.com/imswiftie1989/posts/4298155463595004',
  },
  {
    title: 'รีวิว #YWC18',
    cover: '/images/ywc18/blog/cover/10.jpeg',
    avatar: '/images/ywc18/blog/avatar/10.jpeg',
    name: 'Naphat Butsaba',
    url:
      'https://www.facebook.com/napat.busaba/posts/6400787806605679',
  },
  {
    title: 'รีวิวครั้งหนึ่งในชีวิตกับค่าย Young Webmaster Camp ค่ายบ้าอะไรแทบไม่ได้นอน!!!',
    cover: '/images/ywc18/blog/cover/11.jpeg',
    avatar: '/images/ywc18/blog/avatar/11.jpeg',
    name: 'Sirinda Limsong',
    url:
      'https://www.facebook.com/sirinda.limsong/posts/5895312377206582',
  },
  {
    title: '#YWC16 : 4 วัน 3 คืนกับค่ายที่เป็นมากกว่าค่าย',
    cover: '/images/ywc18/blog/cover/01.jpeg',
    avatar: '/images/ywc18/blog/avatar/01.jpeg',
    name: 'Chonrada Kongmuang',
    url:
      'https://medium.com/@chnrd.k/ywc16-4-%E0%B8%A7%E0%B8%B1%E0%B8%99-3-%E0%B8%84%E0%B8%B7%E0%B8%99%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%A1%E0%B8%B2%E0%B8%81%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%A2-62320272dfc8',
  },
  {
    title: 'YWC ก็เหมือนเซ็กส์ (บันทึกชีวิตในค่าย + ระบายจากใจฝั่งคอนเทนต์)',
    cover: '/images/ywc18/blog/cover/02.jpeg',
    avatar: '/images/ywc18/blog/avatar/02.jpeg',
    name: 'Pattranit Kongsaenkam',
    url:
      'https://medium.com/@pattranitkongsaenkam/ywc-%E0%B8%81%E0%B9%87%E0%B9%80%E0%B8%AB%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B9%80%E0%B8%8B%E0%B9%87%E0%B8%81%E0%B8%AA%E0%B9%8C-%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B9%83%E0%B8%99%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%A2-%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B2%E0%B8%A2%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B9%83%E0%B8%88%E0%B8%9D%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%99%E0%B8%95%E0%B9%8C-ffe01af1b978',
  },
  {
    title:
      'รีวิวค่าย YWC: ทำไมค่ายแค่ 4 วัน ถึงส่งยังคงส่งผลกับชีวิตเรามามากกว่า 4 ปี',
    cover: '/images/ywc18/blog/cover/03.jpg',
    avatar: '/images/ywc18/blog/avatar/03.jpg',
    name: 'ORN SMITH',
    url: 'https://ornsmith.com/post-ywc-review/',
  },
  {
    title: 'ค่ายบ้าอะไร แทบไม่ได้นอน YWC#14',
    cover: '/images/ywc18/blog/cover/04.jpg',
    avatar: '/images/ywc18/blog/avatar/04.jpeg',
    name: "P'Benz YWC14",
    url:
      'https://microbenz.in.th/%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3-%E0%B9%81%E0%B8%97%E0%B8%9A%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%99%E0%B8%AD%E0%B8%99-ywc14-b9471330ed54',
  },
  {
    title: 'ประสบการณ์เข้าค่าย #YWC16',
    cover: '/images/ywc18/blog/cover/05.jpeg',
    avatar: '/images/ywc18/blog/avatar/05.jpeg',
    name: 'Janjie Khemanij',
    url:
      'https://medium.com/@jankhemanij/%E0%B8%9A%E0%B8%AD%E0%B8%81%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%A2-ywc16-1a397bcf5044',
  },
]

export const OPEN_REGISTRATION = '2020-09-14T11:00:00.000Z' // 14/09/2020 18.00
