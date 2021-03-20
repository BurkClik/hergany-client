<template>
  <div class="home">
    <Carousel />
    <ProductCard />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
    ProductCard,
  },
};
</script>
