<template>
  <div id="app">
    <router-link to="/">基础组件</router-link>
    <Divider type="vertical" />
    <router-link to="/layout">布局组件</router-link>
    <Divider type="vertical" />
    <router-link to="/nav">导航组件</router-link>
    <Divider type="vertical" />
    <router-link to="/form">表单组件</router-link>
    <transition name="fade">
      <router-view/>
    </transition>

  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  padding: 10px;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.7s;
}
.fade-leave {
  opacity: 1;
}
.fade-leava-active {
  opacity: 0;
  transition: opacity 0.7s;
}
</style>
