<script setup>
	import mycf from "../core/config.js";
	import idLang from "../assets/lang/id.json";
	import enLang from "../assets/lang/en.json";
</script>

<script>
	let time = [mycf.data.weddingTime.year, mycf.data.weddingTime.month, mycf.data.weddingTime.date];
	time[0] == 0 ? (time[0] = new Date().getFullYear()) : (time[0] = time[0]);
	time[1] == 0 ? (time[1] = new Date().getMonth() + 1) : (time[1] = time[1]);
	time[2] == 0 ? (time[2] = 5) : (time[2] = time[2]);

	let timeStc = [enLang.monthsName[time[1]] + " " + time[2] + ", " + time[0], time[2] + " " + idLang.monthsName[time[1]] + " " + time[0]];

	let sentence = {
		stc1: mycf.data.lang == "en" ? enLang.homeSectionHeader : idLang.homeSectionHeader,
		stc2: mycf.data.lang == "en" ? enLang.homeSectionDesc1[0] : idLang.homeSectionDesc1[0],
		stc3: mycf.data.lang == "en" ? enLang.homeSectionDesc1[1] : idLang.homeSectionDesc1[1],
		stc4: mycf.data.lang == "en" ? enLang.homeSectionDesc2 : idLang.homeSectionDesc2,
		stc5: mycf.data.lang == "en" ? timeStc[0] : timeStc[1],
	};

	console.log(time[0]);
	console.log(time[1]);
	console.log(time[2]);
</script>

<template>
	<section class="hero home-section min-h-screen py-20">
		<div class="hero-overlay !bg-transparent"></div>
		<div class="container mx-auto px-4 md:px-0">
			<div class="text-center p-2">
				<h2 class="font-sacramento text-pink-400 font-bold text-6xl">{{ sentence.stc1 }}</h2>
				<h3>{{ sentence.stc2 }} {{ sentence.stc5 }} {{ sentence.stc3 }} {{ mycf.data.weddingVenue.shortAddress }}</h3>
				<p>{{ sentence.stc4 }}</p>
			</div>
			<div class="couple grid grid-cols-1 md:grid-cols-2 pt-5">
				<div class="flex justify-center items-center gap-3 p-2">
					<div class="text-right">
						<h3 class="font-sacramento text-pink-400 text-4xl text-nowrap">Mr. {{ mycf.data.bridAndGroom.him.fullName }}</h3>
						<p>{{ mycf.data.bridAndGroom.him.description }}</p>
						<p>
							Putra dari Bpk. XYZ <br />
							dan <br />
							Ibu. ABC
						</p>
					</div>
					<div class="avatar">
						<div class="w-24 h-24 rounded-full">
							<!-- <img :src="priaImg" /> -->
						</div>
					</div>
				</div>
				<div class="flex justify-center items-center gap-3 p-2">
					<div class="avatar">
						<div class="w-24 h-24 rounded-full">
							<!-- <img :src="wanitaImg" /> -->
						</div>
					</div>
					<div class="text-left">
						<h3 class="font-sacramento text-pink-400 text-4xl text-nowrap">Mrs. {{ mycf.data.bridAndGroom.her.fullName }}</h3>
						<p>{{ mycf.data.bridAndGroom.her.description }}</p>
						<p>
							Putri dari Bpk. ABC <br />
							dan <br />
							Ibu. XYZ
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
	/* Hero */
	.home-section {
		background-image: url(../assets/img/bgPattern.webp);
	}
</style>
