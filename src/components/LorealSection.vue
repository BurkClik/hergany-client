<template>
  <section class="justify-items-end container mx-auto mb-20 items-center
  lg:grid
  lg:grid-cols-10">
      <div class=" mx-4 sm:ml-6 sm:mx-0 lg:col-span-3">
        <p class="hergany mb-4 text-5xl tracking-widest text-center lg:text-left">Hergany'yi</p>
        <p class="font-bold mb-4 xl:text-5xl text-center lg:text-left">Keşfedin</p>
        <p class="text-center mb-14 lg:text-left">
           L’Oréal’in misyonu tüm dünyadaki kadın ve erkeklere en kaliteli, etkili, güvenli ve en yenilikçi kozmetik ürünlerini sunmaktır. Bize ait son gelişmeler işte burada.
        </p>
      </div>
      <div class="flex justify-start ml-4 space-x-8 overflow-auto sm:justify-center sm:ml-0 lg:col-span-7">
        <LorealSectionCard />
        <LorealSectionCard />
        <LorealSectionCard />
      </div>
  </section>
</template>

<script>
import LorealSectionCard from '@/components/LorealSectionCard.vue';

export default {
  name: 'LorealSection',
  components: {
    LorealSectionCard,
  },
};
</script>

<style>
.hergany {
  font-family: 'Dorsa';
}
</style>
