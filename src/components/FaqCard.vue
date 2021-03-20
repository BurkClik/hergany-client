<template>
  <div class="px-10 pt-6">
    <div :class="isOpen ? 'open-faq' : 'close-faq'">
      <div class="flex justify-between items-center">
        <p>Lorem ipsum dolor?</p>
        <button @click="isOpen = !isOpen" class=" focus:outline-none">
          <img :class="isOpen ? 'transform rotate-180' : 'visible'"
          src="../assets/images/arrow.png" alt="">
        </button>
      </div>
      <div :class="isOpen ? 'visible' : 'hidden'">
        <p class="opacity-70 text-xs pt-4">Lorem ipsum dolar sit amet, consectetur adispiscing
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
</style>
