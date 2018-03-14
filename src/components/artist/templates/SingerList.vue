<template>
    <ul class="singer-ul">
        <li v-for="list in singer">
            <router-link :to="list.pathname">{{list.title}}</router-link>
            <i class="fa fa-angle-right"></i>
        </li>
    </ul>
</template>

<script>
    export default {
        props: ['singer']
    }
</script>

<style lang="less">
    .singer-ul {
        margin: 1.25rem;
        background: rgb(251, 251, 251);
        border: 1px solid rgb(228, 228, 228);
        border-radius: 5px;
        padding: 0;
        li {
            list-style: none;
            position: relative;
            border-top: 1px solid rgb(228, 228, 228);
            &:first-child {
                border-top: 0;
            }
            a {
                padding: 1.25rem;
                display: block;
                font-size: 1.3rem;
                color: rgb(51, 51, 51);
                text-decoration: none;
            }
            i {
                position: absolute;
                right: 1.25rem;
                font-size: 3rem;
                color: #d1d1d1;
                top: 0.6rem;
            }
        }
    }
</style>