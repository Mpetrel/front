<template>
  <el-table
    :data="data"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="name">
    </el-table-column>
    <el-table-column
      prop="url"
      label="url">
    </el-table-column>
    <el-table-column
      prop="sizeName"
      label="size">
    </el-table-column>
    <el-table-column
      prop="hot"
      label="hot">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'CardList',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
