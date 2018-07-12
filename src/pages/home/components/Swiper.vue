<template>
    <div class="wrapper">
        <swiper :options="swiperOption" >
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgurl">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
    
</template>

<script>
    export default{
        name: 'HomeSwiper',
        data () {
            return{
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true
                },
                swiperList: [{
                    id: '0001',
                    imgurl: 'http://img1.qunarzz.com/piao/fusion/1806/3c/c72a1ccd4d7b2202.jpg_750x200_b88bbab4.jpg'
                },{
                    id: '0002',
                    imgurl: 'http://img1.qunarzz.com/piao/fusion/1807/ec/278a34afb59a0d02.jpg_750x200_3292a705.jpg'
                },{
                    id: '0003',
                    imgurl: 'http://img1.qunarzz.com/piao/fusion/1806/8f/d09fa241a01ac02.jpg_750x200_e0c86013.jpg'
                }]
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
        padding-bottom: 32%
        .swiper-img
            width: 100%
</style>