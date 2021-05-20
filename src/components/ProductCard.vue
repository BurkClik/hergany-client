<template>
  <div>
    <div v-for="product in Product" v-bind:key="product.productID">
      <div v-if="product.productID % 2 == 1">
        <div :id="index" class="py-8 px-6 sm:px-0 sm:mx-12 md:mx-16 lg:mx-20 xl:mx-24 2xl:mx-40">
        <div
          class="flex flex-col sm:grid sm:grid-cols-4 w-full sm:h-64 md:h-80 lg:h-96 xl:h-420"
        >
          <div class="sm:col-span-2">
              <img
                class="w-full h-64 shadow-md sm:h-64 md:h-80 lg:h-96 xl:h-420 2xl:h-512 rounded-sm object-cover"
                :src="require(`@/assets/images/${product.image}`)"
              />
          </div>
          <div
            class="sm:col-span-2 flex-1 sm:py-0 sm:h-40 md:h-52 lg:h-60 xl:h-72 2xl:h-80 sm:ml-12"
          >
            <div>
              <p
                class="josefin cursor-default line-clamp-2 leading-none my-4 text-3xl text-center sm:line-clamp-none sm:text-left sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl"
              >
                {{ product.productName }}
              </p>
              <p
                class="roboto-light cursor-default text-base opacity-70 line-clamp-6 lg:line-clamp-10 xl:text-lg 2xl:text-xl"
              >
                {{ product.productDetail }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div v-else-if="product.productID % 2 == 0">
        <div class="py-8 lg:py-16 xl:py-24 2xl:py-36 px-6 sm:px-0 sm:mx-12 md:mx-16 lg:mx-20 xl:mx-24 2xl:mx-40">
        <div
          class="flex flex-col sm:grid sm:grid-cols-4 w-full sm:h-64 md:h-80 lg:h-96 xl:h-420"
        >
          <div
            class="order-last sm:order-first sm:col-span-2 sm:py-0 sm:h-40 md:h-52 lg:h-60 xl:h-72 2xl:h-80 sm:mr-12"
          >
            <div>
              <p
                class="josefin cursor-defaultline-clamp-2 leading-none my-4 text-3xl text-center sm:text-left sm:line-clamp-none sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl"
              >
                {{ product.productName }}
              </p>
              <p
                class="roboto-light cursor-default text-base opacity-70 line-clamp-6 sm:text-sm lg:text-base lg:line-clamp-10 xl:text-lg 2xl:text-xl"
              >
                {{ product.productDetail }}
              </p>
            </div>
          </div>
          <div class="order-first sm:order-last sm:col-span-2">
              <img
                class="w-full h-64 shadow-md sm:h-64 md:h-80 lg:h-96 xl:h-420 2xl:h-512 rounded-sm object-cover"
                :src="require(`@/assets/images/${product.image}`)"
              />
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
