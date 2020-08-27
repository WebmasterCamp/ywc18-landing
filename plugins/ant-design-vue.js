import Vue from 'vue'
import { Spin, Icon, message, Row, Col } from 'ant-design-vue'

import 'ant-design-vue/lib/spin/style/index.css'
import 'ant-design-vue/lib/icon/style/index.css'
import 'ant-design-vue/lib/message/style/index.css'
import 'ant-design-vue/lib/grid/style/index.css'

Vue.use(Icon)
Vue.use(Spin)
Vue.use(Row)
Vue.use(Col)
Vue.prototype.$message = message
