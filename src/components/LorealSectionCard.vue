<template>
  <div @mouseover="mouseover" @mouseleave="mouseleave">
      <a href="#">
        <div class="relative flex items-end justify-center rounded-3xl shadow-3xl overflow-hidden h-64 w-36
        md:h-80 md:w-44
        lg:h-352 lg:w-52
        xl:h-420 xl:w-60">
            <img class="h-full w-full object-center absolute transition-all duration-500 ease-in-out transform scale-125 sm:hover:scale-100" src="https://source.unsplash.com/random" alt="">
            <p class="absolute text-2xl mb-20 text-white text-center">Strateji ve İş Modeli</p>
        </div>
      </a>
  </div>
</template>

<script>
export default {
  name: 'LorealSectionCard',
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    mouseover() {
      this.hover = true;
    },
    mouseleave() {
      this.hover = false;
    },
  },
};
</script>

<style>
#demo {
    background-image: url(https://source.unsplash.com/random);
}
</style>
