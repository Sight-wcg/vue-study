<template>
  <div>
    <h3>单选</h3>
    <el-row>
      <el-radio label="1" v-model="radiovalue">选项1</el-radio>
      <el-radio label="2" v-model="radiovalue">选项2</el-radio>
      <el-radio label="3" v-model="radiovalue">选项3</el-radio>
    </el-row>
    <p>{{ radiovalue }}</p>
    <h3>复选框</h3>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
    <p v-text="checkList"></p>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      radiovalue: '1',
      checkList: ['选中且禁用', '复选框 A'],
    }
  },
}
</script>

<style lang="scss" scoped>
</style>