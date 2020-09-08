<template>
  <a-locale-provider :locale="ANTD_THAI">
    <a-table
      class="retention-table"
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

export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      ANTD_THAI,
      columns: [
        {
          children: [
            {
              title: 'ลำดับที่',
              dataIndex: 'no',
              align: 'center',
              key: 'no',
              width: '10%',
            },
            {
              title: 'ประเภท / รายการข้อมูลส่วนบุคคล',
              dataIndex: 'description',
              align: 'left',
              key: 'description',
            },
            {
              title: 'ระยะเวลาประมวลผล',
              dataIndex: 'duration',
              align: 'center',
              key: 'duration',
              width: '20%',
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
.retention-table {
  max-width: 100%;
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
      color: #333;
      font-family: CmPrasanmit, system-ui, -apple-system, sans-sreif;
      font-size: 24px;
      line-height: 24px;
      font-weight: 600;
    }
    tr > th,
    tr > td {
      padding: 12px 12px !important;
      @media screen and (max-width: 768px) {
        padding: 8px 8px !important;
      }
    }
  }
}
</style>
