<template>
    <li>
        <router-link :to="list.pathname">
            <div class="left">
                <img :src="list.url" :alt="list.title">
            </div>
            <div class="right">
                {{list.title}}
            </div>
            <i class="fa fa-angle-right"></i>
        </router-link>
    </li>
</template>

<script>
    export default {
        props: ['list']
    }
</script>

<style lang="less">
.bang-ul {
    padding: 0;
    margin: 0;
    li {
        list-style: none;
        a {
            display: block;
            position: relative;
            margin-left: 1.25rem;
            padding: 3.65rem 1.25rem 3.65rem 10rem;
            border-bottom: 1px solid rgb(229, 229, 229);
            text-decoration: none;
            &:after {
                content: '';
                clear: both;
                display:block;
                width: 0;
                height: 0;
                visibility:hidden;
            }
            .left {
                position: absolute;
                top: .7143rem;
                left: 0;
                width: 8rem;
                height: 8rem;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .right {
                float: left;
                display: block;
                font-size: 1.4rem;
                color: rgb(51, 51, 51);
            }
            i {
                position: absolute;
                right: 1.25rem;
                font-size: 3rem;
                color: #d1d1d1;
                top: 3rem;
            }
        }
    }
}
</style>