<template>
  <div class="pt-12 px-8">
    <div class="grid grid-cols-5 h-32 w-full bg-primary rounded-3xl px-4 bg-opacity-50 relative">
      <div class="col-span-2">
        <img class="h-44 w-24 shadow-md absolute -inset-y-6" src="../assets/images/ayi.jpg" alt="">
      </div>
      <div class="col-span-3">
        <p class="product-name text-base">Matematik Seti</p>
        <p class="product-detail">Lorem ipsum dolor sit amet, consencetur adipiscing elit.
          Pharetra ut
          integer vitae volutpat placerat venenatis. Faucibus venenatis, ac
          aliquet sapien senectus donec.
        </p>
        <div class="flex justify-between items-center">
          <p class="price text-fifth font-bold">
            144₺
          </p>
          <button class="buy bg-fifth text-white px-4 py-1 rounded-2xl">
            SATIN AL
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
};
</script>

<style>
.product-name {
    font-family: 'Josefin';
}

.product-detail {
    font-family: 'Roboto';
    font-size: 8px;
    font-weight: 200;
}

.price {
  font-family: 'Roboto';
  font-size: 10px;
}

.buy {
  font-family: 'Roboto';
  font-size: 10px;
}
</style>
