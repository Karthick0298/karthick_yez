import {Typography, makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	imageView: {
		position: 'relative',
		width: '100%',
		[theme.breakpoints.up('xs')]: {
			minHeight: '100vh',
		},
		[theme.breakpoints.up('sm')]: {
			minHeight: 'calc(100vh - 64px)',
		},
	},
	sectionOne: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingBlockStart: 42,
		paddingInline: 16,

		'& .MuiTypography-h2': {
			fontStyle: 'normal',
			fontFamily: 'Poppins',
			fontSize: 24,
			paddingBlock: 8,
			width: '100%',
			textAlign: 'center',
			letterSpacing: 1.5,
		},
		'& .MuiTypography-h3': {
			fontFamily: 'Poppins',
			fontStyle: 'normal',
			fontSize: 32,
			paddingBlock: 8,
			width: '100%',
			textAlign: 'center',
			letterSpacing: 1.5,
		},
		'& .MuiTypography-h4': {
			color: '#2E2E2E',
			fontStyle: 'normal',
			fontFamily: 'Poppins',
			fontSize: 18,
			paddingBlock: 16,
			textAlign: 'center',
			letterSpacing: 0.8,
			maxWidth: 820,
			[theme.breakpoints.up('xs')]: {
				width: '100%',
			},
			[theme.breakpoints.up('sm')]: {
				width: '100%',
			},
		},
		[theme.breakpoints.up('md')]: {
			paddingBlockStart: 68,
		},
	},
	sectionTwo: {
		display: 'flex',
		justifyContent: 'center',
	},
	cardContainer: {
		width: '100%',
		paddingBlock: 28,
		paddingInline: 12,
		maxWidth: 1320,
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		gap: 20,
	},
	card: {
		borderRadius: 14,
		maxWidth: 332,
		minHeight: 162,
		maxHeight: 162,
		width: '100%',
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
		'& .MuiTypography-h3': {
			fontFamily: 'Poppins',
			color: '#FFFFFF',
			[theme.breakpoints.up('xs')]: {
				fontSize: 21,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 22,
			},

			letterSpacing: 1.6,
			paddingInlineStart: 32,
			maxWidth: 200,
			lineHeight: '110%',
			zIndex: 2,
		},
	},
	cardImg: {
		backgroundSize: 'contain',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		position: 'absolute',
		height: '100%',
		width: '60%',
		bottom: 0,
		right: 0,
	},
}))

export default function ConsumerPageSections({backgroundColor, groupName, groupColor, heading, subtitle, CardData}) {
	const classes = useStyles()

	return (
		<div className={classes.imageView} style={{background: backgroundColor}}>
			<div className={classes.sectionOne}>
				<Typography variant='h2' style={{color: groupColor}}>
					{groupName}
				</Typography>
				<Typography variant='h3'>{heading}</Typography>
				<Typography variant='h4'>{subtitle} </Typography>
			</div>
			<div className={classes.sectionTwo}>
				<div className={classes.cardContainer}>
					{CardData?.map(item => (
						<div className={classes.card} key={item?.id} style={{background: item?.background}}>
							<div className={classes.cardImg} style={{backgroundImage: `url(${item?.backgroundImg})`}}></div>
							<Typography variant='h3'>{item?.title}</Typography>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
