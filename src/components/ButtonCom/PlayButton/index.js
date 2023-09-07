import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	aTag: {
		fontSize: 0,
	},
	dwnldBtn: {
		cursor: 'pointer',

		'&:hover': {
			transform: ' scale(1.02, 1.04)',
			transition: 'transform 0.25s ease',
		},
	},
}))
export default function Play() {
	const classes = useStyles()

	return (
		<Link href='https://play.google.com/store'>
			<a target='_blank' className={classes.aTag}>
				<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/playbutton.png' width={130} height={48} alt='playstore' className={classes.dwnldBtn} />
			</a>
		</Link>
	)
}
