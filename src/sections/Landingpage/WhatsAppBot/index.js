import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Image from 'next/image'
import {Link} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	popoverPaper: {
		'& .MuiPopover-paper': {
			borderRadius: '20px 20px 0px 20px',
		},
	},
	WhatsAppbotRoot: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	botContainer: {},
	botPopUp: {
		maxWidth: 365,
		paddingInline: 20,
		paddingBlock: 16,
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',

		'& .MuiTypography-h5': {
			background: theme.palette.lyfngo.gradientText1,
			fontFamily: theme.palette.lyfngo.fontFamily,
			'-webkit-background-clip': 'text',
			'-webkit-text-fill-color': 'transparent',
			fontWeight: 600,

			[theme.breakpoints.up('xs')]: {
				fontSize: 18,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 20,
			},
		},

		'& .MuiTypography-h6': {
			fontFamily: theme.palette.lyfngo.fontFamily,
			color: theme.palette.lyfngo.content1,
			fontWeight: 600,

			[theme.breakpoints.up('xs')]: {
				fontSize: 18,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 20,
			},
		},

		'& .MuiTypography-subtitle1': {
			textAlign: 'center',
			paddingBlock: 6,
			color: theme.palette.lyfngo.content1,
			fontFamily: theme.palette.lyfngo.fontFamily,
			[theme.breakpoints.up('xs')]: {
				fontSize: 12,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 14,
			},
			'& a': {
				color: theme.palette.lyfngo.main,
			},
		},
	},
}))

export default function WhatsAppBot() {
	const classes = useStyles()
	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleClick = event => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const open = Boolean(anchorEl)
	const id = open ? 'simple-popover' : undefined

	return (
		<div>
			<div className={classes.WhatsAppbotRoot}>
				<div aria-describedby={id} className={classes.botContainer} onClick={handleClick} onMouseEnter={handleClick}>
					<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/newWhatsAPP.svg'} alt='whatsapp icon' width={60} height={60} />
				</div>
			</div>
			<Popover
				id={id}
				className={classes.popoverPaper}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}>
				<div className={classes.botPopUp}>
					<Typography variant='h5'>LYFnGO WhatsApp</Typography>
					<Typography variant='subtitle1'>Scan or click link to book an appointment instantly with the specialist.</Typography>
					<Typography variant='subtitle1'>
						<a
							target='_blank'
							href='https://api.whatsapp.com/send/?phone=6588351745&text=Hello,%20welcome%20to%20LYFnGO.%20I%20am%20glad%20to%20assist%20you.%20Please%20type%20your%20questions%20here.'
							rel='noopener noreferrer'>
							{`https://wa.me/+6588351745`}
						</a>
					</Typography>
					<div>
						<Image
							src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/QRCodeWhatsappChat.png'}
							alt='whatsapp icon'
							width={190}
							height={190}
						/>
					</div>
					<Typography variant='h6'>+65 8835-1745</Typography>
				</div>
			</Popover>
		</div>
	)
}
