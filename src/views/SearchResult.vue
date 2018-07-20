<template>
  <transition name="el-zoom-in-top">
    <el-container v-show="showSearchContent">
      <br>
      <el-header height="120px">
        <el-row :gutter="20">
          <el-col :span="2"><img id="logoImg" v-bind:src="imgUrl" height="44" width="120" @click="goIndex"/></el-col>
          <el-col :span="12">
            <el-input
              placeholder="请输入"
              v-model="keyword">
            </el-input>
          </el-col>
          <el-col :span="2"><el-button type="primary" icon="el-icon-search" v-on:click="search" :loading="searchLoading">Search</el-button></el-col>
          <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="2">&nbsp;</el-col>
          <el-col :span="14">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"  @select="handleSelect">
              <el-menu-item index="0">热度</el-menu-item>
              <el-menu-item index="1">时间</el-menu-item>
              <el-menu-item index="2">大小</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="8">&nbsp;</el-col>
        </el-row>
      </el-header>
      <el-main >
        <el-row :gutter="20">
          <el-col :span="2">&nbsp;</el-col>
          <el-col :span="14" v-loading="searchLoading" >
            <card-list v-show="!searchLoading" :data="searchData" @refreshList="search"></card-list>
          </el-col>
          <el-col :span="8">&nbsp;</el-col>
        </el-row>
      </el-main>
    </el-container>
  </transition>
</template>

<script>
import {search} from '@/api/index'
import CardList from '@/components/list/CardList'
export default {
  name: 'SearchResult',
  components: {CardList},
  data () {
    return {
      activeIndex: '0',
      imgUrl: '/static/img/logo.png',
      keyword: '',
      rate: 3,
      searchData: {},
      searchLoading: false,
      showSearchContent: false,
      sortType: ['click', 'ctime', 'length']
    }
  },
  mounted: function () {
    this.showSearchContent = true
    this.keyword = this.$route.params.keyword
    this.search()
  },
  methods: {
    search (page) {
      if (!this.keyword) {
        return
      }
      if (!page || typeof page !== 'number') {
        page = 1
      }
      this.searchLoading = true
      let that = this
      search(that.keyword, that.sortType[that.activeIndex], page).then(res => {
        that.searchData = res.data
        that.searchLoading = false
      }, err => {
        console.log(err)
        that.searchLoading = false
      })
    },
    handleSelect (index) {
      this.activeIndex = index
      this.search()
    },
    goIndex () {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>
#logoImg {
  cursor: pointer;
}
</style>
