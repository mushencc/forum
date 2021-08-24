<template>
  <div class="pokemon-container">
    <table class="pokemontable">
      <tbody>
        <tr>
          <th style="width: 80px" rowspan="2">全国编号</th>
          <th colspan="3">宝可梦</th>
        </tr>
        <tr>
          <th style="width: 100px">中文</th>
          <th style="width: 100px">日文</th>
          <th style="width: 100px">英文</th>
        </tr>
        <tr>
          <td colspan="4">
            <h3>
               <b>
                <a href="/poke/第一世代" title="第一世代" >第一世代</a>
                </b>
            </h3>
          </td>
        </tr>
        <tr v-for="(item,index) in pokemonfirstworld" :key="index">
          <td>{{item.number}}</td>
          <td>
            <router-link :to="pokehref(item)" :title="pokename(item)">{{item.name}}</router-link>
          </td>
          <td>
            <router-link :to="pokehref(item)" :title="pokeJapanesename(item)">{{item.JapaneseName}}</router-link>
          </td>
          <td>
            <router-link :to="pokehref(item)" :title="pokeEnglishname(item)">{{item.EnglishName}}</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import PokeFirst from "../assets/json/pokefirst.json";
export default {
  name: "vpokemon",
  data(){
      return{
          pokemonfirstworld:[],
      }
  },
  mounted() {
    var pokee = PokeFirst.data;
   this.pokemonfirstworld=pokee;
  },
  methods:{
      pokehref(item){
            let a=item.number.split('');
            a.shift();
             return "/handbook/"+a.join('')
         },
     pokename(item){
         return item.name
         },
    pokeJapanesename(item){
      return item.JapaneseName
    },
    pokeEnglishname(item){
      return item.EnglishName
    }
  }
};
</script>
<style lang="scss" scoped>
  .pokemon-container{
      text-align: center;
      .pokemontable{
          margin: 0 auto;
          border: 1px solid;
          border-radius: 20px;
          font-size: 16px;
          width: 400px;
      }
  }
</style>