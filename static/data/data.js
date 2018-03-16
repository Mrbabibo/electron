import { bang1, bang2, bang3, bang4, bang5, bang6, bang7, bang8, bang9, bang10 } from './../../static/outImg'

// 新歌列表
const songList = [
    {_id: 'songs_CC156F3A7186FB12768B2C1B48FDAA74', singer: '庄心妍', title: '屋檐下的浪漫'},
    {_id: 'songs_9AA99B44B77C50737A42E921EF51C937', singer: '童可可', title: '薛定谔的猫'},
    {_id: 'songs_9154AD94E915A6A6CDD6AF57EEFE06A6', singer: '阿杜', title: '一诺千年'},
    {_id: 'songs_53C3F2DBE2790BE8884E6D8F5553FE50', singer: '黄子韬', title: 'Promise'},
    {_id: 'songs_39224F3C618C955352142DB989737B9D', singer: '刘恺威、蒋欣', title: '明明爱【继承人插曲】'},
    {_id: 'songs_2B0BAE72AFC013419B2D21D86C0BA515', singer: '林忆莲', title: '我不能忘记你【记忆大师记忆主题曲】'},
    {_id: 'songs_A350CE1A5B0769D3E39C311C933F1234', singer: '高夫', title: '青春去哪了'},
    {_id: 'songs_5184FAAD32883D73533714BACAA98A1F', singer: '华晨宇', title: ' 寻【花儿与少年3·冒险季主题曲】'},
    {_id: 'songs_7A5B2CC635273C4B81167F19E8897773', singer: '鹏泊', title: '春来鸟'},
    {_id: 'songs_4BCA5B307683B83A6BC2F34A93E7DBC2', singer: '阿兰', title: '兰之乐光'},
    {_id: 'songs_76448B8D90609F4657782A2F4ACE3C1C', singer: '星月组合', title: '今夜的你又在和谁约会'}
]

// 排行榜
const bangList = [
    {url: bang1, title: '酷狗飙升榜', pathname: ''},
    {url: bang2, title: '酷狗TOP500', pathname: ''},
    {url: bang3, title: '网络红歌榜', pathname: ''},
    {url: bang4, title: 'DJ热歌榜', pathname: ''},
    {url: bang5, title: '华语新歌榜', pathname: ''},
    {url: bang6, title: '欧美新歌榜', pathname: ''},
    {url: bang7, title: '韩国新歌榜', pathname: ''},
    {url: bang8, title: '日本新歌榜', pathname: ''},
    {url: bang9, title: '粤语新歌榜', pathname: ''},
    {url: bang10, title: '原创音乐榜', pathname: ''}
]

// 歌手
const artList = {
    'listOne': [
        {pathname: '', title: '热门歌手'}
    ],
    'listTwo': [
        {pathname: '', title: '华语男歌手'},
        {pathname: '', title: '华语女歌手'},
        {pathname: '', title: '华语组合'},
    ],
    'listThree': [
        {pathname: '', title: '日韩男歌手'},
        {pathname: '', title: '日韩女歌手'},
        {pathname: '', title: '日韩组合'},
    ],
    'listFour': [
        {pathname: '', title: '欧美男歌手'},
        {pathname: '', title: '欧美女歌手'},
        {pathname: '', title: '欧美组合'}
    ]
}

export default {
    songList,
    bangList,
    artList
}