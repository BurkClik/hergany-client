<template>
  <div>
    <div v-for="value in object" class="value" v-bind:key="value.productID">
      <div v-if="value.productID % 2 == 1">
        <div class="grid grid-cols-5 bg-seventh">
          <div class="col-span-2 pl-4 py-4">
            <img :src="require(`@/assets/images/${value.image}`)" alt=""
            class="shadow-xl">
          </div>
          <div class="col-span-3 px-4 py-4">
            <p>{{ value.productName }}</p>
            <p>{{ value.productDetail }}</p>
            <div class="flex justify-between items-center">
              <p>{{ value.price }}</p>
              <button class="bg-fifth text-white">SATIN AL</button>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="value.productID % 2 == 0">
        <div class="grid grid-cols-5">
          <div class="col-span-3 px-4 py-4">
            <p>{{ value.productName }}</p>
            <p>{{ value.productDetail }}</p>
            <div class="flex justify-between items-center">
              <p>{{ value.price }}</p>
              <button class="bg-fifth text-white">SATIN AL</button>
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

</style>
