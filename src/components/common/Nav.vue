<template>
    <nav class="nav">
        <router-link v-for="nav in navList" :to="nav.path" :key="nav.id" :style="{width: 100/navList.length + '%'}">{{nav.text}}</router-link>
    </nav>
</template>

<script>
    export default {
        name: 'Nav',
        data() {
            return {
                navList: [
                    {path: '/home', text: '新歌'},
                    {path: '/bang', text: '排行'},
                    {path: '/category', text: '歌单'},
                    {path: '/artist', text: '歌手'}
                ]
            }
        }
    }
</script>

<style lang="less">
    .nav {
        position: fixed;
        z-index: 10;
        width: 100%;
        height: 2.6rem;
        border-bottom: 1px solid #ddd;
        background: #fff;
        margin-top: 3.75rem;
        a {
            float: left;
            font-size: 1.1rem;
            text-align: center;
            line-height: 2.6rem;
            color: #333;
            border-bottom: 2px solid transparent;
            text-decoration: none;
        }
        a.on {
            color: #2095dd;
            border-bottom: 2px solid #2095dd;
        }
    }
</style>