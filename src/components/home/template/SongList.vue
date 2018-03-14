<template>
    <li v-if="seen" v-on:click="reverseMsg(song.title)">
        <span class="title" :title="song.singer">{{song.singer}} - {{song.title}}</span>
        <i :style="{background: 'url('+ downLoadIcon +') no-repeat'}"></i>
    </li>
</template>

<script>
    import downLoadIcon from './../../../static/outImg'
    export default {
        props: ['song'],
        data() {
            return {
                downLoadIcon: downLoadIcon,
                seen: true
            }
        },
        methods: {
            reverseMsg(title) {
                console.log('title: ', title)
            }
        }
    }
</script>

<style lang="less">
    .song-ul {
        padding: 0 0.833rem;
        margin: 0;
        li {
            width: 100%;
            list-style: none;
            display: table;
            border-bottom: 1px solid hsl(0, 0%, 90%);
            height: 4rem;
            .title {
                width: 100%;
                padding-right: 2.657rem;
                display: table-cell;
                vertical-align: middle;
                padding-left: .3571rem;
                cursor: pointer;
                font-size: 1.17rem;
                box-sizing: border-box;
            }
            i {
                width: 2rem;
                height: 2rem;
                margin-top: 1.5rem;
                display: inline-block;
                background-size: 100%;
            }
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>