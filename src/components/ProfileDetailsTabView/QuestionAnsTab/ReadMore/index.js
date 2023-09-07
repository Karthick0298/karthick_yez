import {Typography, makeStyles} from '@material-ui/core'
import React, {useState} from 'react'
import _ from 'lodash'

const useStyles = makeStyles(theme => ({
	content: {
		fontFamily: theme.typography.h5.fontFamily,
		fontSize: 14,
		// display: 'inline',
		lineHeight: 1.6,
	},
	text: {
		color: theme.palette.care.main,
		cursor: 'pointer',
	},
}))

function ReadMore(props) {
	const {text, classProps, className, moreText, lessText} = props
	const classes = useStyles()
	const [isReadMore, setIsReadMore] = useState(true)
	const textLength = text?.length
	const handleHideText = () => {
		setIsReadMore(!isReadMore)
	}
	const handleReadMore = () => {
		// textLength >= 150 ? text.slice(0, 160) + '...' + <Typography>{'view'}</Typography> : text
		if (textLength >= 150) {
			return (
				<Typography variant='body1' className={`${classes.content} ${classProps}`}>
					{isReadMore ? text?.slice(0, 120) + '...' : text}
					<span className={classes.text} onClick={handleHideText}>
						{isReadMore ? moreText : lessText}
					</span>
				</Typography>
			)
		} else {
			return <Typography className={classes.content}>{text}</Typography>
		}
	}
	return <>{_.isEqual(text, 'null') ? '' : <span>{handleReadMore(text, textLength)}</span>}</>
}

export default ReadMore
