import { createRouter, createWebHistory } from "vue-router";
import InvitationView from "../../views/invitation.vue";
import HeroView from "../../views/hero.vue";

const routes = [
	{
		path: "",
		component: HeroView,
	},
	{
		path: "/open",
		component: InvitationView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
