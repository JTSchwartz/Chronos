<template>
	<v-app-bar height="76px" class="gradient">
<!--		<v-card-title class="text-h4">Chronos</v-card-title>-->
		<Logo/>
		<v-spacer/>
		<v-btn icon>
			<v-icon>
				fas fa-bars
			</v-icon>
		</v-btn>
	</v-app-bar>
</template>

<script>
	import Logo from "./Logo";
	export default {
		name: "Header",
		components: {Logo}
	}
</script>

<style scoped>
	* {
		color: var(--v-secondary-base);
	}
	
	.gradient {
		background: #1e5799;
		background: -moz-linear-gradient(-20deg,  var(--v-primary-base) 56%, var(--v-secondary-base) 75%);
		background: -webkit-linear-gradient(-20deg,  var(--v-primary-base) 56%,var(--v-secondary-base) 75%);
		background: linear-gradient(160deg,  var(--v-primary-base) 56%,var(--v-secondary-base) 75%);
	}
</style>
