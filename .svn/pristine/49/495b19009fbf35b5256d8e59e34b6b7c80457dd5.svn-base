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
                <router-link :to="{path:'/fxbb'}" tag="div" class="item">
                    <span>通知公告</span>
                </router-link>
                <router-link :to="{path:'/grxx'}" tag="div" class="item">
                    <span>监督举报</span>
                </router-link>
            </div>
            <div class="main-box">
                <router-link :to="{path:'/fxbb'}" tag="div" class="item">
                    <span>飞行报备</span>
                </router-link>
                <router-link :to="{path:'/grxx'}" tag="div" class="item">
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
            height: calc(100% - 230px);
            padding: 10px 0;
            // padding-top: 40px;
            .main-box{
                display: flex;
                height: calc(50% - 30px);
                .item{
                    height: 90%;
                    background-color: #ccc;
                    margin: 10px;
                    display: inline-block;
                    flex:1;
                    text-align: center;
                }    
            }
        }
        .foot-text{
            height: 50px;
            text-align: center;
            line-height: 50px;
            font-size: 15px;
        }
        .mint-swipe {
            height: 230px;
            color: #fff;
            font-size: 30px;
            text-align: center;
            // margin-bottom: 20px;
        }
        .slide {
            background-size: cover;
            background-repeat: no-repeat;
        }
        .slide1 {
            background-image: url(../assets/img/index/swipe1.jpeg);
        }

        .slide2 {
             background-image: url(../assets/img/index/swipe2.jpeg);
        }

        .slide3 {
             background-image: url(../assets/img/index/swipe3.jpeg);
        }
        
    }
    
</style>