<template>
  <div>
    <div v-for="value in object" class="value pt-4" v-bind:key="value.productID">
      <div v-if="value.productID % 2 == 1">
        <div class="flex bg-demo xl:px-64">
          <div class="flex-1 py-6">
            <img :src="require(`@/assets/images/${value.image}`)" alt=""
            class="shadow-xl xl:w-80">
          </div>
          <div class="flex-1 px-4 py-6 space-y-12 xl:space-y-52">
            <div class="space-y-3 xl:space-y-10">
              <p class="josefin text-xl xl:text-4xl">{{ value.productName }}</p>
              <p class="roboto-light text-xs xl:text-2xl">{{ value.productDetail }}</p>
            </div>
            <div class="flex justify-between items-center font-light">
              <p class="roboto-bold xl:text-2xl">{{ value.price }}</p>
              <div class="space-x-8">
                <span class="text-secondary xl:text-2xl">Trendyol'dan</span>
                <button class="roboto bg-fifth text-white px-4 py-1 rounded-2xl text-sm xl:px-10 xl:py-1 xl:text-2xl">
                SATIN AL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="value.productID % 2 == 0">
        <div class="flex xl:px-64">
          <div class="flex-1 px-4 py-6 space-y-12 xl:space-y-52">
            <div class="space-y-3 xl:space-y-10">
              <p class="josefin text-xl xl:text-4xl">{{ value.productName }}</p>
              <p class="roboto-light text-xs xl:text-2xl">{{ value.productDetail }}</p>
            </div>
            <div class="flex justify-between items-center">
              <p class="roboto-bold xl:text-2xl">{{ value.price }}</p>
              <div class="space-x-8">
                <span class=" text-secondary xl:text-2xl">Trendyol'dan</span>
                <button class="roboto bg-fifth text-white px-4 py-1 rounded-2xl text-sm xl:px-10 xl:py-1 xl:text-2xl">
                  SATIN AL
                </button>
              </div>
            </div>
          </div>
          <div class="flex-1 py-6">
            <img :src="require(`@/assets/images/${value.image}`)" alt=""
            class="shadow-xl xl:w-80 ml-auto">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Data from '../data/productDetails';

export default {
  data() {
    return {
      object: Data,
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

</style>
