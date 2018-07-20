<template>
  <el-dialog
    title="文件详情"
    :visible.sync="showDialog"
    width="80%" >
    <el-table
      :data="itemDetailData"
      border
      style="width: 100%"
      v-loading="showLoading">
      <el-table-column
        prop="name"
        label="文件名称"
        >
      </el-table-column>
      <el-table-column
        prop="sizeName"
        label="大小"
       >
      </el-table-column>
    </el-table>
    <span slot="footer" class="dialog-footer">
    <el-button @click="closeDialog">取 消</el-button>
    <el-button type="primary" @click="closeDialog">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
import { detail } from '@/api/index'

export default {
  name: 'CardDetail',
  data () {
    return {
      itemDetailData: [],
      showLoading: false,
      showDialog: false
    }
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: () => { return false }
    },
    itemId: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  methods: {
    closeDialog () {
      this.$emit('closeDetail', false)
    },
    getDetail () {
      let that = this
      that.itemDetailData = []
      if (that.itemId) {
        that.showLoading = true
        detail(that.itemId).then(response => {
          that.itemDetailData = response.data.seedItems
          that.showLoading = false
        })
      }
    }
  },
  watch: {
    itemId: function (val) {
      this.getDetail()
    },
    dialogVisible: function (val) {
      this.showDialog = val
    },
    showDialog: function (val) {
      if (!val) {
        this.closeDialog()
      }
    }
  }
}
</script>

<style scoped>

</style>
