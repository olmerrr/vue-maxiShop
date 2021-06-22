<template>
    <div class="v-catalog-item">
    <img 
      alt="product__img"
      class="product__img"
      :src="require('../assets/img/' + product_data.image)" 
    />
    <ul>
      <li class="product__name">{{product_data.name}}</li>
      <li class="product__price">{{formatPrice(product_data.price)}} $</li>
      <li class="product__available">{{product_data.available}}</li>
    </ul>
    <button 
      class="product__btn btn"
      @click="addToCart"
      >Add to</button>
    </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data)
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(1).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  }
}
</script>

<style lang="scss">
  .v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px #e0e0e0;
    padding: 20px 15px;
    text-align: center;
  }
  .product__img {
    margin-bottom: 16px;
    max-width: 100px;
  }
  .product__name {
    margin-bottom: 16px;
  }
  .product__price {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  .product__available {
    margin-bottom: 20px;
  }
  .product__btn {   
    font-weight: 700;
  }
  .product__btn:hover {
    color:#fff;
    transition: all 0.8s;
  }
</style>