<template>
  <div class="handbook">
    <div>
      <Header />
      <div class="first-world">
      <h1>第一世代</h1>
      <div class="swipper">
        <div class="arrow-left"><i @click="down" class="el-icon-arrow-left"></i></div>
        <div class="pokemonpic">
          <img :src="pic3" alt="" :title="picalt3"/>
          <img :src="pic1" alt="" :title="picalt1"/>
          <img :src="pic" :alt="picalt" :title="picalt"/>
          <img :src="pic2" alt="" :title="picalt2"/>
          <img :src="pic4" alt="" :title="picalt4"/>
          </div>
        <div class="arrow-right"><i @click="up" class="el-icon-arrow-right"></i></div>
      </div>
      </div>
      <div class="poke-introduce">
      <Pokemon/>
      <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header-bar.vue";
import Pokemon from "@/components/pokemon.vue";
import PokeFirst from "../assets/json/pokefirst.json";
export default {
  name: "tujian",
  data() {
    return {
      pokename:[],
      count:3,
      count1:2,
      count2:4,
      count3:1,
      count4:5
    }
  },
  created(){
    return this.pokename=PokeFirst.data;
  },
  computed:{
      picalt(){
        return this.pokename[this.count-1].name;
      },
       picalt1(){
        return this.pokename[this.count1-1].name;
      },
       picalt2(){
        return this.pokename[this.count2-1].name;
      },
       picalt3(){
        return this.pokename[this.count3-1].name;
      },
       picalt4(){
        return this.pokename[this.count4-1].name;
      },
      pic(){
          return require("../../public/pokemonstor/"+this.count+".png")
      },
       pic1(){
          return require("../../public/pokemonstor/"+this.count1+".png")
      },
       pic2(){
          return require("../../public/pokemonstor/"+this.count2+".png")
      },
      pic3(){
        return require("../../public/pokemonstor/"+this.count3+".png")
      },
      pic4(){
        return require("../../public/pokemonstor/"+this.count4+".png")
      }
  },
  methods: {
    up() {
      this.count1++;
       this.count++; 
       this.count3++; 
       this.count4++; 
       this.count2++;
      if(this.count1>151){
        this.count1=1;
      }
     if(this.count>151){
        this.count=1;
      }
      if(this.count3>151){
        this.count3=1;
      }
      if(this.count4>151){
        this.count4=1;
      }
      if(this.count2>151){
        this.count2=1;
      }
    },
    down(){
      this.count3--;
      this.count4--;
      this.count--;
      this.count1--;
      this.count2--; 
      if(this.count3<1){
        this.count3=151
      }
      if(this.count2<1){
        this.count2=151
      }
      if(this.count1<1){
        this.count1=151
      }
      if(this.count<1){
        this.count=151
      }
      if(this.count4<1){
        this.count4=151
      }
    }
  },
  components: {
    Header,
    Pokemon
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/sass/mixin.scss';
.handbook {
  width: 100%;
  min-width: 1264px;
  .first-world{
     width: 1264px;
    margin: 0 auto;
  .swipper{
    color: #bbb8b8;
   
     @include flex;
     .arrow-left,.arrow-right{
       font-size: 60px;
       cursor: pointer;
     }
     .arrow-left{margin-left: 40px;}
     .arrow-right{margin-right: 40px;}
     .pokemonpic{
       width: 1000px;
       height: 200px;
       @include flex;
       img{
         width: 200px;
         transition: all 2000;
        }
      }
    }
  }
  .poke-introduce{
    @include flex($hov:space-around,$col:none);
    width: 1264px;
    margin: 0 auto;
  }
}
</style>