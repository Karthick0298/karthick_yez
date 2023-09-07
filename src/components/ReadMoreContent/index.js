import React, {useState} from 'react'
import _ from 'lodash'

export default function ReadMoreContent({children, maxTextLength}) {
	const [isReadMore, setIsReadMore] = useState(true)
	const text = children
	const textLength = text?.length
	const handleHideText = () => {
		setIsReadMore(!isReadMore)
	}
	const handleReadMore = () => {
		if (textLength >= maxTextLength) {
			return (
				<>
					{isReadMore ? text?.slice(0, maxTextLength) + '...' : text}
					<span onClick={handleHideText}>{isReadMore ? 'read more' : ' show less'}</span>
				</>
			)
		} else {
			return <>{text}</>
		}
	}
	return <>{_.isEqual(text, 'null') ? '' : <>{handleReadMore(text, textLength)}</>}</>
}
