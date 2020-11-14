export const majors = {
  content: ['Content', 'red', 'CT'],
  design: ['Design', 'yellow', 'DS'],
  marketing: ['Marketing', 'green', 'MK'],
  programming: ['Programming', 'blue', 'PG'],
}

export const INTERVIEW_QUESTIONS = {
  content: `<ul>
      <li>การบ้าน 1 ข้อ</li>
      <li>ให้น้องนำมาส่งวันสัมภาษณ์</li>
    </ul>
    <p><b class="themeText">เหตุการณ์</b> : ในสถานการณ์ความแตกต่างของวัยที่ปัจจุบันมีความคิดต่าง ที่ทำให้เกิด Generation Gap มากขึ้นเรื่อยๆ ทั้งเรื่องการเมือง, LGBT, การแสดงออก, การแต่งกาย, ค่านิยมในการใช้ชีวิต และอีกมากมาย
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
  marketing: `<h3 class="themeText">ไม่มีการบ้าน</h3><p>ให้น้องเตรียมตัวสำหรับการสัมภาษณ์</p>`,
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
  no: '0-202-9269-7198',
  name: 'น.ส. วรัญญา วิมลเกียรติ',
  bank: 'ออมสิน',
}
export const FINALIST_FORM_LINK = (info) => {
  return `https://bit.ly/ywc17-cf`
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
    name: 'วันพฤหัสบดีที่ 26 ธันวาคม พ.ศ.2562',
    items: [
      {
        time: '8:30 - 9:00',
        events: [
          `ลงทะเบียน ณ ห้องประชุมใหญ่คณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง`,
        ],
      },
      {
        time: '9:00 - 9:30',
        events: [
          `พิธีเปิด โครงการอบรมเชิงปฏิบัติการ Young Webmaster Camp ครั้งที่ 17`,
        ],
      },
      {
        time: '9:30 - 10:30',
        events: [
          `เสวนาหัวข้อ “การทำงานในวงการดิจิทัล” <br>ดำเนินรายการโดย คุณเมธปริยา คำนวนวุฒิ<br><ul><li>คุณณัฏฐชัย เลาหชัย, <i>Solution Advisor at ExxonMobil</i></li><li>คุณวโรรส โรจนะ, <i>นายกสมาคมผู้ดูแลเว็บไทยและ Co-Founder at Dek-D</i></li></ul>`,
        ],
      },
      { time: '10:30 - 10:45', events: [`พักรับประทานอาหารว่าง`] },
      {
        time: '10:45 - 11:45',
        events: [
          `การบรรยายในหัวข้อ “จริยธรรมและกฎหมายควรรู้ในยุคดิจิทัล”<br>โดย กรรมการควบคุมจริยธรรม สมาคมผู้ดูแลเว็บไทย<br><ul><li>คุณชวรงค์ ลิมป์ปัทมปาณี</li><li>คุณอัครวุฒิ ตำราเรียง</li></ul>`,
        ],
      },
      { time: '11:45 - 12:45', events: [`รับประทานอาหารกลางวัน`] },
      {
        time: '12:45 - 14:45',
        events: [
          `การบรรยายแยกสาขา 1`,
          `สาขา Web Marketing หัวข้อ <br>“ภาพรวม Digital Marketing ในปัจจุบัน”<br>โดย คุณศิวัตร เชาวรียวงษ์, <i>นายกสมาคม DAAT</i>`,
          `สาขา Web Design หัวข้อ <br>1. “Basic Web Design (UI)”<br>โดย คุณอินทนนท์ ปัญญาโสภา, <i>Founder at Grappik</i><br>2. “ทฤษฎีที่เกี่ยวข้องกับการออกแบบและเทรนด์ในปัจจุบัน”<br>โดย คุณคนที่หนึ่ง แสงหิรัญ, <i>อาจารย์ประจำภาควิชาสาขาการออกแบบนิเทศศิลป์ คณะนิเทศศาสตร์ มหาวิทยาลัยอัสสัมชัญ</i>`,
          `สาขา Web Content หัวข้อ<br>“ภาพรวมการทำ Content ในปัจจุบัน”<br>โดย คุณขจร เจียรนัยพานิชย์, <i>Founder at The Zero Publishing</i><br> คุณจักรพงษ์ คงมาลัย, <i>Managing Director at Moonshot Digital</i>`,
          `สาขา Web Programming หัวข้อ<br>1. “Web Development Trends and Technologies in 2019”<br>โดย คุณธนนันท์ ตั้งธนาชัยกุล, <i>Head of Technology of TakeMeTour</i><br>2. “Web Optimization”<br>โดย คุณวรัทธน์ วงศ์มณีกิจ, <i>Product Owner at WISESIGHT</i>`,
        ],
      },
      { time: '14:45 - 15:30', events: [`กิจกรรม Ice Breaking`] },
      { time: '15:30 - 15:45', events: [`พักรับประทานอาหารว่าง`] },
      { time: '15:45 - 16:00', events: [`ชี้แจงกำหนดการ`] },
      {
        time: '16:00 - 18:00',
        events: [
          `การคิดเชิงออกแบบ (Design Thinking)<br>โดย คุณวรัทธน์ วงศ์มณีกิจ, <i>Product Owner at WISESIGHT</i>`,
        ],
      },
      { time: '18:00 - 19:00', events: [`รับประทานอาหารเย็น`] },
      { time: '19:00 - 21:00', events: [`ระดมความคิด (Brainstorm) 1`] },
      { time: '21:00 - 21:15', events: [`ชี้แจงกำหนดการ`] },
      { time: '21:15', events: [`กลับเข้าที่พัก`] },
    ],
  },
  {
    name: 'วันศุกร์ที่ 27 ธันวาคม พ.ศ.2562',
    items: [
      { time: '7:30 - 8:00', events: ['รับประทานอาหารเช้า'] },
      { time: '8:00 - 8:30', events: ['เดินทางสู่สถานที่จัดกิจกรรม'] },
      { time: '8:30 - 10:00', events: ['กิจกรรมสันทนาการ'] },
      { time: '10:00 - 10:15', events: ['พักรับประทานอาหารว่าง'] },
      {
        time: '10:15 - 11:15',
        events: [
          'การบรรยายแยกสาขา 2',
          'สาขา Web Marketing หัวข้อ <br>“เครื่องมือโฆษณาสำหรับนักการตลาดดิจิทัล”<br>โดย คุณเมธปรียา คํานวนวุฒิ, <i>ผู้จัดการฝ่ายการตลาด LnwShop Co., Ltd.</i>',
          'สาขา Web Design หัวข้อ <br>“User Experience for Web Design”<br>โดย คุณสุธัม ธรรมวงศ์, <i>Senior UX Designer at SCB10X</i>',
          'สาขา Web Content หัวข้อ<br>“การสร้างและจัดการ Community”<br>โดย คุณอภิศิลป์ ตรุงกานนท์, <i>Chief Product Officer at Pantip</i>',
          'สาขา Web Programming หัวข้อ<br>“How to be Great Software Developer”<br>โดย คุณปัญจมพงศ์ เสริมสวัสดิ์ศรี, <i>C-3PO at Cleverse</i>',
        ],
      },
      {
        time: '11:15 - 12:30',
        events: ['ระดมความคิด (Brainstorm) 3', 'รับประทานอาหารกลางวัน'],
      },
      { time: '12:30 - 16:30', events: ['ลงพื้นที่เก็บข้อมูลจริงจากผู้ใช้'] },
      {
        time: '16:30 - 18:00',
        events: [
          'การบรรยาย “วิธีการนำเสนอผลงานอย่างมืออาชีพ”<br>โดย คุณผรินทร์ สงฆ์ประชา, <i>Chief Executive and Founder of Nasket</i>',
        ],
      },
      { time: '18:00 - 18:45', events: ['รับประทานอาหารเย็น'] },
      { time: '18:45 - 21:00', events: ['ระดมความคิด (Brainstorm) 4'] },
      { time: '21:00 - 21:15', events: ['ชี้แจงกฎการ Workshop'] },
      { time: '21:15', events: ['กลับเข้าที่พัก'] },
    ],
  },
  {
    name: 'วันเสาร์ที่ 28 ธันวาคม พ.ศ.2562',
    items: [
      { time: '7:30 - 8:00', events: ['รับประทานอาหารเช้า'] },
      { time: '8:00 - 8:30', events: ['เดินทางสู่สถานที่จัดกิจกรรม'] },
      { time: '8:30 - 18:00', events: ['Workshop'] },
      { time: '18:00 - 18:30', events: ['พักรับประทานอาหารเย็น'] },
      { time: '18:30 - 21:30', events: ['กิจกรรมสันทนาการ'] },
      { time: '21:30 - 21:45', events: ['เตรียมออกเดินทาง'] },
      { time: '21:45', events: ['กลับเข้าที่พัก'] },
    ],
  },
  {
    name: 'วันอาทิตย์ที่ 29 ธันวาคม พ.ศ.2562',
    items: [
      { time: '7:30 - 8:00', events: ['รับประทานอาหารเช้า'] },
      { time: '8:00 - 8:30', events: ['เดินทางสู่สถานที่จัดกิจกรรม'] },
      { time: '8:30 - 9:00', events: ['เตรียมตัวสำหรับการนำเสนอผลงาน'] },
      { time: '9:00 - 12:00', events: ['การนำเสนอผลงาน'] },
      { time: '12:00 - 13:00', events: ['พักรับประทานอาหารกลางวัน'] },
      { time: '13:00 - 14:30', events: ['การนำเสนอผลงาน (ต่อ)'] },
      { time: '14:30 - 15:15', events: ['พิธีมอบเกียรติบัตร'] },
      { time: '15:15 - 16:00', events: ['พิธีประกาศผลและมอบรางวัล'] },
      {
        time: '16:00 - 16:30',
        events: [
          'พิธีปิด โครงการอบรมเชิงปฏิบัติการ Young Webmaster Camp ครั้งที่ 17',
        ],
      },
    ],
  },
]

export const BLOGS = [
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
