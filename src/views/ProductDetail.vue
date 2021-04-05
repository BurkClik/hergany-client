<template>
  <div>
    <ProductDetailCard />
    <div class="josefin-semibold text-fifth underline ml-11 sm:ml-20 md:ml-36 lg:ml-48 xl:text-2xl xl:ml-48 2xl:ml-64">Diğer Ürünler</div>
    <div class="flex overflow-auto mx-11 sm:mx-20 md:mx-36 md:mb-8 lg:mx-48 lg:mb-12 xl:mx-48 xl:mb-16 2xl:mx-64">
      <div class="mr-6 sm:mr-4 md:mr-6 lg:mr-8 xl:mr-12" v-for="product in Products" v-bind:key="product">
        <div class="text-center py-3">
          <img class="w-28 h-40 shadow-md
          sm:w-24 sm:h-32
          md:w-32 md:h-40
          lg:w-36 lg:h-48
          xl:w-44 xl:h-60" :src="require(`@/assets/images/${product.image}`)" alt="">
          <p class="roboto-light pt-2 line-clamp-2 w-28
          sm:text-xs sm:w-24
          md:w-28
          lg:w-36 lg:text-sm
          xl:w-44 xl:text-base">{{ product.productName }}</p>
          <p class="roboto-bold pt-2 w-28
          sm:w-24 sm:text-xs
          md:w-28
          lg:w-36
          lg:text-sm
          xl:w-44">{{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDetailCard from '@/components/ProductDetailCard.vue';
import Products from '../data/productDetails';

export default {
  components: {
    ProductDetailCard,
  },
  data() {
    return {
      Products,
    };
  },
};
</script>

<style>
.josefin-semibold {
  font-family: 'Josefin-SemiBold';
}
</style>
