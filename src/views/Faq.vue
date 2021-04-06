<template>
  <div class="faq md:grid md:grid-cols-5 md:px-24 lg:px-36 xl:px-48 2xl:px-60">
    <div class="md:col-span-2 md:m-auto">
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <img class="hidden md:flex
        md:h-56 md:w-48
        lg:h-64 lg:w-56
        xl:h-72 xl:w-64
        2xl:h-80 2xl:w-72" src="../assets/images/faq_image.png" alt="">
      </transition>
    </div>
    <div class="md:col-span-3 md:overflow-auto md:mb-10
    xl: h-512
    2xl:h-512">
      <FaqCard />
      <FaqCard />
      <FaqCard />
      <FaqCard />
      <FaqCard />
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import FaqCard from '@/components/FaqCard.vue';

export default {
  components: {
    FaqCard,
  },
  methods: {
    beforeEnter(el) {
      gsap.set(el, {
        opacity: 1,
        translateY: '-200px',
      });
    },
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 3,
        ease: 'elastic',
        onComplete: done,
      });
    },
  },
};
</script>
