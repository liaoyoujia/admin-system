<template>
  <div id="app">
    <div id="nav">
      <div class="ad">3123123</div>
      <div class="ac"></div>
      <el-button>默认按钮</el-button>
      <el-button>默认按钮</el-button>
      <el-button>默认按钮</el-button>
      <el-button>默认按钮</el-button>
      <el-button>默认按钮</el-button>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.ac {
  @include div;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
