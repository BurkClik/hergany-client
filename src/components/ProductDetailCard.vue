<template>
  <div class="mt-4 mb-9 sm:mb-12 md:mt-8 md:mb-20 lg:mb-28 xl:mb-36 xl:mt-14">
    <div class="grid w-full px-11
    sm:px-20 sm:grid-cols-5
    md:px-36
    lg:px-48 lg:h-96
    xl:px-48
    2xl:px-64 2xl:grid-cols-7">
      <div class="flex justify-center mb-7 sm:mb-0 sm:justify-start sm:grid sm:col-span-2 2xl:col-span-2">
        <img class="h-64 w-48 shadow-md
        md:w-60 md:h-80
        lg:w-72 lg:h-96
        xl:w-80 xl:h-420" :src="require(`@/assets/images/${Product[0].image}`)">
      </div>
      <div class="flex flex-col justify-between
      sm:col-span-3 sm:ml-5
      md:h-80
      lg:h-96
      xl:h-420
      2xl:col-span-5">
        <div class="flex flex-col">
          <div class="sm:justify-start">
            <p class="josefin-regular text-28 text-center sm:text-left md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">{{ Product[0].productName }}</p>
            <p class="josefin-regular text-2xl mb-7 text-fifth text-center
            sm:mb-4 sm:text-left
            md:mb-7 md:text-base
            lg:mb-10 lg:text-lg
            xl:mb-14 xl:text-2xl">
              {{ Product[0].price }}
            </p>
            <p class="roboto-light mb-9 text-sm opacity-70 line-clamp-4 sm:line-clamp-none
            sm:overflow-auto sm:h-24 sm:mb-0
            md:h-32
            lg:h-40 lg:text-base
            xl:h-40 xl:text-lg">
              {{ Product[0].productDetail }}
            </p>
          </div>
        </div>
        <div class="flex items-center justify-evenly sm:justify-end">
          <p class="roboto text-secondary sm:mr-2 text-xl sm:text-base md:text-lg lg:mr-4 xl:text-xl xl:mr-5">Trendyol'dan</p>
          <a href="#" target="_blank"
          class="roboto flex focus:outline-none items-center w-32 h-9 bg-fifth text-white rounded-3xl
          sm:w-32 sm:h-8
          md:py-0 md:w-40
          lg:w-48 lg:text-lg
          xl:text-xl xl:w-52 xl:h-11">
            <div class="m-auto">
              SATIN AL
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '../data/productDetails';

export default {
  name: 'ProductDetailCard',
  data() {
    return {
      Product,
    };
  },
};
</script>

<style>
.josefin-regular {
  font-family: 'Josefin-Regular';
}

.josefin {
  font-family: 'Josefin';
}
</style>
