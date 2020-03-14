<template>
  <div id="app">
    <button @click='test'>阿斯顿撒多啊</button>
    <button @click='tests'>路由</button>
    <button @click='sss'>路由</button>
    <button @click='kd'>快递</button>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  methods:{
    test(){
      axios.post('http://localhost:8888/login',{list:'1111'},{withCredentials:true,headers:{bb:22}})
      .then(res=>{
        console.log(res);
      })
    },
    tests(){
      axios.get('http://localhost:8888/a/get',{withCredentials:true,headers:{aa:123 }})
      .then(res=>{
        console.log(res);
      })
    },
    sss(){
        axios.get('http://localhost:8888/getorsssss',{withCredentials:true ,headers:{Authorization:123}})
      .then(res=>{
        console.log(res);
      })
    },
    kd() {
      axios.get('/kuaidi/query?type=shentong&postid=11111').then(res => {
        console.log(res.data)
      }, res => {
        console.info('调用失败')
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
