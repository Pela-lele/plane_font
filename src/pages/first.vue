<template>
<!--首页-->
    <div class="wrapper">
        <div class="header-title">
            <div class="back-img"></div>
            <p>无人机飞行报备平台</p>
        </div>
        <div class="main">
            <div class="btns">
                <a class="btn geren" @click="goHome('geren')"><i class="iconfont icon-user"></i>个人用户</a>
                <a class="btn qiye" @click="goHome('qiye')"><i class="iconfont icon-duoren"></i>企业用户</a>
                <a class="btn youke" @click="goHome('youke')"><i class="iconfont icon-youke"></i>游客</a>
            </div>
        </div>
    </div>
    
</template>

<script>
    import {mapMutations} from 'vuex';
    export default {
        methods: {
            ...mapMutations([
                'RECORD_ENTERTYPE'
            ]),
            goHome(auth) {
                switch (auth) {
                    case "youke":
                        this.RECORD_ENTERTYPE("youke");
                        this.$router.push("/jdjb");
                        break;
                    case "geren":
                        this.RECORD_ENTERTYPE("geren");
                        this.$router.push("/index");
                        break;
                    case "qiye":
                        this.RECORD_ENTERTYPE("qiye");
                        this.$router.push("/index");
                        break;
                }
            }
        },
        created(){
        }
    }
</script>

<style scoped lang="scss">
@import '../assets/sass/_base.scss';
    .wrapper{
        height: 100%;
        overflow: hidden;
       // background: url(../assets/img/index/back1.jpg) no-repeat;
       background-size: cover;
        .header-title{
            text-align: center;
            height: 40%;
            vertical-align: middle;
            position: relative;

            .back-img{
                width: 100%;
                height: 100%;
                background: url(../assets/img/index/wrj.jpg) no-repeat;
                background-size: cover;
                filter: blur(3px);
            }
            p{
                width: 100%;
                font-weight: 600;
                font-size: 24px;
                letter-spacing: 2px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform:translate(-50%,-50%);
                color: #fff;
                text-shadow: 1px 1px 2px #000;
            }
        }
        .main{
            position: relative;
            height: 60%;
            .btns{
                width: 100%;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                text-align: center;
                .btn:active{
                    top: 1px;
                }
                .btn{
                    width: 80%;
                    font-size: 15px;
                    height: 45px;
                    line-height: 45px;
                    text-align: center;
                    background-color: #ccc;
                    margin: 12px auto;
                    border-radius: 5px;
                    position: relative;

                    display: inline-block;
                    background: #222 url(../assets/img/index/overlay.png) repeat-x;
                    color: #fff;
                    text-decoration: none;
                    -moz-border-radius: 6px;
                    -webkit-border-radius: 6px;
                    -moz-box-shadow: 0 1px 3px rgba(0,0,0,0.6);
                    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.6);
                    text-shadow: 0 -1px 1px rgba(0,0,0,0.25);
                    border-bottom: 1px solid rgba(0,0,0,0.25);
                    position: relative;
                    cursor: pointer;
                    
                    i.iconfont{
                        position: absolute;
                        left: 10px;
                        font-size: 22px;
                    }
                    &.youke{
                        background-color: #2981e4;

                    }
                    &.geren{
                        background-color: #e62727;
                    }
                    &.qiye{
                        background-color: #ff5c00;
                    }
                }
            }
            
        }
    }
    
</style>