import { createApp } from "vue";
import "../css/font.css";
import "../css/style.css";
import App from "../../views/App.vue";
import mycf from "../../core/config.js";
import idLang from "../lang/id.json";
import enLang from "../lang/en.json";
import router from "./router.js";

createApp(App).use(router).mount("#app");

console.log(mycf.data.lang);

if (mycf.data.lang == "en") {
	document.title = enLang.pageTitle;
	document.documentElement.setAttribute("lang", "en");
} else if (mycf.data.lang == "id") {
	document.title = idLang.pageTitle;
	document.documentElement.setAttribute("lang", "id");
} else {
	document.title = idLang.pageTitle;
	document.documentElement.setAttribute("lang", "id");
}
