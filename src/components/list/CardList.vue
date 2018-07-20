<template>
  <div>
    <div v-show="pagination" v-bind:key="item.url" v-for="item in data.list">
      <el-card class="box-card" shadow="hover" >
          <el-row :gutter="20">
            <el-col :span="22"  @click.native="checkDetail(item.hash)">
              <el-row :gutter="20">
                <el-col :span="24">
                  <p><el-tag size="small">video</el-tag> &nbsp;{{item.name}} </p>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="4"> <el-rate v-model="item.rate" disabled > </el-rate></el-col>
                <el-col :span="4"><el-tag type="info" size="mini">SIZE: {{item.sizeName}}</el-tag></el-col>
                <el-col :span="4"><el-tag type="info" size="mini">HOT: {{item.hot}}</el-tag></el-col>
                <el-col :span="4"><el-tag type="info" size="mini">DATE: {{item.createDate}}</el-tag></el-col>
              </el-row>
            </el-col>
            <el-col :span="2">
              <br>
              <el-button icon="el-icon-download" type="primary" circle @click="download(item.url)"></el-button>
            </el-col>
          </el-row>
      </el-card>
      <br/>
    </div>
    <div v-show="!pagination">
      <el-alert
        title="暂无数据"
        type="info"
        :closable="closeable"
        show-icon>
      </el-alert>
    </div>
    <div align="right" v-show="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page="currentPage"
        @current-change="handleCurrentPage"
        :total="data.totalPage">
      </el-pagination>
    </div>
    <card-detail :dialogVisible="dialogVisible" :itemId="detailId" @closeDetail="closeDetail"></card-detail>
  </div>
</template>

<script>
import CardDetail from '@/components/search/CardDetail'
export default {
  name: 'CardList',
  components: {CardDetail},
  comments: { CardDetail },
  props: {
    data: {
      type: Object,
      default: () => {
        return {totalPage: 1, list: []}
      }
    }
  },
  data () {
    return {
      rate: 4,
      pagination: false,
      currentPage: 1,
      closeable: false,
      dialogVisible: false,
      detailId: ''
    }
  },
  methods: {
    download (url) {
      location.href = url
    },
    handleCurrentPage (page) {
      this.currentPage = page
      this.$emit('refreshList', page)
    },
    checkDetail (id) {
      this.detailId = id
      this.dialogVisible = true
      console.log(this.dialogVisible)
    },
    closeDetail (dialogVisible) {
      this.dialogVisible = dialogVisible
      this.detailId = ''
    }
  },
  watch: {
    data: function (val, oval) {
      this.pagination = val.list.length > 0
      this.currentPage = val.currentPage
    }
  }
}
</script>

<style scoped>
.box-card {
  cursor: pointer;
}
</style>
