<script setup>
	import notYet from "./notYet.vue";
	import already from "./already.vue";
	import mycf from "../core/config.js";
	import idLang from "../assets/lang/id.json";
	import enLang from "../assets/lang/en.json";
</script>

<template>
	<notYet v-if="!expired" />
	<already v-else />
	<div id="countdown-display" class="grid auto-cols-max grid-flow-col justify-self-center gap-5 my-3 text-center">
		<div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
			<span class="countdown font-mono text-5xl">
				<span :style="'--value:' + displayDays" aria-live="polite" :aria-label="'' + displayDays">{{ displayDays }}</span>
			</span>
			{{ timeFormat[0] }}
		</div>
		<div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
			<span class="countdown font-mono text-5xl">
				<span :style="'--value:' + displayHours" aria-live="polite" :aria-label="'' + displayHours">{{ displayHours }}</span>
			</span>
			{{ timeFormat[1] }}
		</div>
		<div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
			<span class="countdown font-mono text-5xl">
				<span :style="'--value:' + displayMinutes" aria-live="polite" :aria-label="'' + displayMinutes">{{ displayMinutes }}</span>
			</span>
			{{ timeFormat[2] }}
		</div>
		<div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
			<span class="countdown font-mono text-5xl">
				<span :style="'--value:' + displaySeconds" aria-live="polite" :aria-label="'' + displaySeconds"></span>
			</span>
			{{ timeFormat[3] }}
		</div>
	</div>
</template>

<script>
	const timeFormat = mycf.data.lang == "en" ? enLang.timeFormat : idLang.timeFormat;
	export default {
		props: ["year", "month", "date", "hour", "minute", "second", "milisecond"],
		data: () => ({
			displayDays: 0,
			displayHours: 0,
			displayMinutes: 0,
			displaySeconds: 0,
			loaded: false,
			expired: false,
		}),
		computed: {
			_seconds: () => 1000,
			_minutes() {
				return this._seconds * 60;
			},
			_hours() {
				return this._minutes * 60;
			},
			_days() {
				return this._hours * 24;
			},
			end() {
				return new Date(this.year, this.month, this.date, this.hour, this.minute, this.second, this.milisecond);
			},
		},
		mounted() {
			this.showRemaining();
		},
		methods: {
			formatNum: (num) => (num < 10 ? "0" + num : num),
			showRemaining() {
				const timer = setInterval(() => {
					const now = new Date();
					const distance = this.end.getTime() - now.getTime();

					// console.log(this.end);
					if (distance < 0) {
						clearInterval(timer);
						this.expired = true;
						document.getElementById("countdown-display").style.display = "none";
						return;
					}

					const days = Math.floor(distance / this._days);
					const hours = Math.floor((distance % this._days) / this._hours);
					const minutes = Math.floor((distance % this._hours) / this._minutes);
					const seconds = Math.floor((distance % this._minutes) / this._seconds);
					this.displayDays = this.formatNum(days);
					this.displayHours = this.formatNum(hours);
					this.displayMinutes = this.formatNum(minutes);
					this.displaySeconds = this.formatNum(seconds);
					this.loaded = true;
				}, 1000);
			},
		},
	};
</script>
