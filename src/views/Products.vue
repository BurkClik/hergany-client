<template>
  <div class="grid m-auto container sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
    <div v-for="product in Data" v-bind:key="product.productID">
      <div class="h-420 w-80 my-6 bg-demo rounded-3xl shadow-xl m-auto sm:mb-12 sm:mt-4 sm:h-80 sm:w-64">
        <div class="flex flex-col items-center justify-center m-auto h-420 sm:h-80">
          <img class="h-72 mb-4 shadow-xl sm:h-52 sm:mb-2" :src="require(`@/assets/images/${product.image}`)" alt="">
          <p class="josefin-semibold text-2xl w-64 line-clamp-1 text-center sm:text-base">{{ product.productName }}</p>
          <p class="josefin-semibold text-fifth text-xl sm:text-base">{{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import OtherProductsCard from '@/components/OtherProductsCard.vue';
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
