<template>
    <div>
         <div>
                   123
         </div>
         <Testslot>
        <template v-slot:header>
        <span>请认真填写收货地址</span>
      </template>
         </Testslot>
    </div>
</template>
<script>
import Testslot from '@/components/slotcontent.vue'
export default{
    name:'Middle',
    components:{
           Testslot
    }
}
</script>
<style lang="scss" scoped>

</style>