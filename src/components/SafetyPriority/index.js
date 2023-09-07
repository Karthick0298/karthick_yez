import {Card, CardContent, CardActionArea, CardMedia, makeStyles, CardActions, Typography} from '@material-ui/core'
import Button from '../GradientButton'
import priority from '../../model/HealthPriortyCardDetails/data'
import Image from 'next/image'
const useStyles = makeStyles(theme => ({
	priorityPosition: {
		display: 'flex',
		flexDirection: 'column',
		marginInline: 124,
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	priority: {
		display: 'flex',
		gap: 6,
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'left',
		},
		'& .MuiTypography-h2': {
			color: '#7047ea',
			fontSize: 28,
			[theme.breakpoints.down('sm')]: {
				fontSize: theme.typography.h2.fontSize,
				fontSize: 16,
			},
		},
	},
	priorityImage: {
		display: 'flex',
		flexDirection: 'row',
		gap: 40,
		paddingTop: 38,

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
			fontSize: 22,
			fontWeight: 500,
			// paddingBottom: 18,
			fontFamily: 'Source Sans Pro',
			paddingInline: 8,
			textAlign: 'left',
		},
		'& .MuiTypography-h6': {
			color: '#475677',
			fontSize: 16,
			fontFamily: 'Source Sans Pro',
			paddingInline: 8,
			textAlign: 'left',
		},
		'& .MuiPaper-root': {
			width: '100%',
			background: 'transparent linear-gradient(121deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
			borderRadius: 15,
			opacity: 1,
			backdropFilter: 'blur(6px)',
			maxHeight: 450,
		},
		'& .MuiCardActions-root': {
			alignItems: 'end',
			paddingInline: 18,
		},
		'& .MuiCardContent-root': {
			maxWidth: 336,
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

export default function Index() {
	const classes = useStyles()
	return (
		<div className={classes.priorityPosition}>
			<div className={classes.priority}>
				<Typography variant='h2' className={classes.textOnePriority}>
					Safety is Our Top
				</Typography>
				<Typography variant='h2' className={classes.Textpriority}>
					Priority
				</Typography>
			</div>

			<div className={classes.priorityImage}>
				{priority.map(({id, src, heading, content, buttonContent}) => (
					<Card key={id} className={classes.root}>
						<CardActionArea>
							<CardMedia component='img' height='240' image={src} />
							<CardContent>
								<Typography variant='h5'>{heading}</Typography>
								<Typography variant='h6'>{content}</Typography>
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
