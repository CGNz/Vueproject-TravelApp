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
        <router-link to='/city'>
            <div class="header-right" >
                <span class="iconfont">
                    {{this.$store.state.city}}&#xe62d;
                </span>
            </div>
        </router-link>
    </div>
    
</template>

<script>
    export default {
        name:'HomeHeader',
        props:{
           // city: String 城市通过vuex的state设定
        }
    }

</script>

// 1rem = html font-size =50px
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        display :flex
        height: $headerHeight
        line-height : $headerHeight
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
            color #fff
</style>