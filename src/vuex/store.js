import Vue from 'vue'
import Vuex from 'vuex'
 Vue.use(Vuex);
const store = new Vuex.Store({
        namespaced:true,
    state:{
        message:'hello,world',
        count:0
    },
    getters:{
        changeMsg:function(state){
                return state.message+'fuck'
        }
    },
    mutations:{
        add(state){
             state.count++
        }
    },
    actions:{
        addDelay(context){
            setTimeout(() => {
                context.state.count++
            }, 2000);
        }
    },
    module:{
          myPage:{
              namespaced:true,
              state:()=>({
                res:'hello'
              })
          }
    }
})
export default store;