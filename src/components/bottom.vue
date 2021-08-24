<template>
    <div class="bottom">
            <div class="bottom-container">
                <div></div>
                <div>
                    <ul>
                        <li><a href="javascript:;"><img src="" alt=""></a></li>
                        <li><a href="javascript:;"><img src="" alt=""></a></li>
                        <li><a href="javascript:;"><img src="" alt=""></a></li>
                        <li><a href="javascript:;"><img src="" alt=""></a></li>
                    </ul>
                </div>
            </div>
            <div class="video">
                <audio controls="controls" loop="loop" preload="auto" style="width:100%;">
                     <source src="../assets/video/001.mp3" type="audio/mp3" />
                </audio>
            </div>
    </div>
</template>
<script>
export default {
    name:"bottom"
}
</script>
<style lang="scss" scoped>
@import '../assets/sass/basecolor.scss';
@import '../assets/sass/mixin.scss';
.bottom{
    border-top:3px solid $ColorA;
    width: 100%;
    height: 100%;
    min-width: 1226px;
   .bottom-container{
      width: 76%;
      height:150px;
      margin: 0 auto;
   }
   .video{
       width: 100%;
        position: relative;
        top: 10px;
   }
}
</style>