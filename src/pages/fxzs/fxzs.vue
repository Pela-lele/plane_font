<template>
  <div class="wrapper">

      <ul class="mlist">
        <router-link :to="{path:'/fxzsDetail'}" tag="ul">
        <div class="list-cell">
          <div class="list-cell-wrapper" >
            <div class="list-cell-image">
              <img src="../../assets/img/grxx/zs.jpeg" width="100%" height="100%">
            </div>
            <div class="list-cell-title">
              <span class="list-cell-text">小明</span>
              <span class="list-cell-label">AOPA-CHINA(2830234)</span>
            </div>
          </div>
          <i class="iconfont icon-enter list-cell-allow-right"></i>
        </div>
        <div class="list-cell">
          <div class="list-cell-wrapper" >
            <div class="list-cell-image">
              <img src="../../assets/img/grxx/zs1.jpeg" width="100%" height="100%">
            </div>
            <div class="list-cell-title">
              <span class="list-cell-text">小明</span>
              <span class="list-cell-label">ASFC(2830789)</span>
            </div>
          </div>
          <i class="iconfont icon-enter list-cell-allow-right"></i>
        </div>
        </router-link>
      </ul>

    <router-link :to="{path:'/fxzsAdd'}" tag="div">
      <div class="common-footer">
        <span class="common-footer-btn">添加证书</span>
      </div>
    </router-link>
  </div>
</template>
<script>
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../assets/sass/_base';
</style>
