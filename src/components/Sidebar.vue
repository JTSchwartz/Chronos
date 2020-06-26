<template>
	<v-col>
		<v-card color="secondary" class="fill-height" flat tile>
			<hr class="breaker-up"/>
			<v-container fluid class="text-center py-0">
				<v-row :key="week" v-for="week in weeks">
					<v-col :key="day" v-for="day in 7" :style="selectedDate(calendarArray[week - 1][day - 1])">
						{{ Math.abs(calendarArray[week - 1][day - 1]) }}
					</v-col>
				</v-row>
			</v-container>
			<hr class="breaker-down"/>
		</v-card>
	</v-col>
</template>

<script>
	export default {
		name:    "Sidebar",
		created: function () {
			this.buildCalendarArray()
		},
		data:    () => ({
			currentDate:   new Date(),
			currentDay:    0,
			days:          0,
			firstDay:      0,
			lastDay:       0,
			weeks:         0,
			calendarArray: []
		}),
		methods: {
			firstDate:          function (month, year) {
				return new Date(year, month, 1).getDay()
			},
			getDaysInMonth:     function (month, year) {
				return new Date(year, month + 1, 0).getDate()
			},
			lastDate:           function (month, year) {
				return new Date(year, month + 1, 0).getDay()
			},
			buildCalendarArray: function () {
				this.currentDay = this.currentDate.getDate()
				
				this.firstDay = this.firstDate(this.currentDate.getMonth(), this.currentDate.getFullYear())
				this.lastDay = this.lastDate(this.currentDate.getMonth(), this.currentDate.getFullYear())
				
				this.days = this.getDaysInMonth(this.currentDate.getMonth(), this.currentDate.getFullYear())
				
				this.weeks = Math.ceil((this.days + this.firstDay) / 7)
				
				const count = this.weeks * 7
				const arr = []
				const currentMonthLength = this.getDaysInMonth(this.currentDate.getMonth(), this.currentDate.getFullYear())
				const lastMonthLength = this.getDaysInMonth(this.currentDate.getMonth() - 1, this.currentDate.getFullYear())
				
				for (let i = 0; i < count; i++) {
					if (i < this.firstDay) {
						arr.push((lastMonthLength - (this.firstDay - 1)) * -1)
					} else if (i > currentMonthLength + (this.firstDay - 1)) {
						arr.push((i - (currentMonthLength + this.firstDay) + 1) * -1)
					} else {
						arr.push(i - (this.firstDay - 1))
					}
				}
				
				this.calendarArray = []
				
				for (let i = 0; i < this.weeks; i++) {
					this.calendarArray.push(arr.splice(0, 7));
				}
			},
			selectedDate: function(day) {
				if (day !== this.currentDay) return ""
				
				const color = "var(--gray)"
				
				return `background: radial-gradient(ellipse at center,  ${color} 0%,${color} 47%,${color} 47%,${color} 47%,transparent 48%)`
			}
		}
	}
</script>

<style scoped>
	* {
		--gray: hsla(0, 0%, 20%, 0.25);
		--gradient: var(--gray), rgba(0, 0, 0, 0);
	}
	
	.breaker-up {
		height: 6px;
		border: 0;
		background-image: linear-gradient(to top, var(--gradient));
	}
	
	.breaker-down {
		height: 6px;
		border: 0;
		background-image: linear-gradient(to bottom, var(--gradient));
	}
</style>
