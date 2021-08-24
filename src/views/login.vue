<template>
    <div class="login">
        <div class="login-container">
        <div class="login-img"></div>
        <div class="login-table">
            <form action="submit" class="login-form">
                <div class="uername">
                <label for="username">用户名: </label><input type="text" name="username" id="username">
                </div>
                <div class="password">
                <label for="password">密码: </label><input type="password" name="password" id="password"><img :src="bool?imgurl1:imgurl2" alt="" class="closeeyes" @click="change">
                </div>
                <div class="btn">
                    <button @click="login">登录</button><button>注册</button>
                </div>
            </form>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'login',
    data(){
        return{
             imgurl1:require('../assets/imgs/close.png'),
             imgurl2:require('../assets/imgs/open.png'),
             bool:1,
        }
    },
    methods:{
        change(){
                 if(this.bool==0){
                 document.getElementById('password').type="password";
                 this.bool=1; 
             } else{
                      document.getElementById('password').type="text"; 
                    this.bool=0;  
                     } 
         },
         login(){
             this.$router.push('/');
         }
    }
}
</script>
<style lang="scss" scoped>
.login{
    width: 100%;
    background: url('../assets/imgs/login.jpg') no-repeat;
    background-size: cover;
    position: fixed;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
     .login-container{
         margin: auto;
         .login-img{
             width: 400px;
             height: 500px;
             background: url('../assets/imgs/backg.jpg') no-repeat;
             background-size: cover;
             float: left;
         }
         .login-table{
             width: 300px;
             height: 500px;
            float: left;
            margin-left: 60px;
            .login-form{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                .uername{
                    margin-top: 100px;
                    input{
                        outline: none;
                        height: 24px;
                        border: none;
                        border-radius: 4px;
                    }
                }
                .password{
                    margin-left: 34px;
                    position: relative;
                    input{
                        outline: none;
                        height: 24px;
                        border:none;
                       border-radius: 4px;
                    } 
                    img{
                            width: 20px;
                            height: 20px;
                            vertical-align: middle;
                        }
                }
                .btn{
                    margin-bottom: 206px;
                    margin-left: 36px;
                    button{
                        width: 50px;
                        height: 24px;
                        border-radius: 5px;
                        border: none;
                        margin: 0px 10px;
                    }
                }
            }
         }
     }
}
</style>