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
					component: () => import("../src/components/Switch.vue"),
				},
				{
					path: "a",
					component: () => import("../src/components/A.vue"),
				},
				{
					path: "b",
					component: () => import("../src/components/B.vue"),
				},
				{
					path: "c",
					component: () => import("../src/components/C.vue"),
				},
			],
		},
	],
});

export default router;
