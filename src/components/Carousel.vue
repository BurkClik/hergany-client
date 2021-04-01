<template>
  <swiper class='swiper xl:h-512 h-64' :options='swiperOption'>
    <swiper-slide class="bg-center bg-cover bg-demo" v-for="data in carouselData" v-bind:key="data.title">
      <div class="grid grid-cols-5 h-full">
        <div class="col-span-3 m-auto">
          <p class="inter-medium leading-none px-4 xl:px-64 xl:text-5xl">{{ data.title }}</p>
          <p class="roboto-light px-4 pt-2 xl:pt-8 text-xs xl:px-64 xl:text-base">{{ data.content }}</p>
        </div>
        <div class="col-span-2 m-auto">
          <img class="xl:h-96" :src="require(`@/assets/images/${data.image}`)" alt="">
        </div>
      </div>
    </swiper-slide>
    <div class='swiper-pagination swiper-pagination-white' slot='pagination'></div>
  </swiper>
</template>

<script>
import 'swiper/swiper-bundle.css';
import Vue from 'vue';
import {
  Swiper as SwiperClass, Pagination, Mousewheel, Autoplay,
} from 'swiper/swiper.esm';
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';
import carouselData from '../data/carouselData';

SwiperClass.use([Pagination, Mousewheel, Autoplay]);
Vue.use(getAwesomeSwiper(SwiperClass));

const { Swiper, SwiperSlide, directive } = getAwesomeSwiper(SwiperClass);

export default {
  name: 'Carousel',
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      carouselData,
      swiperOption: {
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    };
  },
};
</script>

<style>
  .inter-medium {
    font-family: 'Inter-Medium';
  }

  .roboto-light {
    font-family: 'Roboto-Light';
  }

  .slide-2 {
    background-image: url('https://source.unsplash.com/1600x900/?city');
  }

  .slide-3 {
    background-image: url('https://source.unsplash.com/1600x900/?car');
  }

  .slide-4 {
    background-image: url('https://source.unsplash.com/random');
  }

  .slide-5 {
    background-image: url('https://source.unsplash.com/random');
  }
</style>
