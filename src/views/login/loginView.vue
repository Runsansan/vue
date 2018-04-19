

<template>
<div class="login">
    <h1>登录</h1>
 <Input class="denglu" v-model="value1" size="large" placeholder="请输入用户名"></Input>
    <br>
    <Input class="denglu" v-model="value2" size="large" placeholder="请输入密码"></Input>
    <Button type="primary" @click="login" class="denglu" >登录</Button>
</div>
   
</template>
<script>
import data from '../../libs/mock';
//import axioServer from '../../api/server';
    export default {
        data () {
            return {
                value1: '',
                value2: '',
                value3: '',
                datanenw:{
                        "code": "string",
                        "password": "cai123456",
                        "userCode": "cai"
                        }
            }
        },mounted:function(){
   //this.axiosTest();

        },methods:{
          axiosTest(){
 this.$http.get('http://g.cn').then( 
        (successData) => {console.log(successData.data);},

          (fileData) => {console.log(fileData);})
          },
          puthUrl(){
         
          },
          login(){
               this.$http.post('/web/login',this.datanenw).then( 
        (successData) => {console.log(successData.data);},

          (fileData) => {console.log(fileData);})
            //   this.$http.get('/web/login',this.datanenw,res =>{
            //       console.log(res)
            //      //this.$router.push({ path: '/index' })
            //   })
          }
        }
    }
</script>
<style scoped>
.login{
    width: 300px;
     height: 300px;
     margin: 0 auto;
     position: absolute;
     margin-top: -150px;
     top:50%;
       margin-left: -150px;
     left:50%;
}
.denglu{margin-top: 20px;}
</style>