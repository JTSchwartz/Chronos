<template>
	<v-container fluid class="fill-height align-stretch pa-0" style="border-left: solid 1px black">
		<v-row no-gutters :key="n" v-for="n in 24">
			<v-col>
				<hr/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		name: "Day"
	}
</script>

<style scoped>

</style>
