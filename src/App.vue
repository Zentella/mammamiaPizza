<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { mapActions } from "vuex";//3
export default { // ciclo de vida
  mounted() {
    this.get_Pizzas();// llamado de la action get_Pizzas
  },
  methods: {
    ...mapActions(["get_Pizzas"]),//4 usar action get_Pizzas
  },
  components: {
    Navbar,
  },
};
</script>

<style>
a,
a:hover {
  text-decoration: none;
  color: white;
}

ul {
  list-style: none;
}
</style>
