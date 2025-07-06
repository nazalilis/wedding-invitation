import { createApp } from "vue";
import "../css/style.css";
import App from "../../view/App.vue";
import mycf from "../../core/config.js";
import idLang from "../lang/id.json";
import enLang from "../lang/en.json";

createApp(App).mount("#app");

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
