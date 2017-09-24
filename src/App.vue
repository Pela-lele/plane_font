<template>
  <div id="app">
    <!-- <keep-alive> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: Helvetica Neue,Helvetica,STHeiTi,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;
  margin-top: 60px;*/
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #F4F4F4;
  font-size: 1.4rem;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
::-webkit-scrollbar {
    width: 2px;
    height: 2px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,.1);
}
</style>
