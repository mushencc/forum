<template>
    <div class="forum">
        <div class="hid" @click="slide"><span class="arrow-down" style="color:#ffffff"><i class="el-icon-caret-bottom"></i></span></div>
        <Header class="header-one"></Header>
        <div class="backgroundpic"></div>
        <ForumHeader class="header-two"></ForumHeader>
        <div class="forum-container">
            <div class="left-side">
                <ul class="left-side-list">
                    <li class="agroup"><a href="javascript:;">菜鸟组</a>
                        <div class="agroup-container">
                           <ul>
                                <li class="first-list">
                                    <a href="javascript:;">第一世代</a>
                                                 <div>
                                                     <ul>
                                                         <li><a href="">火红</a></li>
                                                         <li><a href="">叶绿</a></li>
                                                         <li><a href="">黄</a></li>
                                                         <li><a href="">pokemoo</a></li>
                                                         <li><a href="">期待</a></li>
                                                     </ul>    
                                                 </div>
                                </li>
                                <li class="second-list"><a href="javascript:;">第二世代</a></li>
                                <li class="thired-list"><a href="javascript:;">第三世代</a></li>
                                <li class="fourth-list"><a href="javascript:;">第四世代</a></li>
                                <li class="fifth-list"><a href="javascript:;">第五世代</a></li>
                                <li class="sixth-list"><a href="javascript:;">第六世代</a></li>
                                <li class="seventh-list"><a href="javascript:;">第七世代</a></li>
                                <li class="eighth-list"><a href="javascript:;">第八世代</a></li>
                           </ul>
                        </div>
                    </li>
                    <li class="bgroup"><a href="javascript:;">初级组</a><div></div></li>
                    <li class="cgroup"><a href="javascript:;">中级组</a><div></div></li>
                    <li class="dgroup"><a href="javascript:;">大师组</a><div></div></li>
                    <li class="egroup"><a href="javascript:;">冠军组</a><div></div></li>
                </ul>
            </div>
            <div class="right-side">
                <ul>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
                </ul>
            </div>
      </div>
    </div>
