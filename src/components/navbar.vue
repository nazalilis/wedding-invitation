<script setup>
	import menuList from "./menuList.vue";
	import themeChange from "./themeController.vue";
</script>

<template>
	<div class="sticky top-0 bg-base backdrop-blur-lg">
		<div class="navbar container mx-auto w-full">
			<RouterLink to="/" class="mx-2 flex-1 pb-2 pt-4 px-2 text-3xl font-sacramento"> Khode's Wedding </RouterLink>
			<div class="hidden flex-none sm:block">
				<ul class="menu menu-horizontal text-base-content">
					<menuList />
				</ul>
			</div>
			<themeChange />
			<div class="flex-none sm:hidden">
				<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<img src="../assets/svg/hamburger.svg" class="inline-block h-6 w-6 stroke-current" alt="" />
				</label>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
