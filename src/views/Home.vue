<template>
  <div class="home"><!---->
    <Header />
    <div class="container">
      <div class="row py-5 pizzas"><!--renderizando pizzas en vista ppal-->
        <div class="col-12 col-sm-3 mb-4 pizza" v-for="(pizza, i) in pizzas" :key="i"><!--recorrer todas las pizzas-->
          <Card :pizza="pizza" /><!--comp card, le pasamos como props la pizza correspondiente a la iteracion-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    Header,
    Card,
  },

  computed: {// valor reactivo a diferencia de actions q solo se ejecuta cuando se invoca
    ...mapState(["pizzas"]),
  },
};
</script>
