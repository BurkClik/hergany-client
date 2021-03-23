<template>
  <div class="grid auto-rows-auto px-8 md:max-w-screen">
    <ProductDetailCard />
    <div class="text-fifth border-b-2 w-32 h-8">Diğer Ürünler</div>
    <div class="flex my-4">
        <OtherProductsCard />
        <OtherProductsCard />
    </div>
  </div>
</template>

<script>
import ProductDetailCard from '@/components/ProductDetailCard.vue';
import OtherProductsCard from '@/components/OtherProductsCard.vue';

export default {
  components: {
    ProductDetailCard,
    OtherProductsCard,
  },
};
</script>
