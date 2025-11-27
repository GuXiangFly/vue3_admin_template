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
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />

  <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
  <svg-icon name="lock" color="red" size="32px" />
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
