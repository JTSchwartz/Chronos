<template>
	<v-card>
		<v-card-title>{{ title }}</v-card-title>
	</v-card>
</template>

<script>
	export default {
		name: "Event",
		props: ["title", "start", "end", "color"]
	}
</script>

<style scoped>

</style>
