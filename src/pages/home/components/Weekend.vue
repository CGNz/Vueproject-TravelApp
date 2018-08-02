<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">  
                <div class="item-img-wrapper">
                     <img class="item-img" :src="item.imgUrl" />
                </div>
               
                <div class="item-info">
                    <p class="item-title">
                       {{item.title}}
                    </p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    data () {
        return {
            recommendList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/eb/e4b181a6957c36.jpg_r_640x214_4abbdbc0.jpg',
                title: '深圳环球数码科技大厦' ,
                desc: '嘿嘿嘿好大好大'
            },{
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg',
                title: '深圳环球数码科技大厦' ,
                desc: '哈哈哈好漂亮'
            }]
        }
        
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .item
        margin-bottom .1rem
    .recommend-title
        margin-top .2rem
        line-height .8rem
        background: #eee
        text-indent .2rem
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 37%
        .item-img
            width 100%
    .item-info
        padding .1rem
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color: #ccc
            ellipsis()
</style>