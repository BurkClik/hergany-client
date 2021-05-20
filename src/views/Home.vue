<template>
  <div class="home">
    <Carousel />
    <LorealSection />
    <ProductCard />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import LorealSection from '@/components/LorealSection.vue';
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
    LorealSection,
    ProductCard,
  },
};
</script>
