<template>
  <div class="card w-100"><!---->
    <img class="card-img-top" :src="pizza.img" /><!--foto pizza de forma dinamica-->
    <div class="card-body">
      <h4 class="card-title text-capitalize">{{ pizza.name }}</h4><!--nombre pizza de forma dinamica-->
      <hr />
      <p class="card-text ">
        <b>Ingredientes:</b>
      </p>
      <ul class="m-0">
        <li
          class="text-capitalize w-75"
          v-for="(ingrediente, i) in pizza.ingredients"
          :key="i"
        ><!--ingredientes pizza de forma dinamica recorridos con v-for -->
          &#127829; {{ ingrediente }}
        </li>
      </ul>
    </div>
    <hr />
    <div class="card-body"><!--precio pizza de forma dinamica-->
      <h2 class="text-center text-dark pb-3"><!--formato miles en pizza.price(como argumento de formatNumber) de forma dinamica-->
        $ {{ formatNumber(pizza.price) }}
      </h2>
      <div class="d-flex justify-content-around"><!-- :to url con todos los detalles, param de forma interpolada bactics`` pizza de forma dinamica-->
        <router-link :to="`/pizza/${pizza.id}`"
          ><button class="btn btn-info text-white">
            Ver Más &#128064;
          </button></router-link
        ><!--btn danger q será testeado con 2e2-->
        <button class="btn btn-danger" @click="addToCart(pizza.id)"><!--CA agregar al carrito, solo se necesita el id, será una action-->
          Añadir &#128722;
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import utils from "@/utils/functions";// donde está metodo de javaScript para miles y comas
const { formatNumber } = utils;// y estructura para usarlo e incluir en instancia(export)
import { mapActions } from "vuex";

export default {
  name: "Card",
  props: ["pizza"],// vamos a recibir un valor llamado pizza
  methods: {
    formatNumber,// incluido en instancia
    ...mapActions(["addToCart"]),//CA declarando action, agregar al carrito
  },
};
</script>
