import {Typography, makeStyles} from '@material-ui/core'
import React, {useState} from 'react'
import _ from 'lodash'

const useStyles = makeStyles(theme => ({
	content: {
		display: 'inline',
		'& span': {
			color: 'red',
		},
		color: '#707070',
	},
	text: {
		cursor: 'pointer',
	},
}))

export default function ReadMoreWrapper(props) {
	const {text, classProps, className, moreText, lessText, maxTextLength, textColor, sliceLength} = props
	const classes = useStyles()
	const [isReadMore, setIsReadMore] = useState(true)
	const textLength = text?.length
	const handleHideText = () => {
		setIsReadMore(!isReadMore)
	}
	const handleReadMore = () => {
		if (textLength >= maxTextLength) {
			return (
				<Typography variant='body1' className={`${classes.content} ${classProps}`}>
					{isReadMore ? text?.slice(0, sliceLength) + '...' : text}
					<span className={classes.text} style={{color: textColor}} onClick={handleHideText}>
						{' '}
						{isReadMore ? moreText : lessText}
					</span>
				</Typography>
			)
		} else {
			return <Typography className={`${classes.content} ${classProps}`}>{text} </Typography>
		}
	}
	return <>{_.isEqual(text, 'null') ? '' : <span>{handleReadMore(text, textLength)}</span>}</>
}
