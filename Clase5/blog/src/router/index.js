import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// const routes = [
// 	{
// 		path: "/",
// 		name: "Home",
// 		component: Home, (Carga sincronica)
// 	},
// 	{
// 		path: "/about",
// 		name: "About",
// 		// route level code-splitting
// 		// this generates a separate chunk (about.[hash].js) for this route
// 		// which is lazy-loaded when the route is visited.
// 		component: () =>
// 			import(/* webpackChunkName: "about" */ "../views/About.vue"), (Carga asincrónica)
// 	},
// ];

const routes = [
  {
    path: "/",
    name: "Maestro",
    component: () =>
      import(/* webpackChunkName: "master" */ "../views/Maestro.vue"),
  },
  {
    path: "/detalle",
    name: "Detalle",
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/Detalle.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
