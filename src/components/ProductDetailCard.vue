<template>
  <div class="pt-4 px-8 max-w-screen text-center">
    <div class="grid auto-rows-auto m-auto md:grid-cols-2 h-48 md:h-96 w-full bg-primary rounded-3xl bg-opacity-50 items-center">
      <div class="md:grid md:justify-items-end pt-2 m-auto">
        <img class="h-44 w-24 md:w-80 md:h-80 shadow-md md:place-self-end" src="../assets/images/ayi.jpg" alt="">
      </div>
      <div>
        <p class="product-name text-2xl font-bold md:text-4xl pt-8">Matematik Seti</p>
        <p class="text-fifth font-bold md:text-lg">
            144₺
        </p>
        <p class="text-sm md:text-base py-4 md:mx-20">Lorem ipsum dolor sit amet, consencetur adipiscing elit.
          Pharetra ut
          integer vitae volutpat placerat venenatis. Faucibus venenatis, ac
          aliquet sapien senectus donec.
        </p>
        <div class="py-1">
            <button class="text-secondary px-4 rounded-2xl md:text-lg focus:outline-none">
            Trendyol'dan
          </button>
          <button class="buy w-24 bg-fifth text-white px-4 rounded-2xl md:text-lg md:py-0 focus:outline-none">
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
