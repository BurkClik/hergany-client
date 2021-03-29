<template>
  <div class="grid lg:grid-cols-2 xl:grid-cols-3 container mx-auto">
    <div v-for="product in object" v-bind:key="product.productID">
      <OtherProductsCard
        v-bind:productName='`${product.productName}`'
        v-bind:image='`${product.image}`'
        v-bind:price='`${product.price}`'/>
    </div>
  </div>
</template>

<script>
import OtherProductsCard from '@/components/OtherProductsCard.vue';
import Data from '../data/productDetails';

export default {
  components: {
    OtherProductsCard,
  },
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
