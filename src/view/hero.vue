<script setup>
	import counter from "../components/countdown.vue";
	import mycf from "../core/config.js";
	import idLang from "../assets/lang/id.json";
	import enLang from "../assets/lang/en.json";
</script>

<script>
	let time = [mycf.data.weddingTime.year, mycf.data.weddingTime.month, mycf.data.weddingTime.date, mycf.data.weddingTime.hour, mycf.data.weddingTime.minute];
	time[0] == 0 ? (time[0] = new Date().getFullYear()) : (time[0] = time[0]);
	time[1] == 0 ? (time[1] = new Date().getMonth() + 1) : (time[1] = time[1]);
	time[2] == 0 ? (time[2] = 5) : (time[2] = time[2]);
	time[3] == 0 ? (time[3] = 10) : (time[3] = time[3]);
	time[4] == 0 ? (time[4] = 10) : (time[4] = time[4]);
</script>

<template>
	<div class="hero hero-section min-h-screen">
		<div class="hero-overlay backdrop-grayscale-100"></div>
		<div class="hero-content text-neutral-content text-center">
			<div class="max-w-5xl">
				<counter :year="time[0]" :month="time[1]" :date="time[2]" :hour="time[3]" :minute="time[4]" :second="0" :milisecond="0" />
				<a href="#home" class="btn btn-outline btn-secondary">
					{{ mycf.data.lang == "en" ? enLang.btnOpenText : idLang.btnOpenText }}
				</a>
			</div>
		</div>
	</div>
</template>

<style scoped>
	/* Hero */
	.hero-section {
		background-image: url(../assets/img/bgHero.webp);
	}
</style>
