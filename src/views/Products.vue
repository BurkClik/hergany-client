<template>
  <div class="grid m-auto container sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
    <div v-for="product in Data" v-bind:key="product.productID">
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <div class="h-420 w-80 my-6 bg-demo rounded-3xl shadow-xl m-auto sm:mb-12 sm:mt-4 sm:h-80 sm:w-64">
          <div class="flex flex-col items-center justify-center m-auto h-420 sm:h-80">
            <img class="h-72 mb-4 shadow-xl sm:h-52 sm:mb-2" :src="require(`@/assets/images/${product.image}`)" alt="">
            <p class="josefin-semibold text-2xl w-64 line-clamp-1 text-center sm:text-base">{{ product.productName }}</p>
            <p class="josefin-semibold text-fifth text-xl sm:text-base">{{ product.price }}</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import Data from '../data/productDetails';

export default {
  components: {
    // OtherProductsCard,
  },
  data() {
    return {
      Data,
    };
  },
  methods: {
    beforeEnter(el) {
      gsap.set(el, {
        opacity: 0,
        translateX: '-200px',
      });
    },
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 2,
        onComplete: done,
      });
    },
  },
};
</script>

<style>
.josefin {
  font-family: 'Josefin';
}

.roboto-light {
  font-family: 'Roboto-Light';
}

.roboto-bold {
  font-family: 'Roboto-Bold';
}

.roboto {
  font-family: 'Roboto';
}

.josefin-semibold {
  font-family: 'Josefin-SemiBold';
}

</style>
