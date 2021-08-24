<template>
  <div class="home">
    <Header>
      <template>
        
      </template>
    </Header>
    <Welcome/>
    <Middle/>
    <div >{{message}}</div>
    <div>{{abc}}</div>
    <div>{{count}}</div>
    <button @click="add">add</button>
    <button @click="addDelay">addDelay</button>
    <div>{{res}}</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <Bottom/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header-bar.vue'
import Bottom from '@/components/bottom.vue'
import Welcome from '@/components/welcome.vue'
import Middle from '@/components/middlecontent.vue'
export default {
  name: 'Home',
  components: {
   Header,
   Bottom,
   Welcome,
   Middle
  },
  computed:{
                  message(){
                    return this.$store.state.message
                  } ,
                  abc(){
                    return this.$store.getters.changeMsg
                  },
                  count(){
                    return this.$store.state.count
                  },
                   res(){
                  return 1
                }
                },
methods:{
  add(){
    this.$store.commit('add')
  },
  addDelay(){
    this.$store.dispatch('addDelay')
  }
}
}
</script>
<style lang="scss" scoped>
.home{
 width:100%;
  min-width: 1264px;
  margin: 0 auto;
}
</style>
