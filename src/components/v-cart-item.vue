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
    <div class="cart-item__quantity">
      QTY: {{ this.cart_item_data.quantity }}
    </div>
    <button class="cart__item-remove btn" @click="removeFromCart">
      Remove
    </button>
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
  methods: {
    removeFromCart() {
      this.$emit('removeFromCart')
    },
  },
  mounted() {
    this.$set(this.cart_item_data, "quantity", 1);
  },
};
</script>
<style scoped>
.v-cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  box-shadow: 0 0 8px #e0e0e0;
  padding: 20px 15px;
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
  color: #fff;
  font-weight: 500;
}
</style>