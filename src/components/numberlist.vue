<template>
  <div class="numberlist-container">
      <div class="pokebar">
    <table class="pokemon-table">
      <tbody class="tb">
        <tr class="bgl">
          <td class="roundyleft">
            <table class="fulltable at-r">
              <tbody>
                <tr>
                  <td>
                    <router-link :to="href" title="妙蛙种子" >←</router-link>
                  </td>
                  <td>
                    <a href="javascript:;"><slot name="left-pokemon"></slot></a>
                  </td>
                  <td>
                    <slot name="left-pokename"></slot>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <th style="width: 14%">
            <a href="javascript:;" title="宝可梦列表（按全国图鉴编号）/简单版">第一世代</a>
          </th>
          <td class="roundyright">
            <table class="fulltable">
              <tbody>
                <tr>
                  <td>
                    <slot name="right-pokename"></slot>
                  </td>
                  <td><slot name="right-pokemon"></slot></td>
                  <td>
                    <router-link :to="hrefright" title="妙蛙花">→</router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "numberlist",
  data(){
      return{
        count:'',
        countright:''
      }
  },
  mounted(){
    let num=this.$router.history.current.path.split('/')[2];
    let numright=1+num*1;
    num--;
    if(num==0){
      num=151
    }
    if(numright==152){
      numright=1
    }
     switch(num.toString().length) {
     case 1:
          this.count="00"+num;
          this.countright="00"+(num+2);
          if(this.countright=="0010"){
   this.countright="010"
 }
 if(this.countright=="0011"){
   this.countright="011"
 }
        break;
     case 2:
        this.count="0"+num;
         this.countright="0"+(num+2);
         if(this.countright=="0100"){
   this.countright="100"
 }
 if(this.countright=="0101"){
   this.countright="101"
 }
        break;
      case 3:
        this.count=num;
 this.countright=num+2;
 if(this.countright==152){
   this.countright="001"
 }
 if(this.countright==153){
   this.countright="002"
 }
        break;
} 
  },
  computed:{
    href(){
      return "/handbook/"+this.count
    },
    hrefright(){
      return "/handbook/"+this.countright
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../assets/sass/mixin.scss';
@import '../assets/sass/basecolor.scss';
.numberlist-container{
       .pokebar{
         background: #c7c6c6;
         border-radius: 46px;
          border:1px solid #c7c6c6;
          width: 700px;
           .pokemon-table{
              background: $ColorC;
               border-radius: 40px;
               width: 680px;
               margin: 10px auto;
               .tb{
                 .bgl{
                    @include flex;
                   .roundyleft{
                     margin-left: 10px;
                   }
                   .roundyright{
                      margin-right: 10px;
                   }
              }
           }
           }
       }
}
</style>