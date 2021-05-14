<template>
  <header class="sm:flex sm:items-center sm:justify-between sm:px-10 md:px-16 sm:py-5 lg:px-28 xl:px-36">
    <div class="flex items-center sm:justify-between justify-between px-6 py-3 sm:p-0">
      <div class="sm:hidden">
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
        <router-link to="/" class="hergany text-secondary text-5xl tracking-widest sm:text-5xl">
          Hergany
        </router-link>
      </div>
      <div class="sm:hidden"></div>
    </div>
    <div class="sm:flex items-center">
      <nav :class="isOpen ? 'block' : 'hidden'" class="navlink px-2 pt-2 pb-4 sm:flex sm:p-0
      md:pr-20 md:space-x-5 text-center 2xl:space-x-20 2xl:pr-72">
        <router-link to="/products" class="mt-1 block px-2 py-1 text-xl transition duration-300 ease-in transform hover:text-third hover:scale-110
        ">
          Ürünler
        </router-link>
        <router-link to="/certificates" class="mt-1 block px-2 py-1 text-xl transition duration-300 ease-in transform hover:text-third hover:scale-110
        ">
          Sertifikalar
        </router-link>
        <router-link to="/faq" class="mt-1 block px-2 py-1 text-xl transition duration-300 ease-in transform hover:text-third hover:scale-110
        ">
          S.S.S
        </router-link>
      </nav>
      <div :class="isOpen ? 'block' : 'hidden'" class="flex space-x-4 sm:ml-2 md:ml-0 md:space-x-6 sm:flex justify-center">
        <a href="#">
          <svg class="block h-6 w-6 transition duration-500 ease-in-out fill-current text-black hover:text-third transform hover:-translate-y-1 hover:scale-110" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 12 24 L 12 14 L 9 14 L 9 11 L 12 11 L 12 8 C 12 5.5 13 4 16 4 L 19 4 L 19 7 L 17.699219 7 C 16.800781 7 16 7.800781 16 8.699219 L 16 11 L 20 11 L 19.5 14 L 16 14 L 16 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z"/></svg>
        </a>
        <a href="#">
          <svg class="block h-6 w-6 transition duration-500 ease-in-out fill-current text-black hover:text-third transform hover:-translate-y-1 hover:scale-110" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px"><path d="M 24 4.300781 C 23.101563 4.699219 22.199219 5 21.199219 5.101563 C 22.199219 4.5 23 3.5 23.398438 2.398438 C 22.398438 3 21.398438 3.398438 20.300781 3.601563 C 19.300781 2.601563 18 2 16.601563 2 C 13.898438 2 11.699219 4.199219 11.699219 6.898438 C 11.699219 7.300781 11.699219 7.699219 11.800781 8 C 7.699219 7.800781 4.101563 5.898438 1.699219 2.898438 C 1.199219 3.601563 1 4.5 1 5.398438 C 1 7.101563 1.898438 8.601563 3.199219 9.5 C 2.398438 9.398438 1.601563 9.199219 1 8.898438 C 1 8.898438 1 8.898438 1 9 C 1 11.398438 2.699219 13.398438 4.898438 13.800781 C 4.5 13.898438 4.101563 14 3.601563 14 C 3.300781 14 3 14 2.699219 13.898438 C 3.300781 15.898438 5.101563 17.300781 7.300781 17.300781 C 5.601563 18.601563 3.5 19.398438 1.199219 19.398438 C 0.800781 19.398438 0.398438 19.398438 0 19.300781 C 2.199219 20.699219 4.800781 21.5 7.5 21.5 C 16.601563 21.5 21.5 14 21.5 7.5 C 21.5 7.300781 21.5 7.101563 21.5 6.898438 C 22.5 6.199219 23.300781 5.300781 24 4.300781"/></svg>
        </a>
        <a href="#">
          <svg class="block h-6 w-6 transition duration-500 ease-in-out fill-current text-black hover:text-third transform hover:-translate-y-1 hover:scale-110" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/></svg>
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
