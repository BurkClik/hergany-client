<template>
  <div>
    <div v-for="value in object" class="value" v-bind:key="value.productID">
      <div v-if="value.productID % 2 == 1">
        <div class="grid grid-cols-5 bg-seventh">
          <div class="col-span-2 pl-4 py-4">
            <img :src="require(`@/assets/images/${value.image}`)" alt=""
            class="shadow-xl">
          </div>
          <div class="col-span-3 px-4 py-4 space-y-12">
            <div class="space-y-3">
              <p class="josefin text-xl">{{ value.productName }}</p>
              <p class="roboto-light text-xs">{{ value.productDetail }}</p>
            </div>
            <div class="flex justify-between items-center font-light">
              <p class="roboto-bold text-fifth">{{ value.price }}</p>
              <button class="roboto bg-fifth text-white px-4 py-1 rounded-2xl text-sm">SATIN AL</button>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="value.productID % 2 == 0">
        <div class="grid grid-cols-5">
          <div class="col-span-3 px-4 py-4 space-y-12">
            <div class="space-y-3">
              <p class="josefin text-xl font-light">{{ value.productName }}</p>
              <p class="roboto-light text-xs">{{ value.productDetail }}</p>
            </div>
            <div class="flex justify-between items-center">
              <p class="roboto-bold text-fifth">{{ value.price }}</p>
              <button class="roboto bg-fifth text-white px-4 py-1 rounded-2xl text-sm">SATIN AL</button>
            </div>
          </div>
          <div class="col-span-2 pr-4 py-4">
            <img :src="require(`@/assets/images/${value.image}`)" alt="">
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
