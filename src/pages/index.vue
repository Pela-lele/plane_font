<template>
<!--首页-->
    <div class="wrapper">
        <!-- <mt-header fixed title="无人机"></mt-header> -->
        <mt-swipe :auto="4000">
          <mt-swipe-item class="slide slide1"></mt-swipe-item>
          <mt-swipe-item class="slide slide2"></mt-swipe-item>
          <mt-swipe-item class="slide slide3"></mt-swipe-item>
        </mt-swipe>
        <div class="main">
            <div class="main-box">
                <router-link :to="{path:'/tzgg'}" tag="div" class="item item-1">
                    <i class="iconfont icon-imagevector"></i>
                    <span>通知公告</span>
                </router-link>
                <router-link :to="{path:'/jdjb'}" tag="div" class="item item-2">
                    <i class="iconfont icon-jubao"></i>
                    <span>监督举报</span>
                </router-link>
            </div>
            <div class="main-box">
                <router-link :to="{path:'/fxbb'}" tag="div" class="item item-3">
                    <i class="iconfont icon-icon-feixingmanyou"></i>
                    <span>飞行报备</span>
                </router-link>
                <router-link :to="{path:'/grxx'}" tag="div" class="item item-4">
                    <i class="iconfont icon-geren"></i>
                    <span>个人信息</span>
                </router-link>
            </div>
            <div class="foot-text">
                广州无人机管控平台 v1.0
            </div>
        </div>
    </div>
    
</template>



<style scoped lang="scss">
@import '../assets/sass/_base.scss';
    .wrapper{
        height: 100%;
        overflow: hidden;
        .main{
            // height: calc(100% - 210px);
            height: 65%;
            // padding: 10px 0;
            // padding-top: 40px;
            .main-box{
                display: flex;
                /* justify-content:center;
                align-items:center; */
                height: calc(50% - 20px);
                .item{
                    height: 90%;
                    background-color: #ccc;
                    margin: 10px;
                    display: inline-block;
                    flex:1;
                    text-align: center;
                    color: #fff;
                    font-size: 16px;
                    /* padding-top: 24px;
                    padding-bottom: 24px; */
                    box-sizing: border-box;
                    box-shadow: 1px 1px 1px $grey-color;
                    
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .iconfont{
                        font-size: 30px;
                        color: #fff;
                        display: block;
                        margin-bottom: 10px;
                    }
                    &.item-1{
                        background-color: #cdb672;
                    }
                    &.item-2{
                        background-color: #95a895;
                    }
                    &.item-3{
                        background-color: #f46b41;
                    }
                    &.item-4{
                        background-color: #be98cb;
                    }
                }    
            }
        }
        .foot-text{
            height: 40px;
            text-align: center;
            line-height: 40px;
            font-size: 14px;
            color: #6e6a6a;
        }
        .mint-swipe {
            // height: 210px;
            height: 35%;
            color: #fff;
            font-size: 30px;
            text-align: center;
            // margin-bottom: 20px;
        }
        .slide {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
        }
        .slide1 {
            background-image: url(../assets/img/index/swipe1.jpeg);
            
            // background-image: url(/static/img/index/swipe1.jpeg);
        }

        .slide2 {
             background-image: url(../assets/img/index/swipe2.jpeg);
        }

        .slide3 {
             background-image: url(../assets/img/index/swipe3.jpeg);
        }
        
    }
    
</style>