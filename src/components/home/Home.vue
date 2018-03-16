<template>
  <div>
   <app-banner :listImg="listImg"></app-banner>
    <ul class="menu">
      <li><a href="/" ><b><i class="icon iconfont">&#xe621;</i></b><span>关于我们</span></a></li>
      <li><a href="/" ><b><i class="icon iconfont">&#xe622;</i></b><span>我的曲库</span></a></li>
      <li><a href="/" ><b><i class="icon iconfont">&#xe623;</i></b><span>产品展示</span></a></li>
      <li><a href="/" ><b><i class="icon iconfont">&#xe624;</i></b><span>播放列表</span></a></li>
      <li><a href="/" ><b><i class="icon iconfont">&#xe625;</i></b><span>下载中心</span></a></li>
      <li><a href="/" ><b><i class="icon iconfont">&#xe626;</i></b><span>团队简介</span></a></li>
      <li><a href="/" ><b><i class="icon iconfont">&#xe627;</i></b><span>人才招聘</span></a></li>
      <li><a href="/" ><b><i class="icon iconfont">&#xe628;</i></b><span>联系我呀</span></a></li>
      <li><a href="/" ><b><i class="icon iconfont">&#xe629;</i></b><span>在线留言</span></a></li>         
  </ul>   
  </div>
</template>

<script>
     import Banner from './template/Banner.vue' //导入Banner组件
    
     import { a, b, c, d, e } from './../../../static/outImg' //导入图片
     export default {
        data() {
            return {
                listImg: [
                    {url: a}, {url: b}, {url: c}, {url: d}, {url: e}
                ],
            }
        },
        components: {
            'app-banner': Banner,
        },
        created() {
            
        }
    };
</script>
<style lang="less">
 html, body { color:#222; font-family:Microsoft YaHei, Helvitica, Verdana, Tohoma, Arial, san-serif; margin:0; padding: 0; text-decoration: none; }
    img { border:0; }
    ul { list-style: none outside none; margin:0; padding: 0; }
    body {
        background-color:#eee;
    }
    body .menu:after { clear: both; content: " "; display: block; }

    body .menu li{
        float:left;
        margin-left: 2.5%;
        margin-top: 2.5%;
        width: 30%; 
        border-radius:3px;
        overflow:hidden;
    }

    .menu li a{ 
      display:block;  
      color:#0e3a6a;  
      text-align:center;

         text-decoration: none;
     
    }

    .menu li a b{
       align-items: center;
        justify-content: center;
       
        display: flex;
        height: 80px;
        
    }

    .menu li a i{
        font-size: 3rem;
    }

    .menu {
        li:nth-child(8n+1) {background-color:#36A1DB}
        li:nth-child(8n+2) {background-color:#678ce1}
        li:nth-child(8n+3) {background-color:#8c67df}
        li:nth-child(8n+4) {background-color:#84d018}
        li:nth-child(8n+5) {background-color:#14c760}
        li:nth-child(8n+6) {background-color:#f3b613}
        li:nth-child(8n+7) {background-color:#ff8a4a}
        li:nth-child(8n+8) {background-color:#fc5366}
    }
</style>