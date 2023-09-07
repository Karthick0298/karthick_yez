import {makeStyles, Avatar, Button} from '@material-ui/core'
import React from 'react'
import Image from 'next/image'
const useStyles = makeStyles(theme => ({
	root: {
		position: 'sticky',
		top: 0,
		zIndex: 99,
		textAlign: 'center',
		paddingBlock: 10,
		background: '#f5f5f58c',
		backdropFilter: 'blur(8px)',
		border: '1px solid #FFFFFF80',
		boxShadow: '0px 0px 5px #00000045',
		opacity: 1,
	},
}))
function LandingHeader() {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Image
				alt='lyfngo gym, yoga, clinic, and hospital management software logo'
				src='https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Logo/LYFnGO_logo_full.svg'
				width={199}
				height={59}
			/>
		</div>
	)
}
export default LandingHeader
