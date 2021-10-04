import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/pizza/:id",
    name: "Detalle",
    props: true,
    component: () =>
      import(/* webpackChunkName: "Detalle" */ "../views/Detalle.vue"),//en forma de lazy loading
  },

  {
    path: "/carrito",
    name: "Carrito",
    props: true,// va a recibir props desde vue router
    component: () =>
      import(/* webpackChunkName: "Carrito" */ "../views/Carrito.vue"),//en forma de lazy loading
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
