import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExist = false;
        state.cart.map((item) =>{
          if(item.article === product.article){
            isProductExist = true;
            item.quantity++;
          }
        })
        if (!isProductExist) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }

    },
    REMOVE_CART_ITEM: (state, index) => {
      state.cart.splice(index, 1)
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios.get('http://localhost:3000/products')
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
          return products
        })
        .catch((err) => {
          console.log('error', err)
          return err
        })
    },
    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product);
    },
    REMOVE_FROM_CART({ commit }, index) {
      commit('REMOVE_CART_ITEM', index)
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    }
  },
  modules: {
  }
})
