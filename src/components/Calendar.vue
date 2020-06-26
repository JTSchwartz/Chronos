<template>
	<v-col cols="10">
		<v-container class="fill-height pa-0 cream">
			<v-row class="font-weight-bold text-center pa-0 my-2" no-gutters>
				<v-col :key="day" v-for="day in weekdayNames">
					{{ day }}
				</v-col>
			</v-row>
			
			<v-row class="fill-height" no-gutters>
				<v-container class="fill-height align-stretch pa-0" :style="`height: calc(100% - ${24}px)`">
					<v-row class="fill-height" no-gutters>
						<v-col style="flex-grow: unset" v-if="weeks < 1">
							<v-container fluid class="fill-height align-stretch pa-0">
								<v-row no-gutters :key="m" v-for="m in weeks">
									<v-col>
										<v-container fluid class="fill-height align-stretch pa-0">
											<v-row no-gutters :key="n" v-for="n in 24">
												<v-col class="text-right mr-1">
													{{ n - 1 }}
												</v-col>
											</v-row>
										</v-container>
									</v-col>
								</v-row>
							</v-container>
						</v-col>
						
						<v-col style="border-top: solid 1px black">
							<v-container class="fill-height align-stretch pa-0">
								<v-row :key="i" v-for="i in weeks" no-gutters>
									<v-col :key="day" v-for="day in weekdayNames">
										<Day/>
									</v-col>
								</v-row>
							</v-container>
						</v-col>
					</v-row>
				</v-container>
			</v-row>
		</v-container>
	</v-col>
</template>

<script>
	
	import Day from "./Day";
	
	export default {
		name:       "Calendar",
		components: {
			Day
		},
		data: () => ({
			showWeekends: true,
			weekdayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			weeks:        1
		})
	}
</script>

<style scoped>

</style>
