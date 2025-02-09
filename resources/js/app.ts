import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createApp, DefineComponent, h } from "vue";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";

import "flowbite";

const appName = import.meta.env.VITE_APP_NAME || "Porfolio";

/** Layouts */
import Layout from "@/Layouts/AppLayout.vue";

async function resolve(name: any) {
	const page = resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob<DefineComponent>("./Pages/**/*.vue"));
	await page.then((module) => {
		module.default.layout = module.default.layout || Layout;
	});
	return page;
}

createInertiaApp({
	title: (title) => `${title} - ${appName}`,
	resolve,
	setup({ el, App, props, plugin }) {
		createApp({ render: () => h(App, props) })
			.use(plugin)
			.use(ZiggyVue)
			.mount(el);
	},
	progress: {
		color: "#4B5563",
	},
});
