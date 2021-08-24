<template>
    <div>
        <Numberlist>
            <template v-slot:left-pokemon>
                <span class="poke-hundred-forty-seven"></span>
            </template>
              <template v-slot:left-pokename>
                  <span>No.151 梦幻</span>
              </template>
               <template v-slot:right-pokemon>
                <span class="poke-hundred-forty-nine"></span>
            </template>
             <template v-slot:right-pokename>
                <span>No.002 妙蛙草</span>
            </template>
        </Numberlist>
        <div>
            <table>
                <thead>
                    <tr>
                    <th>编号</th>
                    <th>宝可梦</th>
                    <th>12</th>
                </tr>
                </thead>
                <tbody>
               <tr>
                   <td>1</td>
                   <td colspan="2" style="text-align:center">2</td>
               </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import Numberlist from '../components/numberlist.vue';
export default {
    name:'one',
    components:{
        Numberlist
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/sass/smallpokemon.scss';
</style>