<template>
    <header class="header">
        <span class="search fa fa-search"></span>
        <div class="logo"><span></span></div>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style>
    .header {
        background: #1da0ef;
        height: 3.75rem;
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 2;
    }
    .search {
        display: inline-block;
        float: left;
        color: #fff;
        font-size: 1.5rem;
        margin-left: 0.833rem;
        margin-top: 1.2rem;
    }
    .logo {
        width: 7rem;
        height: 100%;
        margin: 0 auto;
    }
    .logo span {
        display: block;
        width: 100%;
        height: 100%;
        background: url('./files/logo.png') 0 center no-repeat;
        background-size: 100%;
    }
</style>