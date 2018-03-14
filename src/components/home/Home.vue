<template>
  <div>
   <app-banner :listImg="listImg"></app-banner>
     
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
            console.log(a, b, c, d, e)
        }
    };
</script>