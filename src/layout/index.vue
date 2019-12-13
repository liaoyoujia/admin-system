<template>
  <el-container class="layout-box">
    <el-header class="layout-header">
      <el-menu :default-active="activeIndex"
        class="el-menu-layout"
        mode="horizontal"
        @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">写作</el-menu-item>
        <el-menu-item index="3">关于我</el-menu-item>
        <el-menu-item index="4">关于我</el-menu-item>
      </el-menu>
      <el-dropdown class="right-menu"
        size="medium">
        <div class="avater-wrapper">
          <img src="../assets/logo.jpg"
            alt="logo"
            class="user-avater"><i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Github</el-dropdown-item>
          <el-dropdown-item>QQ</el-dropdown-item>
          <el-dropdown-item>WeChat</el-dropdown-item>
          <el-dropdown-item divided>注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>1
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.layout-box {
  width: 100%;
  .layout-header {
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
    border-bottom: solid 1px #e6e6e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-menu-layout {
      width: 100%;
      .el-menu-item {
        margin-right: 50px;
      }
    }
    .right-menu {
      .avater-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        .user-avater {
          display: block;
          margin-right: 8px;
          width: 38px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
