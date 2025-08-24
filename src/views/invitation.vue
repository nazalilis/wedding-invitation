<script setup>
	import navbar from "../components/navbar.vue";
	import sidebar from "../components/sidebar.vue";
	import SectionHome from "../partials/sectionHome.vue";
</script>

<template>
	<div class="drawer drawer-end">
		<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
		<div class="relative drawer-content flex flex-col bg-transparent">
			<navbar />
			<!-- Page content -->
			<SectionHome />
		</div>
		<sidebar />
	</div>
</template>

<style scoped></style>
