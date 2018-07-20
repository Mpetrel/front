<template>
  <el-container>
    <el-main>
      <transition name="fade">
        <div class="search-form" v-show="showMainContent">
          <el-row :gutter="20">
            <el-col :span="5">&nbsp;</el-col>
            <el-col :span="10" v-loading="loading">'
              <div align="center"><img v-bind:src="imgUrl" id="logoImg"/></div>
            </el-col>
            <el-col :span="4"></el-col>
            <el-col :span="5"></el-col>
          </el-row>
          <br>
          <el-row :gutter="20">
            <el-col :span="5">&nbsp;</el-col>
            <el-col :span="10"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
            <el-col :span="4">
              <el-button type="primary" v-on:click="search" size="medium" icon="el-icon-search" :loading="searchLoading">Search</el-button>
            </el-col>
            <el-col :span="5"></el-col>
          </el-row>
        </div>
      </transition>
    </el-main>
  </el-container>
</template>

<script>
// import {search} from '@/api/index'
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
      searchData: [],
      showMainContent: true
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
      if (!this.input) {
        return
      }
      this.searchLoading = true
      this.showMainContent = false
      setTimeout(() => {
        this.$router.push({
          path: '/search/' + this.input
        })
      }, 600)
    }
  }
}
</script>

<style scoped>
  .search-form {
    margin: 150px;
  }
  .fade-leave-active {
    transition-duration: 0.7s;
    transform: translate(-500px,-350px);
  }
  .fade-leave-to {
    opacity: 0.3;
  }
  #logoImg {
    cursor: pointer;
  }
</style>
