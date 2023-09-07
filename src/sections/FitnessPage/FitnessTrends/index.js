import {Card, CardContent, CardActionArea, CardMedia, makeStyles, CardActions, Typography} from '@material-ui/core'
import Button from '../../../components/GradientButton'
import Image from 'next/image'
import FitnessTrendsDetails from '../../../model/FitnessTrendsCardDetails/data'
const useStyles = makeStyles(theme => ({
	priorityPosition: {
		display: 'flex',
		flexDirection: 'column',
		marginInline: 100,
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	doctorPosition: {
		display: 'flex',
		flexDirection: 'row',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			alignItems: 'center',
			gap: 10,
		},
	},
	leftSidePosition: {
		flex: 3,
		display: 'flex',
		gap: 8,
		'& .MuiTypography-h2': {
			color: '#7047ea',
			fontSize: 16,
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 22,
			},
		},
		'& .MuiTypography-h4': {
			color: '#7047ea',
			fontSize: 14,
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
	},
	rightPosition: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	rightSidePosition: {
		flex: 1,
		[theme.breakpoints.down('sm')]: {
			order: -1,
		},
	},
	AppoinmentFont: {
		fontWeight: 100,
		fontSize: theme.typography.body2.fontSize,
	},
	AppoinmentFontone: {
		fontWeight: 600,
	},
	priorityImage: {
		display: 'flex',
		flexDirection: 'row',
		gap: 40,
		paddingBlock: 40,

		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
		'& .MuiCardMedia-img': {
			objectFit: 'cover',
			[theme.breakpoints.down('xs')]: {
				objectFit: 'none',
			},
			[theme.breakpoints.down('sm')]: {
				objectFit: 'cover',
			},
		},

		'& .MuiTypography-h5': {
			color: '#475677',
			fontSize: theme.typography.h5.fontSize,
			fontWeight: 500,
			paddingBlock: 4,
			paddingInline: 8,
			textAlign: 'left',
		},
		'& .MuiTypography-h6': {
			color: '#475677',
			fontSize: theme.typography.h6.fontSize,
			paddingInline: 8,
			textAlign: 'left',
		},
		'& .MuiPaper-root': {
			width: '100%',
			height: 'fit-content',
			background: 'transparent linear-gradient(121deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
			borderRadius: 15,
			opacity: 1,
			backdropFilter: 'blur(6px)',
		},
		'& .MuiCardContent-root': {
			paddingBlockStart: 12,
			paddingInline: 12,
	 paddingBlockEnd: 0,
		},
		'& .MuiCardActions-root': {
			paddingBlock: 12,
    paddingInline: 20,
		},
	},
	textOnePriority: {
		fontWeight: 100,
	},
	Textpriority: {
		fontWeight: 700,
	},
	imageborderradius: {
		borderTopLeftRadius: 12,
		borderTopRightRadius: 12,
	},
	buttonpadding: {
		paddingInline: 8,
		paddingBlock: 8,
	},
}))

export default function FitnessTrends() {
	const classes = useStyles()
	return (
		<div className={classes.priorityPosition}>
			<div className={classes.doctorPosition}>
				<div className={classes.leftSidePosition}>
					<Typography variant='h2' className={classes.AppoinmentFont}>
					Exclusive 
					</Typography>
					<Typography variant='h2'  className={classes.AppoinmentFontone}> Fitness</Typography>
					<Typography variant='h2' className={classes.AppoinmentFont}>
					trends
					</Typography>
				</div>
				<div className={classes.rightPosition}>
				</div>
			</div>
			<div className={classes.priorityImage}>
				{FitnessTrendsDetails.map(({id, src, heading,text,buttonContent}) => (
					<Card key={id} className={classes.root}>
						<CardActionArea>
							<CardMedia component='img' image={src} />
							<CardContent>
								<Typography variant='h5'>{heading}</Typography>
								<Typography variant='h6'>{text}</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button>{buttonContent}</Button>
						</CardActions>
					</Card>
				))}
			</div>
		</div>
	)
}
