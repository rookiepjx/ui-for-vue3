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
			children: [
				{
					path: "",
					redirect: "/doc/switch",
				},
				{
					path: "switch",
					component: () => import("../src/components/Switch/SwitchDemo.vue"),
				},
				{
					path: "button",
					component: () => import("../src/components/Button/ButtonDemo.vue"),
				},
				{
					path: "tab",
					component: () => import("../src/components/Tab/TabDemo.vue"),
				},
				{
					path: "modal",
					component: () => import("../src/components/Modal/ModalDemo.vue"),
				},
			],
		},
	],
});

export default router;
