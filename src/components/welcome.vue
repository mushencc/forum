<template>
    <div class="welcome">
        <div class="welcome-container">
              <div class="title"><h1>欢迎各位训练家！</h1></div>
              <div class="content"><h4>无论你身在何处，拿起手中的精灵球对战吧！</h4></div>
        </div>
        <div class="arrow-down">
            <i class="el-icon-arrow-down"></i>
        </div>
    </div>
</template>
<script>
export default{
    name:'welcome'
}
</script>
<style lang="scss" scoped>
@import '../assets/sass/basecolor.scss';
.welcome{
    margin: 0 auto;
    width: 1264px;
    height: 890px;
    background: url('../assets/imgs/unnamed.webp') no-repeat;
    background-size: 100% 890px;
    min-width: 1226px;
    min-height: 890px;
    max-height: 890px;
    max-width: 1895px;
    position: relative;
    .welcome-container{
        width: 76%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        .title{
            padding-bottom: 20px;
            h1{
            color: $ColorB;
            letter-spacing: 4px;
        }
        }
        .content{
            margin-bottom: 192px;
            h4{
                color:$ColorB;
                font-weight: normal;
            }
        }

    }
    .arrow-down{
        position: absolute;
        right: 90px;
        top: 750px;
        width: 80px;
        height: 80px;
        font-size: 60px;
        cursor: pointer;
        border-radius: 50%;
        border: 3px solid $ColorB;
        opacity: 0.5;
        text-align: center;
        &:hover{
            opacity: 1;
        }
        i{
            color: white;
            line-height: 80px;
        }
    }
}
</style>