// import { createApp, h } from "vue";
// import Modal from "./Modal.vue"
// export const openModal = (options) => {
// 	const { title, content, ok, cancel } = options;
// 	const div = document.createElement("div");
// 	document.body.appendChild(div);
// 	const close = () => {
// 		app.unmount(div);
// 		div.remove();
// 	};
// 	const app = createApp({
// 		render() {
// 			return h(
// 				Modal,
// 				{
// 					visible: true,
// 					"onUpdate:visible": (newVisible) => {
// 						if (newVisible === false) {
// 							close();
// 						}
// 					},
// 					ok,
// 					cancel,
// 				},
// 				{
// 					title,
// 					content,
// 				}
// 			);
// 		},
// 	});
// 	app.mount(div);
// };