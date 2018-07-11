<template>
  <div id="app">
    <el-container>
      <el-header v-bgcolor>
        <el-menu id="menus" :default-active="'1'" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to="/addBlog">写博文</router-link></el-menu-item>
          <!-- <el-menu-item class="right" index="3"><router-link to="/about">test</router-link></el-menu-item> -->
          <el-input 
            size="mini"
            class="right input"
            placeholder="请输入内容"
            clearable>
          </el-input>
        </el-menu>
      </el-header>
      <router-view></router-view>
    </el-container>
  </div>
</template>



<script>
import Home from './components/Home'
import About from './components/About'
import {analyzeDate} from './date/analyzeDate.js'

export default {
  name: 'App',
  components: {
  },
  // created:function(){
  //   // console.log(analyzeDate())
  // }
}
</script>

<style>
  *{
    margin:0;
    padding:0;
    text-decoration: none;
  }

  body{
    background-color: #e6ecf0;
    color: #14171a;
    font-family: Microsoft YaHei,PingFang SC,Microsoft YaHei;
  }
  h1,h2,h3,h4,h5,h6,p,span{
    word-break: break-all;
  }

  .el-menu{
    max-width: 1040px;
    margin: auto;;
  }
  
  .el-header{
    box-shadow: 0 2px 2px #a8a8a8;
    height: 40px !important;
  }
  .el-header, .el-footer {
    text-align: center;
    line-height: 40px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
    border-bottom: 1px solid rgba(0,0,0,0.05);

  }
  
  /*对话框样式*/
  /*对话框body*/
  .el-dialog__body{
    padding: 0 20px 30px;
  }
  /*对话框title*/
  .el-dialog__title{
    font-size: 12px !important;
    color: #657786;
  }
  .margin-top-20{
    margin-top: 20px;
  }
  .margin-top-10{
    margin-top: 10px;
  }
  .margin-top-5{
    margin-top: 5px;
  }
  li{
    padding: 0;
  }
  .el-container{
    margin: 0;
  }
</style>

<style scoped>
  .el-menu-item{
    padding: 0;
  }
  .el-menu-item a{
    /*padding: 10px;*/
    padding: 10px 20px;
  }
  .right{
    float: right;
  }
  .input{
    /*height: 30px;*/
    /*line-height: 30px;*/
    width: 150px;
  }
  .el-menu--horizontal>.el-menu-item{
    line-height: 40px;
    height: 40px;
  }
</style>
