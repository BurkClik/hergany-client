<template>
  <div>
    <div v-for="product in Product" v-bind:key="product.productID">
      <div v-if="product.productID % 2 == 1">
        <div class="pt-8 pb-8 px-6 sm:pt-14 sm:pb-24 sm:pr-12 sm:px-0 md:pr-16 lg:pr-20 xl:pr-48">
          <div class="grid grid-cols-4 w-full relative bg-demo rounded-3xl h-32
          sm:h-40 sm:bg-transparent
          md:h-52
          lg:h-60
          xl:h-72
          2xl:h-80">
            <div class="col-span-2 flex justify-end pr-3 sm:pr-10 sm:bg-demo md:pr-12 xl:pr-14 2xl:pr-16">
              <img class="h-40 w-32 shadow-md absolute -inset-y-4
              sm:h-56 sm:w-44 sm:-inset-y-8
              md:h-72 md:w-52 md:-inset-y-10
              lg:h-80 lg:w-60 lg:-inset-y-10
              xl:h-352 xl:w-64 xl:-inset-y-8
              2xl:h-96 2xl:w-72 2xl:-inset-y-8"
              :src="require(`@/assets/images/${product.image}`)" alt="">
            </div>
            <div class="col-span-2 ml-2 py-2 pr-5 h-32 flex flex-col justify-between
            sm:py-0 sm:h-40
            md:mx-4 md:h-52
            lg:h-60
            xl:h-72
            2xl:h-80">
              <div>
                <p class="josefin text-base line-clamp-1 sm:line-clamp-none sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">{{ product.productName }}</p>
                <p class="montserrat-medium opacity-30 text-3xs -mt-1 mb-2 sm:-mt-0 sm:mb-4 sm:text-xs md:mb-8 md:text-sm lg:text-lg">{{ product.category }}</p>
                <p class="roboto-light text-3xs opacity-70 line-clamp-3
                sm:text-sm
                lg:text-base lg:line-clamp-4
                xl:text-lg 2xl:text-xl">
                  {{ product.productDetail }}
                </p>
              </div>
              <div class="flex justify-between items-center">
                <p class="roboto-light text-2xs text-black sm:text-sm md:text-lg lg:text-xl 2xl:text-2xl">
                  {{ product.price }}
                </p>
                <div class="flex roboto sm:items-center sm:text-sm">
                  <p class="hidden text-secondary roboto-light sm:flex sm:mr-2 md:mr-3 lg:mr-5 lg:text-xl 2xl:text-2xl">Trendyol'dan</p>
                  <a href="#" target="_blank"
                    class="roboto flex items-center bg-fifth text-white text-center rounded-2xl h-4 w-16
                    sm:w-20 sm:h-6
                    md:w-28 md:h-7
                    lg:w-36 lg:h-8
                    2xl:w-44 2xl:h-9">
                    <div class="roboto m-auto text-3xs sm:text-xs md:text-base lg:text-lg 2xl:text-xl">SATIN AL</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="product.productID % 2 == 0">
        <div class="pt-8 pb-8 px-6
        sm:pt-14 sm:pb-24 sm:pl-12 sm:px-0
        md:pl-16
        lg:pl-20
        xl:pl-48">
          <div class="grid grid-cols-4 bg-demo h-32 rounded-3xl w-full relative
          sm:bg-transparent sm:h-40
          md:h-52
          lg:h-60
          xl:h-72
          2xl:h-80">
            <div class="col-span-2 py-2 pl-5 ml-2 h-32 flex flex-col justify-between
            sm:py-0 sm:h-40
            md:mx-4 md:h-52
            lg:h-60
            xl:h-72
            2xl:h-80">
              <div>
                <p class="josefin text-base line-clamp-1 sm:line-clamp-none sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">{{ product.productName }}</p>
                <p class="montserrat-medium opacity-30 text-3xs -mt-1 mb-2 sm:-mt-0 sm:mb-4 sm:text-xs md:mb-8 md:text-sm lg:text-lg">{{ product.category }}</p>
                <p class="roboto-light text-3xs opacity-70 line-clamp-3
                sm:text-sm
                lg:text-base lg:line-clamp-4
                xl:text-lg 2xl:text-xl">
                  {{ product.productDetail }}
                </p>
              </div>
              <div class="flex justify-between items-center">
                <p class="roboto-light text-2xs text-black sm:text-sm md:text-lg lg:text-xl 2xl:text-2xl">
                  {{ product.price }}
                </p>
                <div class="flex roboto sm:items-center sm:text-sm">
                  <p class="hidden text-secondary roboto-light sm:flex sm:mr-2 md:mr-3 lg:mr-5 lg:text-xl 2xl:text-2xl">Trendyol'dan</p>
                  <a href="#" target="_blank"
                    class="roboto flex items-center bg-fifth text-white text-center rounded-2xl h-4 w-16
                    sm:w-20 sm:h-6
                    md:w-28 md:h-7
                    lg:w-36 lg:h-8
                    2xl:w-44 2xl:h-9">
                    <div class="roboto m-auto text-3xs sm:text-xs md:text-base lg:text-lg 2xl:text-xl">SATIN AL</div>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-span-2 flex justify-start pl-3 sm:bg-demo sm:pl-10 md:pl-12 xl:pl-14 2xl:pl-16">
              <img class="h-40 w-32 shadow-md absolute -inset-y-4
              sm:h-56 sm:w-44 sm:-inset-y-8
              md:h-72 md:w-52 md:-inset-y-10
              lg:h-80 lg:w-60 lg:-inset-y-10
              xl:h-352 xl:w-64 xl:-inset-y-8
              2xl:h-96 2xl:w-72 2xl:-inset-y-8"
              :src="require(`@/assets/images/${product.image}`)" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '../data/productDetails';

export default {
  name: 'ProductCard',
  data() {
    return {
      Product,
    };
  },
};
</script>

<style>
.josefin {
  font-family: 'Josefin';
}

.montserrat-medium {
  font-family: 'Montserrat-Medium';
}

.roboto-light {
  font-family: 'Roboto-Light';
}

.roboto {
  font-family: 'Roboto';
}

</style>
