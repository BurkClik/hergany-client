<template>
  <div class="faq md:flex lg:px-36 justify-center items-center">
    <div class="md:flex-initial lg:pb-52 lg:pt-52 xl:pb-52 xl:pl-20 xl:pt-52 2xl:pl-52 2xl:pt-48 2xl:pb-48">
      <img class="hidden lg:flex lg:h-72 lg:w-60 2xl:h-80 2xl:w-72" src="../assets/images/faq_image.png" alt="">
    </div>
    <div class="md:flex-1 md:pb-60 lg:pb-0 lg:pl-28 xl:pl-32 2xl:pl-64">
      <FaqCard />
      <FaqCard />
      <FaqCard />
      <FaqCard />
      <FaqCard />
    </div>
  </div>
</template>

<script>
import FaqCard from '@/components/FaqCard.vue';

export default {
  components: {
    FaqCard,
  },
};
</script>
