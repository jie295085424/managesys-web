<template>
  <div style="text-align: left;margin: 0 auto; width: 70%">
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="权限名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="href"
      label="权限链接"
      width="180">
    </el-table-column>
    <el-table-column
      prop="method"
      label="权限方法"
      width="180">
    </el-table-column>
    <el-table-column
      prop="description"
      label="权限描述">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
  import Cookie from 'js-cookie'
  export default {
    data() {
      return {
        tableData: [{
          name: '',
          href: '',
          method: '',
          description: ''
        }]
      }
    },

    mounted() {
      this.getTableData();
    },

    methods: {
      getTableData() {
        let that = this;
        this.api.get('/sys/permission?token=' + Cookie.get('token')).then(function (res) {
          that.tableData = res.data.dataList;
        }).catch(function (err) {
          console.error(err);
        })
      }
    }
  }
</script>
