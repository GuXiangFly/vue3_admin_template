<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {Plus} from '@element-plus/icons-vue'
import SvgIcon  from '@/components/SvgIcon/index.vue'
import { onMounted } from 'vue'
import request from '@/utils/request'


onMounted(()=>{
  request({
    url: '/user/login',
    method: 'post',
    data:{
      "username": "admin",
      "password": "111111",
    }
  }).then((res)=>{
    console.log(res)
  })
  })

</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
