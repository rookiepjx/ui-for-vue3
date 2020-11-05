import { createWebHistory, createRouter } from "vue-router";

const history = createWebHistory();
const router = createRouter({
	history,
	routes: [
		{
			path: "/",
			component: () => import("../src/views/Home.vue"),
		},
		{
			path: "/doc",
			component: () => import("../src/views/Doc.vue"),
			redirect: "/doc/switch",
			children: [
				{
					path: "switch",
					component: () => import("../src/components/Switch/SwitchDemo.vue"),
				},
			],
		},
	],
});

export default router;
