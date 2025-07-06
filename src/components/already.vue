<script setup>
	import mycf from "../core/config.js";
	import idLang from "../assets/lang/id.json";
	import enLang from "../assets/lang/en.json";
</script>

<template>
	<h2 id="headHero" class="text-2xl">{{ headHero }}</h2>
	<p id="bodyHero-1" class="mt-5 text-xl">{{ bodyHero[0] }}</p>
	<h1 class="my-5 text-8xl font-sacramento">{{ mycf.data.bridAndGroom.him.name }} & {{ mycf.data.bridAndGroom.her.name }}{{ mycf.data.lang == "en" ? "'s" : "" }}</h1>
	<p class="mb-5 text-xl">{{ bodyHero[1] }}</p>
</template>

<script>
	let headHero;
	let bodyHero = [];

	if (mycf.data.lang == "en") {
		bodyHero = enLang.inHeroHeadDesc;
	} else if (mycf.data.lang == "id") {
		headHero = idLang.HeroHeadTitttle;
		bodyHero = idLang.inHeroHeadDesc;
	} else {
		headHero = idLang.HeroHeadTitttle;
		bodyHero = idLang.inHeroHeadDesc;
	}
</script>
