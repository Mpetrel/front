<template>
  <el-container>
    <el-main>
      <div class="search-form">
        <el-row :gutter="20">
          <el-col :span="6">&nbsp;</el-col>
          <el-col :span="8" v-loading="loading">'
            <div align="center"><img v-bind:src="imgUrl"/></div>
          </el-col>
          <el-col :span="4"></el-col>
          <el-col :span="6"></el-col>
        </el-row>
        <br>
        <el-row :gutter="20">
          <el-col :span="6">&nbsp;</el-col>
          <el-col :span="8"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
          <el-col :span="4">
            <el-button type="primary" v-on:click="search" size="medium" icon="el-icon-search" :loading="searchLoading">Search</el-button>
          </el-col>
          <el-col :span="6"></el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import {search} from '@/api/index'
import CardList from '@/components/list/CardList'
export default {
  name: 'Index',
  components: {CardList},
  data () {
    return {
      input: '',
      loading: true,
      searchLoading: false,
      imgUrl: '/static/img/logo.png',
      searchData: []
    }
  },
  mounted () {
    let that = this
    let logoImage = new Image()
    logoImage.src = this.imgUrl
    logoImage.onload = function () {
      that.loading = false
    }
  },
  methods: {
    handleSelect (e) {
      console.log(e)
    },
    search () {
      this.searchLoading = true
      let that = this
      search(this.input, 1).then(res => {
        that.searchData = res.data.list
        that.searchLoading = false
      }, err => {
        console.log(err)
        that.searchLoading = false
      })
    }
  }
}
</script>

<style scoped>
  .search-form {
    margin: 150px;
  }
</style>
