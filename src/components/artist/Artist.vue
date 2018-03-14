<template>
    <div>
        <artist-list v-for="singer in Object.keys(artist)" :key="singer.id" v-if="singer === 'listOne'" :singer="artist.listOne"></artist-list>
        <artist-list v-for="singer in Object.keys(artist)" :key="singer.id" v-if="singer === 'listTwo'" :singer="artist.listTwo"></artist-list>
        <artist-list v-for="singer in Object.keys(artist)" :key="singer.id" v-if="singer === 'listThree'" :singer="artist.listThree"></artist-list>
        <artist-list v-for="singer in Object.keys(artist)" :key="singer.id" v-if="singer === 'listFour'" :singer="artist.listFour"></artist-list>
    </div>
</template>

<script>
    import SingerList from './templates/SingerList.vue'
    const artList = require('./../../../static/data/data')
    console.log('artList',artList.default)
    var artList1 = artList.default.artList
    export default {
        components: {
            'artist-list': SingerList
        },
        data() {
            return {
                artist: artList1
            }
        }
    }
</script>