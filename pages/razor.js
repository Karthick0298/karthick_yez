import React, {useEffect, useState, useCallback} from 'react'
import moment from 'moment'

function razor() {
	// function createMarkup() {
	// 	return {__html: 'First &middot; Second'}
	// }
	const [state, setState] = useState(null)

	var startDate = moment('28-01-2022', 'DD-MM-YYYY')
	var endDate = moment(new Date(), 'DD-MM-YYYY')

	var diff = endDate.diff(startDate, 'days')

	useEffect(() => {
		if (diff === 1) {
			setState('New')
		} else {
			setState('no')
		}
	}, [])
	return (
		<div>
			<p>{state}</p>
		</div>
	)
	// < div dangerouslySetInnerHTML = { createMarkup() } />
}

export default razor
