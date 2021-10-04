<template>
  <div class="carrito p-5"><!---->
    <div class="detalles bg-light w-75 m-auto p-5">
      <h5>Detalles del pedido:</h5>
      <div class="p-3 list">
        <div v-for="(pizza, i) in carrito" :key="i"><!--CA recorrer carrito-->
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <img :src="pizza.img" width="50" /><!--CA v:bind img-->
              <h6 class="mb-0 text-capitalize p-2">{{ pizza.name }}</h6><!--CA pizza guardada en carrito, capitalize para 1ª mayuscula, pero contenido real es minuscula tal cual en json-->
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <h6 class="mb-0 p-2 text-success"><!--CA metodo de calculo-->
                ${{ totalByPizza(pizza.cant, pizza.price) }}
              </h6>
              <button class="btn btn-danger" @click="minus(pizza.id)">-</button><!--bo evento clic incluir la action en methods-->
              <b class="mx-2">{{ pizza.cant }}</b><!--bo mostrar cant de forma dinamica actualizada-->
              <button class="btn btn-primary" @click="plus(pizza.id)">+</button><!--bo evento clic incluir la action en methods-->
            </div>
          </div>
          <hr class="mt-2" />
        </div>

        <h2>Total: ${{ formatNumber(total) }}</h2><!--CA total, pero declararlo como metodo en la instancia-->
        <button class="btn btn-success">Ir a Pagar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import utils from "@/utils/functions";
const { formatNumber } = utils;

export default {
  name: "Carrito",
  computed: {
    ...mapGetters(["carrito", "total"]),//CA property, necesitamos consumir "carrito"
  },
  methods: {
    ...mapActions(["plus", "minus"]),//bo incluyendo la action evento clic en ambos methods, plus y minus
    totalByPizza(cant, price) {
      return formatNumber(cant * price);//CA metodo format y total precio
    },
    formatNumber,//CA declarando metodo format dentro de la instancia, como metodo propio
  },
};
</script>

<style scoped>
.list {
  background: white;
}
</style>
