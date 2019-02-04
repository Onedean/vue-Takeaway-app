<template>
  <section class="msite">
    <!--首页头部-->
    <headerTop :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-search"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </headerTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl + category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-option"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import ShopList from '../../components/ShopList/ShopList.vue'

  export default {
    name: "MSite",
    data(){
      return {
        baseImageUrl: 'https://fuss10.elemecdn.com'
      }
    },
    mounted(){
      this.$store.dispatch('getCategorys')
    },
    computed:{
      ...mapState(['address','categorys']),
      /*
      根据categorys一维数组生成一个8*n的二维数组
       */
      categorysArr(){
        const {categorys} = this
        const newArr = []
        let minArr = []
        categorys.forEach(c => {
          minArr.push(c)
          if(minArr.length === 8){
            newArr.push(minArr)
            minArr = []
          }
        })
        if(categorys.length % 8 !== 0){
          newArr.push(minArr)
        }
        return newArr
      }
    },
    watch:{
      categorys(newValue){  // 监视categorys数组中有数据了，但是这是在异步更新界面之前执行
        this.$nextTick(() => {  // 该方法：一旦完成界面更新，立即调用（将回调延迟到下次 DOM 更新循环之后执行，回调的this自动绑定到调用它的实例上）
          new Swiper('.swiper-container',{  // 我们需要界面更新后才创建Swiper界面轮播对象，所以不能挂载在mounted上
            loop: true, // 打开循环模式选项
            // 增加分页器选项
            pagination: {
              el: '.swiper-pagination',
            }
          })
        })
      }
    },
    components:{
      HeaderTop,
      ShopList
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
