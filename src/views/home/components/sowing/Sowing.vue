<template>
  <swiper id="swiper" :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(sowing,index) in sowing_list" :key="sowing.public_id">
      <img :src="sowing.icon_url" :alt="sowing.public_name" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
// import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import { swiper, swiperSlide } from "vue-awesome-swiper";
// import "swiper/swiper-bundle.css";

// import Swiper2, { Navigation, Pagination } from "swiper";
// Swiper2.use([Navigation, Pagination]);

export default {
  name: "Sowing",
  props: {
    sowing_list: Array,
  },
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        //分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        // 循环
        loop: true,
        // 切换时长
        autoplay: {
          delay: 1800,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 速度
        speed: 800,
        // 滑动后回调函数
        on: {
          slideChangeTransitionEnd() {
            // console.log(this.activeIndex);
          },
        },
      },
    };
  },
  computed: {
    swiper() {
      // return this.$refs.mySwiper.$swiper;
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(1, 1000, false);
  },
  components: {
    swiper,
    swiperSlide,
  },
  // directives: {
  //   swiper: directive,
  // },
};
</script>

<style scoped>
#swiper {
  width: 100%;
  height: 14rem;
  background-color: #8a7575;
}

#swiper img {
  width: 100%;
  height: 100%;
}

#swiper >>> .swiper-pagination-bullet-active{
  background-color: #75a342 ;
}

</style>