</template>
<script>
import Header from '../components/header-bar.vue';
import ForumHeader from '../components/forum-header.vue';
export default {
    name:'forum',
    components:{
        Header,
        ForumHeader
    },
     mounted(){
      var forum = document.getElementsByClassName('header-two')[0];
      var forumTop = forum.offsetTop;
      window.onscroll = function() {
      var scrollT = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; 
      if(scrollT>forumTop){
            forum.style.position='fixed';
            forum.style.top="-50px";
            forum.style.left="50%";
            forum.style.transform="translate(-50%)"
      }else{
          forum.style.position='';
          forum.style.transform="";
          forum.style.top="";
            forum.style.left="";
      }
      }
    },
    methods:{
        slide(){
            document.getElementsByClassName('header-one')[0].style.top="0px";
            document.getElementsByClassName('hid')[0].style.top='-5px';
            setTimeout(()=>{
                    document.getElementsByTagName('i')[0].className="el-icon-caret-top";
            },1000);
            if(document.getElementsByTagName('i')[0].className=="el-icon-caret-top"){
                document.getElementsByClassName('header-one')[0].style.top="-50px";
                 document.getElementsByClassName('hid')[0].style.top='0px';
                setTimeout(()=>{
                    document.getElementsByTagName('i')[0].className="el-icon-caret-bottom";
            },1000);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/sass/mixin.scss';
.forum{
    width: 100%;
    height: 400px;
    .backgroundpic{
          background: url("../assets/imgs/backg1.jpg");
               width: 100%;
               height: 100%;
                position:fixed;
               top:0;
               left:0;
     background-repeat: no-repeat;
     background-size: cover;
    zoom: 1; 
    z-index: -1;
        }
      .hid{
    position: relative;
    top: 0px;
    left:50%;
    height: 15px;
        background:rgba(240, 215, 215);
        width: 98px;
        border-radius: 10px;
        z-index: 10;
        transition: top 1s;
        &:hover .arrow-down{
             top:2px;
              opacity: 1;
         }
    &:after{
        content: ' ';
        display: inline-block;
        position: absolute;
        left: 75px;
    width: 20px;
	height: 0px;
	border-top:14px solid rgba(240, 215, 215);
    border-right: 22px solid transparent;
     }
     &:before{
        content: ' ';
        display: inline-block;
        position: absolute;
        right: 75px;
    width: 20px;
	height: 0px;
	border-top:14px solid rgba(240, 215, 215);
    border-left: 22px solid transparent;
     }
     .arrow-down{
         position: absolute;
         left: 42px;
         opacity: 0.7;
     }
}
       .header-one{
    position: absolute;
    top: -50px;
    transition: top 1s;
}
    .forum-container{
        width: 1264px;
         margin: 0 auto;
        margin-top: 50px;
        font-size: 12px;
        font-weight: bold;
        .left-side{
            position: fixed;
            top: 200px;
            width: 50px;
           height: 258px;
           margin-left: 60px;
           background: #ffffff;
           box-shadow: 2px 2px 5px #b8b5b5;
           border-radius: 4px;
                 .left-side-list{
                     width: 100%;
                     .agroup{
                          text-align: center;
                         border-bottom: 2px solid #dad6d6;
                         height: 50px;
                         line-height: 50px;
                         a{
                               color: #6d6c6c;
                         }
                        .agroup-container{
                     border:1px solid #b8b5b5;
                     box-shadow: 2px 2px 5px #dad6d6;
                     width: 300px;
                     background: #ffffff;
                     position: absolute;
                     left: 60px;
                     top: -10px;
                     display: none;
                     &:before{
                         content: '';
                         display: block;
                         border-right: 10px solid #ffffff;
                         border-top: 10px solid transparent;
                         border-bottom: 10px solid transparent;
                         position: absolute;
                         right: 300px;
                         top:24px;
                         
                     }
                     ul{
                         li{
                            line-height: 20px;
                             div{
                                 height: 0px;
                                 overflow: hidden;
                                   transition: all 1s;
                                   border-top:2px solid #ffffff;
                                 ul{
                                     li{
                                         float: left;
                                         width: 25%;
                                     }
                                 }
                             }
                         }
                       .first-list{
                           &:hover{
                               background: #e2e2e2;
                           }
                           &:hover div{
                              height: 40px;
                              transition: height 1s;
                           }
                       }
                     }
                         }
                         &:hover div{
                             display: block;
                         }
                     }
                     .bgroup{
                          text-align: center;
                         border-bottom: 2px solid #dad6d6;
                         height: 50px;
                         line-height: 50px;
                         a{
                               color: #6d6c6c;
                         }
                           div{
                     width: 400px;
                     height: 100px;
                     background: #ffffff;
                     position: absolute;
                     left: 60px;
                     top: 42px;
                     display: none;
                     &:before{
                         content: '';
                         display: block;
                         border-right: 10px solid #ffffff;
                         border-top: 10px solid transparent;
                         border-bottom: 10px solid transparent;
                         position: relative;
                         right: 400px;
                         top:24px;
                         
                     }
                         }
                         &:hover div{
                             display: block;
                         }
                     }
                     .cgroup{
                          text-align: center;
                         border-bottom: 2px solid #dad6d6;
                         height: 50px;
                         line-height: 50px;
                         a{
                               color: #6d6c6c;
                         }
                           div{
                     width: 400px;
                     height: 100px;
                     background: #ffffff;
                     position: absolute;
                     left: 60px;
                     top: 94px;
                     display: none;
                     &:before{
                         content: '';
                         display: block;
                         border-right: 10px solid #ffffff;
                         border-top: 10px solid transparent;
                         border-bottom: 10px solid transparent;
                         position: relative;
                         right: 400px;
                         top:24px;
                         
                     }
                         }
                         &:hover div{
                             display: block;
                         }
                     }
                     .dgroup{
                          text-align: center;
                         border-bottom: 2px solid #dad6d6;
                         height: 50px;
                         line-height: 50px;
                         a{
                               color: #6d6c6c;
                         }
                           div{
                     width: 400px;
                     height: 100px;
                     background: #ffffff;
                     position: absolute;
                     left: 60px;
                     top: 146px;
                     display: none;
                     &:before{
                         content: '';
                         display: block;
                         border-right: 10px solid #ffffff;
                         border-top: 10px solid transparent;
                         border-bottom: 10px solid transparent;
                         position: relative;
                         right: 400px;
                         top:24px;
                         
                     }
                         }
                         &:hover div{
                             display: block;
                         }
                     }
                     .egroup{
                          text-align: center;
                         border-bottom: 2px solid #dad6d6;
                         height: 50px;
                         line-height: 50px;
                        border-bottom: none;
                         a{
                               color: #6d6c6c;
                         }
                           div{
                     width: 400px;
                     height: 100px;
                     background: #ffffff;
                     position: absolute;
                     left: 60px;
                     top: 198px;
                     display: none;
                     &:before{
                         content: '';
                         display: block;
                         border-right: 10px solid #ffffff;
                         border-top: 10px solid transparent;
                         border-bottom: 10px solid transparent;
                         position: relative;
                         right: 400px;
                         top:24px;
                         
                     }
                         }
                         &:hover div{
                             display: block;
                         }
                     }
        }
    }
    .right-side{
            width: 72%;
            height: 700px;
            margin-left: 260px;
            ul{ 
                width: 100%;
                li{ 
                    margin-top: 30px;
                    width: 100%;
                    background: #ffffff;
                    height: 300px;
                }
            }
    }
 }
}
</style>