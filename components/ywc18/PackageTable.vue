<template>
  <a-locale-provider :locale="ANTD_THAI">
    <a-table
      class="agendaTable"
      :columns="columns"
      :dataSource="items"
      :rowKey="'idx'"
      size="middle"
      :pagination="false"
      bordered
    >
    </a-table>
  </a-locale-provider>
</template>

<script>
import ANTD_THAI from 'ant-design-vue/lib/locale-provider/th_TH'
import antDesignVueTable from '~/plugins/ant-design-vue-table'
import { colorScheme } from '~/utils/color'
ANTD_THAI.Table.sortTitle = 'เรียง'

export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      },
    },
    name: { type: String, default: 'วันที่' },
  },
  data() {
    const renderContent = (value, row, index) => {
      if (value && typeof value === 'boolean') {
        return (
          <img src={require('../../assets/images/ywc18/icon/icon_check.svg')} />
        )
      } else if (row.isTitle) {
        return {
          children: (
            <span style={{ color: colorScheme.orange.normal }}>{value}</span>
          ),
          attrs: {
            colSpan: value ? 4 : 0, // 0 = the cell will not be rendered.
          },
        }
      } else {
        return { children: value }
      }
    }
    return {
      ANTD_THAI,
      columns: [
        {
          children: [
            {
              title: 'สิทธิประโยชน์',
              dataIndex: 'description',
              align: 'left',
              customRender: renderContent,
            },
            {
              title: 'VIP',
              dataIndex: 'vip',
              width: '13%',
              align: 'center',
              customRender: renderContent,
            },
            {
              title: 'GOLD',
              dataIndex: 'gold',
              width: '13%',
              align: 'center',
              customRender: renderContent,
            },
            {
              title: 'SILVER',
              dataIndex: 'silver',
              width: '13%',
              align: 'center',
              customRender: renderContent,
            },
          ],
        },
      ],
    }
  },
  created() {
    antDesignVueTable()
  },
}
</script>

<style></style>
