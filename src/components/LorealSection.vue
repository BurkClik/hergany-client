<template>
  <section class="justify-items-end md:mx-12 lg:mx-20 2xl:mx-40 mb-20 items-center
  md:flex">
      <div class="mx-4 sm:mx-0 md:mr-8 2xl:w-2/5 flex-initial">
        <p class="hergany mb-4 text-4xl tracking-widest text-center md:text-left">Hergany'yi</p>
        <p class="font-bold mb-4 text-4xl lg:text-5xl text-center md:text-left">Keşfedin</p>
        <p class="text-center mb-14 text-sm md:text-left">
           L’Oréal’in misyonu tüm dünyadaki kadın ve erkeklere en kaliteli, etkili, güvenli ve en yenilikçi kozmetik ürünlerini sunmaktır. Bize ait son gelişmeler işte burada.
        </p>
      </div>
      <div @mouseover="allHoverMouse" @mouseleave="allHoverMouseLeave" class="flex ml-4 overflow-auto md:overflow-visible xl:space-x-8 space-x-6 sm:justify-center sm:ml-0 flex-1">
        <div @mouseover="mouseover" @mouseleave="mouseleave">
          <a href="#">
            <div class="relative flex items-end justify-center rounded-3xl overflow-hidden h-64 w-36
            md:h-80 md:w-44
            lg:h-352 lg:w-52
            xl:h-420 xl:w-60">
              <img class="h-full w-full object-center absolute transition-all duration-500 ease-in-out transform scale-125 sm:hover:scale-100" src="https://source.unsplash.com/random" alt="">
              <p class="absolute text-2xl mb-20 text-white text-center">Strateji ve İş Modeli</p>
            </div>
          </a>
        </div>
        <div @mouseover="mouseover" @mouseleave="mouseleave">
          <a href="#">
            <div class="relative flex items-end justify-center rounded-3xl overflow-hidden h-64 w-36
            md:h-80 md:w-44
            lg:h-352 lg:w-52
            xl:h-420 xl:w-60">
              <img class="h-full w-full object-center absolute transition-all duration-500 ease-in-out transform scale-125 sm:hover:scale-100" src="https://source.unsplash.com/random" alt="">
              <p class="absolute text-2xl mb-20 text-white text-center">Strateji ve İş Modeli</p>
            </div>
          </a>
        </div>
        <div @mouseover="mouseover" @mouseleave="mouseleave" class="rounded-3xl">
          <a href="#">
            <div class="relative flex items-end justify-center rounded-3xl overflow-hidden h-64 w-36
            md:h-80 md:w-44
            lg:h-352 lg:w-52
            xl:h-420 xl:w-60">
              <img class="h-full w-full object-center absolute transition-all duration-500 ease-in-out transform scale-125 sm:hover:scale-100" src="https://source.unsplash.com/random" alt="">
              <p class="absolute text-2xl mb-20 text-white text-center">Strateji ve İş Modeli</p>
            </div>
          </a>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'LorealSection',
  data() {
    return {
      hover: false,
      allHover: false,
    };
  },
  methods: {
    mouseover() {
      this.hover = true;
    },
    mouseleave() {
      this.hover = false;
    },
    allHoverMouse() {
      this.allHover = true;
    },
    allHoverMouseLeave() {
      this.allHover = false;
    },
  },
};
</script>

<style>
.hergany {
  font-family: 'Dorsa';
}

#demo {
    background-image: url(https://source.unsplash.com/random);
}
</style>
