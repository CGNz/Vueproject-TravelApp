<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">
                &#xe624;
            </span>
        </div>
        <div class="header-input">
            <span class="iconfont">
                &#xe632;
            </span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            <span class="iconfont">
                城市&#xe62d;
            </span>
        </div>
    </div>
    
</template>

<script>
    export default {
        name:'HomeHeader'
    }

</script>

// 1rem = html font-size =50px
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        display :flex
        height: .86rem
        line-height : 0.86rem
        background: $bgColor
        color: #fff
        .header-left
            text-align: center
            width: .64rem
            float: left 
            .back-icon
                text-align: center
                font-size: .4rem
        .header-input
            flex:1
            margin-top: .11rem
            height 0.64rem
            line-height : .6rem
            margin-left: .2rem
            padding-left: .2rem
            background:#fff
            color:#ccc
            border-radius : .1rem
        .header-right
            width: 1.35rem
            float: right 
            text-align :center
</style>