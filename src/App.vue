<template>
	<v-app>
		<Header/>
		<v-container fluid class="pa-0 fill-height">
			<v-row no-gutters style="height: 100%">
				<Calendar/>
				<Sidebar/>
			</v-row>
		</v-container>
	</v-app>
</template>

<script>
	import Calendar from "./components/Calendar";
	import Header   from "./components/Header";
	import Sidebar  from "./components/Sidebar";
	
	export default {
		name:       "App",
		components: {
			Calendar,
			Header,
			Sidebar
		}
	}
</script>

<style>
	body {
		overflow-y: hidden;
	}
</style>
