import moment from 'moment'

const previousYear = moment().subtract(1, 'year').format('YYYY')
const currentYear = moment().format('YYYY')
export default [
	{
		id: 1,
		label: `${currentYear}`,
		value: `${currentYear}`,
	},
	{
		id: 2,
		label: `${previousYear}`,
		value: `${previousYear}`,
	},
]
