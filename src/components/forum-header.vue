<template>
    <div class="forum-header">
        <div class="forum-header-list">
            <ul>
                <li class="one"><img src="../assets/imgs/冠军.png" alt="赛事"><a href="javascript:;">赛事</a></li>
                <li class="two" @mouseover="changeOne" @mouseout="rechangeOne"><img src="../assets/imgs/精灵蛋.png" alt="攻略"><a href="javascript:;">攻略</a></li>
                <li class="three" @mouseover="changeOne" @mouseout="rechangeOne"><img src="../assets/imgs/背包.png" alt="杂谈"><a href="javascript:;">杂谈</a></li>
                <li class="four" @mouseover="changeOne" @mouseout="rechangeOne"><img src="../assets/imgs/喵猫.png" alt="交友"><a href="javascript:;">交友</a></li>
            </ul>
        </div>
        <div class="forum-search">
           <i class="el-icon-search"></i>
            <input type="text" class="forum-search-input" @focus="rotatepic" @blur="clearRotate">
        </div>
    </div>
</template>
<script>
export default {
    name:"forum",
    data(){
        return{
            num:0,
            state:null
        }
    },
    methods:{
        changeOne(){
            document.getElementsByClassName("one")[0].style.background="none";
        },
        rechangeOne(){
            document.getElementsByClassName("one")[0].style.background="#d31111";
        },
        rotatepic(){
            if(this.state==null){
              this.state = setInterval(()=>{
                this.num++;
                if(this.num>360){
                    this.num=0;
                }
                 document.styleSheets[7].addRule('.forum-header .forum-search[data-v-40ef976e]::before','transform: rotate('+this.num+'deg);transition:none;')
            },5);
            }
        },
        clearRotate(){
            clearInterval(this.state);
             document.styleSheets[7].addRule('.forum-header .forum-search[data-v-40ef976e]::before','transform: rotate(0deg);transition:all 1s;')
            this.state=null;
            this.num=0;
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/sass/mixin.scss';
.forum-header{
    width: 1080px;
    @include flex;
    background:#fdfafa;
    height: 60px;
    border-radius: 20px;
    margin: 0 auto ;
    margin-top: 50px;
    box-shadow: 2px 2px 5px #a8a5a5;
     .forum-header-list{
         margin-left: 40px;
        
         ul{
             display: flex;
             align-items: center; 
             .one:after{
              content: '';
             border-top: 6px solid #d31111;
             border-left: 7px solid transparent;
             position:absolute;
             top: 60px;
             left: -7px; 
         }
         .two:hover{
             background: #28d311;
         }
         .three:hover{
             background: #2411d3;
         }
         .four:hover{
             background: #d311a9;
         }
         .four:before{
              content: '';
             border-top: 6px solid #d311a9;
             border-right: 7px solid transparent;
             position: absolute;
             top: 60px;
             right: -7px;
         }
         li{
             width: 90px;
             height: 66px;
             box-sizing: border-box;
             transition: all 1s;
             position: relative;
             top: 3px;
             text-align: center;
             font-size: 12px;
             display: flex;
             align-items: center;
             justify-content: space-around;
             flex-direction: column;
             &:first-child{
                 border-bottom:6px solid #d31111;
                 background: #d31111;
             }
             &:nth-of-type(2){
                 border-bottom:6px solid #28d311;
             }
             &:nth-of-type(3){
                 border-bottom:6px solid #2411d3;
             }
             &:last-child{
                 border-bottom:6px solid #d311a9;
             }
             &:hover a{
                 color: black;
                 font-weight: bold;
             }
             a{
                color: #6d6c6c;
             }
             img{
                 width: 40px;
                 height: 40px;
             }
        }   } 
     }
     .forum-search{
         margin-right: 60px;
         border:2px solid #a8a5a5;
         height: 24px;
         line-height: 24px;
         border-radius: 10px;
         position: relative;
         i{
               margin:0px 5px;
         }
         input{
             border: none;
             outline: none;
             margin-right: 2px;
         }
         &:before{
             content: '';
             display: inline-block;
             position: absolute;
             background: url('../assets/imgs/pokemon-ball.png');
             background-size:cover;
             width: 28px;
             height: 28px;
             top: -3px;
             left: -34px;
         }
     }
}
</style>