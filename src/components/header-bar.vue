<template>
    <div class="header-container">
        <div class="header-bar">
        <a class="logo-container" href="javascript:;"><img :src="picurl.url1" alt="" class="logo"></a>
        <div class="header-list">
        <router-link to="/">首页</router-link><span>|</span>
        <router-link to="/handbook">图鉴</router-link><span>|</span>
        <a href="javascript:;">对战</a><span>|</span>
        <router-link to="/forum">论坛</router-link><span>|</span>
        </div>
        <div class="header-search" @mouseover="changewidth">
            <i class="el-icon-search"></i>
            <input type="text"   @blur="chancel">
        </div>
        <slot name="login">
        <div class="login">
            <slot><router-link to="/login">登录</router-link></slot>
        </div>
        </slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'header',
    data(){
        return{
            picurl:{url1:require('../assets/imgs/logo-pokemon.png'),
             }
        }
    },
    methods:{
        changewidth(){
            document.getElementsByClassName('header-search')[0].style.width='150px';
        },
        chancel(){
             document.getElementsByClassName('header-search')[0].style.width='16px';
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/sass/mixin.scss';
@import '../assets/sass/basecolor.scss';
.header-container{
    width: 100%;
    height: 1em;
    background: #fdfafa;
    border-bottom: 3px solid $ColorA;
    min-width: 1264px;
    padding-bottom: 30px;
    box-shadow: 2px 2px 5px #888888;
    .header-bar{ 
        position: relative;
        @include flex;
        width: 1264px;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
        .logo-container{
            display: inline-block;
            margin-left: 18px;
        .logo{
            width: 120px;
        }
    } 
    .header-list{
        width: 217px;
        height: 25px;
        margin-right: 636px;
        margin-top: 16px;
        a{
           color: #837c7c;
           font-size:12px;
        }
        span{
            margin: 0 10px;
            &:last-child{
                display: none;
            }
        }
    }
    .header-search{
        position: absolute;
        right: 200px;
        border: 1px solid;
        border-radius: 8px;
        height: 18px;
        width: 16px;
        line-height: 18px;
        transition: width 1s;
        overflow: hidden;
        float: left;
        
        &:hover{
            width: 150px;
            transition: width 1s;
        }
        i{
            margin-right: 2px;
        }
        input{
            position: relative;
            width: 100px;
            height: 90%;
            border: none;
            background: #fdfafa;
            &:focus{
                outline: none;
            }
        }
    }
    .login{
        margin-right: 40px;
        a{
            color: #706b6b;
            font-size: 14px;
            height: 40px;
            line-height: 40px;
            &:before{
            content:" "; 
            display:inline-block;
            height: 20px;
            width: 20px;
            background: url('../assets/imgs/pokemon-trainer.png') no-repeat;
            background-size: 100%;
            margin-right: 20px;
            vertical-align: middle;
        }
        }
    }
  } 
}
</style>