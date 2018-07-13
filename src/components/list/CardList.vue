<template>
  <div>
    <div v-bind:key="item.url" v-for="item in data.list">
      <el-card class="box-card" >
          <el-row :gutter="20">
            <el-col :span="22">
              <el-row :gutter="20">
                <el-col :span="24">
                  <p><el-tag size="small">video</el-tag> &nbsp;{{item.name}} </p>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="4"> <el-rate v-model="rate" disabled > </el-rate></el-col>
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
    <div align="right" v-show="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page="currentPage"
        @current-change="handleCurrentPage"
        :total="data.totalPage">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardList',
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
      currentPage: 1
    }
  },
  methods: {
    download (url) {
      location.href = url
    },
    handleCurrentPage (page) {
      this.currentPage = page
      this.$emit('refreshList', page)
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

</style>
