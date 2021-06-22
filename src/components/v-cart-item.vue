<template>
  <div class="v-cart-item">
    <img
      class="cart__item-img"
      :src="require('../assets/img/' + cart_item_data.image)"
      alt="cart__item-img"
    />
    <p class="cart__item">{{ cart_item_data.name }}</p>
    <p class="cart__item">{{ cart_item_data.price }}</p>
    <p class="cart__item">{{ cart_item_data.category }}</p>
<div class="cart-item__quantity"></div>
<button class="cart__item-remove btn">Remove</button>
  </div>
</template>
<script>
export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
  .v-cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
  }

  .cart__item {
    padding-right: 20px;
  }

  .cart__item-img {
    width: 170px;
  }

  .cart__item-remove {
    background: #dc1010;
    width: 100px;
    color:#fff;
    font-weight: 500;
  }
</style>