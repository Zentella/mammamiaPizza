import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"; // axios  tambien incluirlo como importacion aca arriba

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {// state = estado global
    pizzas: [],//atributo tipo array
    carrito: [],//CA incluir en el state el carrito
  },
  mutations: {
    GET_PIZZAS(state, pizzas) {//2 comunicacion con state y recibe 2º param paylod del commit
      state.pizzas = pizzas;//state.pizzas se le da valor de param pizza q recibe en la mutacion
    },
    ADD_TO_CART(state, pizza) {
      state.carrito.push(pizza);
    },
    UPDATE_CART(state, carrito) {
      state.carrito = carrito;
    },
  },
  actions: {
    async get_Pizzas({ commit }) {//1 obtener datos de pizzas
      const { data: pizzas } = await axios.get("/pizzas.json");//estructura, extraer data y dar nombre pizzas
      // axios incluido en el store tambien incluirlo en importacion arriba
      commit("GET_PIZZAS", pizzas);//pasar este array a mutacion get_Pizzas (payload)
      console.log('games.results ',pizzas.results)
    },


    addToCart({ commit, state, dispatch }, pizzaId) {//CA , destructurar para obtener el metodo commit para mutations, el state, y el metodo dispatch para actions
      const pizzaExist = state.carrito.find((p) => p.id == pizzaId);
      if (pizzaExist) {
        dispatch("plus", pizzaId);
      } else {
        const pizza = { id: pizzaId, cant: 1 };
        commit("ADD_TO_CART", pizza);
      }
      alert("Pizza añadida al carrito!");
    },

    plus({ state, commit }, id) {
      const carrito = state.carrito.map((p) =>
        p.id == id ? (p.cant++, p) : p//bo debe ser igual al q el us dio clic
      );
      commit("UPDATE_CART", carrito);//bo retornar carrito modificado, por medio de una mutacion, este nuevo carrito contiene la info de ese producto q fue incrementado con el boton q tiene signo +
    },

    minus({ state, commit }, id) {//bo
      const { cant } = state.carrito.find((p) => p.id == id);
      let carrito;
      if (cant == 1) {//bo  
        carrito = state.carrito.filter((p) => p.id !== id);
      } else {
        carrito = state.carrito.map((p) => (p.id == id ? (p.cant--, p) : p));
      }
      commit("UPDATE_CART", carrito);
    },

    /*//CA agregando productos al carrito
    addToCart({ commit}, pizzaId) { //id de la pizza q se pasa desde la card de esta pizza
      const pizza = { id: pizzaId, cant: 1};// var q incluye id y valor inicial 1
      commit("ADD_TO_CART", pizza);//ejecutamos con el commit una mutacion llamado ADD_TO_CART y le pasamos como payload esta pizza q se esta creando en la action
      alert("pizza añadida al carrito!")// notificar a l usuario
    },
    */
  },

  getters: {//creando getters
    pizzaById: (state) => (id) => {
      const pizza = state.pizzas.find((p) => p.id == id);//buscar pizza con mismo param(id)
      return pizza;//retornar la unica pizza q coincide
    },
    carrito: (state) => {
      const carrito = state.carrito.map((p) => {//CA recorriendo el carrito para tener los productos dentro
        const pizza = state.pizzas.find((pizza) => pizza.id == p.id);//encontrar obj q coincida
        return { ...pizza, cant: p.cant };// incluir cant
      });
      return carrito;// retorna nvo array q es una mezcla del array de pizza y el de carrito
    },

    total: (state) => {//CA 
      return state.carrito.reduce((a, b) => {
        const pizza = state.pizzas.find((p) => p.id == b.id);
        const totalByPizza = b.cant * pizza.price;
        return a + totalByPizza;
      }, 0);//CA valor inicial
    },
  },

  plugins: [createPersistedState()],
});
