<template>
  <a-locale-provider :locale="ANTD_THAI">
    <a-table
      class="package-table"
      :columns="columns"
      :dataSource="items"
      :rowKey="'idx'"
      size="middle"
      :pagination="false"
      bordered
    ></a-table>
  </a-locale-provider>
</template>

<script>
import ANTD_THAI from 'ant-design-vue/lib/locale-provider/th_TH'
import antDesignVueTable from '~/plugins/ant-design-vue-table'
import { colorScheme } from '~/utils/color'

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
              key: 'desc',
              customRender: renderContent,
            },
            {
              title: 'VIP',
              dataIndex: 'vip',
              align: 'center',
              key: 'vip',
              width: '14%',
              customRender: renderContent,
            },
            {
              title: 'GOLD',
              dataIndex: 'gold',
              align: 'center',
              key: 'gold',
              width: '14%',
              customRender: renderContent,
            },
            {
              title: 'SILVER',
              dataIndex: 'silver',
              align: 'center',
              key: 'silver',
              width: '14%',
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

<style lang="scss">
.package-table {
  max-width: 100%;
  overflow-x: scroll;
  .ant-table-thead {
    background: #fafafa;
    tr:first-child {
      display: none;
    }
  }
  .ant-table-tbody {
    background: white;
  }
  .ant-table-thead,
  .ant-table-tbody {
    font-weight: 500;
    tr > th {
      color: rgba(0, 0, 0, 0.85);
    }
    tr > td {
      color: #4f4f4f;
    }
    tr > th,
    tr > td {
      padding: 17px 16px !important;
      @media screen and (max-width: 768px) {
        padding: 8px 8px !important;
      }
    }
  }
}
</style>
