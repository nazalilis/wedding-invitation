<script setup>
	import mycf from "../core/config.js";
	import idLang from "../assets/lang/id.json";
	import enLang from "../assets/lang/en.json";
</script>

<template>
	<h2 class="text-2xl">{{ headHero }}</h2>
	<h1 class="my-5 text-8xl font-sacramento">{{ mycf.data.bridAndGroom.him.name }} & {{ mycf.data.bridAndGroom.her.name }}</h1>
	<p class="mb-5 text-xl">{{ bodyHero }}</p>
</template>

<script>
	let headHero;
	let bodyHero;

	if (mycf.data.lang == "en") {
		headHero = enLang.heroHeadTitttle;
		bodyHero = enLang.preHeroHeadDesc;
	} else if (mycf.data.lang == "id") {
		headHero = idLang.heroHeadTitttle;
		bodyHero = idLang.preHeroHeadDesc;
	} else {
		headHero = idLang.heroHeadTitttle;
		bodyHero = idLang.preHeroHeadDesc;
	}
</script>
