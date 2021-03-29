<template>
  <div class="text-center py-6">
      <img class="h-96 m-auto shadow-md" :src="require(`@/assets/images/${image}`)" alt="">
      <p class="josefin w-60 text-3xl m-auto pt-2 truncate">{{ productName }}</p>
      <p class="roboto-bold w-52 text-xl m-auto pt-2">{{ price }}</p>
  </div>
</template>

<script>
export default {
  name: 'OtherProductsCard',
  props: ['productName', 'price', 'image'],
};
</script>

<style>
.josefin {
  font-family: 'Josefin';
}

.roboto-bold {
  font-family: 'Roboto-Bold';
}
</style>
