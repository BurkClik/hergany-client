<template>
  <div class="home">
    <Carousel />
    <LorealSection />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import LorealSection from '@/components/LorealSection.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
    LorealSection,
  },
};
</script>
