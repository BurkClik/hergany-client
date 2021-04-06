<template>
  <div class="px-10 pt-6">
    <div :class="isOpen ? 'open-faq' : 'close-faq'">
      <div class="flex justify-between items-center">
        <p class="md:text-lg lg:text-xl">Lorem ipsum dolor?</p>
        <button @click="isOpen = !isOpen" class=" focus:outline-none">
          <img :class="isOpen ? 'transform rotate-180' : 'visible'"
          src="../assets/images/arrow.png" alt="">
        </button>
      </div>
      <div :class="isOpen ? 'visible' : 'hidden'">
        <p class="opacity-70 pt-4 text-sm xl:text-base">Lorem ipsum dolar sit amet, consectetur adispiscing
          elit ut aliquam, purus sit Lorem ipsum dolar sit amet, consectetur adispiscing
          elit ut aliquam, purus sit Lorem ipsum dolar sit amet, consectetur adispiscing
          elit ut aliquam, purus sit Lorem ipsum dolar sit amet, consectetur adispiscing
          elit ut aliquam, purus sit
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqCard',
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
p {
  font-family: 'Roboto';
}

/* width */
::-webkit-scrollbar {
  width: 16px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(211, 205, 205);
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #EDDCD2;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #DDBEA9;
}
</style>
