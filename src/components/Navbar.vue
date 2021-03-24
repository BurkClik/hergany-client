<template>
  <header class="md:flex md:items-center md:justify-between md:px-24 md:py-3 lg:px-36">
    <div class="flex items-center md:justify-between justify-between px-6 py-3 md:p-0">
      <div class="md:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block text-gray-500
        hover:text-red-500 focus:text-secondary focus:outline-none">
          <svg class="h-7 w-7 sm:w-9 sm:h-9 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414
            1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1
            1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0
            6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
      <div>
        <router-link to="/" class="hergany text-secondary text-5xl tracking-widest sm:text-6xl">
          Hergany
        </router-link>
      </div>
      <div class="md:hidden"></div>
    </div>
    <div class="md:flex items-center">
      <nav :class="isOpen ? 'block' : 'hidden'" class="navlink px-2 pt-2 pb-4 md:flex md:p-0
      md:pr-24 md:space-x-7 text-center 2xl:space-x-20 2xl:pr-72">
        <router-link to="/products" class="mt-1 block px-2 py-1 text-xl rounded
        ">
          Ürünler
        </router-link>
        <router-link to="/certificates" class="mt-1 block px-2 py-1 text-xl rounded
        ">
          Sertifikalar
        </router-link>
        <router-link to="/faq" class="mt-1 block px-2 py-1 text-xl rounded
        ">
          S.S.S
        </router-link>
      </nav>
      <div :class="isOpen ? 'block' : 'hidden'" class="flex space-x-6 md:flex justify-center">
        <a href="#">
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" xml:space="preserve"><path d="M434.478 16H77.519C43.718 16 16 43.719 16 77.521v356.957C16 468.282 43.718 496 77.519 496h356.959C468.281 496 496 468.282 496 434.479V77.521C496 43.719 468.281 16 434.478 16zM327.203 230.875L324.906 256H277v160h-64V256h-32v-64h32v-29.038c0-26.212 12.524-67.166 67.461-67.166l49.539.225V151h-36.003c-5.848 0-13.997 2.812-13.997 15.284V192h50.743l-3.54 38.875z" fill-rule="evenodd" clip-rule="evenodd" fill="#1A1A1A" id="facebook__x2C__social__x2C__media_x2C__icon_x2C_"/><metadata><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:dc="http://purl.org/dc/elements/1.1/"><rdf:Description about="https://iconscout.com/legal#licenses" dc:title="facebook,social,media" dc:description="facebook,social,media" dc:publisher="Iconscout" dc:date="2018-06-25" dc:format="image/svg+xml" dc:language="en"><dc:creator><rdf:Bag><rdf:li>Ibrandify Icons</rdf:li></rdf:Bag></dc:creator></rdf:Description></rdf:RDF></metadata></svg>
        </a>
        <a href="#">
          <svg class="block h-6 w-6" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px"><path d="M 24 4.300781 C 23.101563 4.699219 22.199219 5 21.199219 5.101563 C 22.199219 4.5 23 3.5 23.398438 2.398438 C 22.398438 3 21.398438 3.398438 20.300781 3.601563 C 19.300781 2.601563 18 2 16.601563 2 C 13.898438 2 11.699219 4.199219 11.699219 6.898438 C 11.699219 7.300781 11.699219 7.699219 11.800781 8 C 7.699219 7.800781 4.101563 5.898438 1.699219 2.898438 C 1.199219 3.601563 1 4.5 1 5.398438 C 1 7.101563 1.898438 8.601563 3.199219 9.5 C 2.398438 9.398438 1.601563 9.199219 1 8.898438 C 1 8.898438 1 8.898438 1 9 C 1 11.398438 2.699219 13.398438 4.898438 13.800781 C 4.5 13.898438 4.101563 14 3.601563 14 C 3.300781 14 3 14 2.699219 13.898438 C 3.300781 15.898438 5.101563 17.300781 7.300781 17.300781 C 5.601563 18.601563 3.5 19.398438 1.199219 19.398438 C 0.800781 19.398438 0.398438 19.398438 0 19.300781 C 2.199219 20.699219 4.800781 21.5 7.5 21.5 C 16.601563 21.5 21.5 14 21.5 7.5 C 21.5 7.300781 21.5 7.101563 21.5 6.898438 C 22.5 6.199219 23.300781 5.300781 24 4.300781"/></svg>
        </a>
        <a href="#">
          <svg class="block h-6 w-6" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/></svg>
        </a>
      </div>
      <div :class="isOpen ? 'block' : 'hidden'" class="navlink flex justify-center pt-3">
        <a href="">
          info@hergany.com
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
.navlink a {
  font-family: 'Josefin';
}

.hergany {
  font-family: "Dorsa";
}

</style>
