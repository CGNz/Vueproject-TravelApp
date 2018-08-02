<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
    
</template>

<script>
    export default{
        name: 'HomeSwiper',
        props: {
            list: Array
        },
        data () {
            return{
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true
                }
            }
        },
        computed: {
            showSwiper(){
                return this.list.length
            }
        }
    }
</script>

<style lang="stylus" scoped>
    //样式穿透 子组件出现的样式全部变更 不再受“scoped”限制
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff
    .wrapper
        overflow : hidden
        width: 100%
        height: 0
        padding-bottom: 30%
        .swiper-img
            width: 100%
</style>