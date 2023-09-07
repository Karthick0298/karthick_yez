import {Card, CardContent, CardActionArea, CardMedia, makeStyles, CardActions, Typography} from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star'

const useStyles = makeStyles(theme => ({
	cardContainer: {
		paddingBlock: 35,
		marginInline: 100,
		display: 'flex',
		gap: 12,
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',

		[theme.breakpoints.down('sm')]: {
			marginInline: 16,
			gap: 14,
		},

		'& .MuiPaper-rounded': {
			borderRadius: 15,
		},
	},
	card: {
		maxWidth: 270,
		minWidth: 270,

		[theme.breakpoints.down('sm')]: {
			maxWidth: 300,
			minWidth: 300,
		},

		'& .MuiTypography-h5': {
			color: '#475677',
			fontSize: 14,
			fontWeight: 300,
			paddingBlock: 8,
		},
		'& .MuiTypography-h6': {
			color: '#475677',
			fontSize: 14,
			fontWeight: 500,
		},
	},

	title: {
		display: 'flex',
		justifyContent: 'space-between',

		'& .MuiTypography-h3': {
			color: '#475677',
			fontSize: 18,
			fontWeight: 500,
		},
	},

	rating: {
		backgroundColor: '#0CC593',
		width: 52,
		height: 26,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 4,
		'& .MuiTypography-h6': {
			color: '#FFF',
			fontSize: 14,
			fontWeight: 300,
			marginInlineEnd: 4,
			letterSpacing: 0.5,
		},
		'& .MuiSvgIcon-root': {
			color: '#FFF',
			fontSize: 18,
		},
	},
}))

export default function CentresCardContainer({cardData, ratingBoxColor}) {
	const classes = useStyles()
	return (
		<div className={classes.cardContainer}>
			{cardData.map(({id, src, name, city, area, membership, ratings}) => (
				<Card id={id} className={classes.card}>
					<CardActionArea>
						<CardMedia component='img' height='208' image={src} />
						<CardContent>
							<div className={classes.title}>
								<Typography variant='h3'>{name}</Typography>
								<div className={classes.rating} style={{backgroundColor: ratingBoxColor}}>
									<Typography variant='h6'>{ratings}</Typography>
									<StarIcon />
								</div>
							</div>
							<Typography variant='h5'>
								{city}- <span>{area}</span>
							</Typography>
							<Typography variant='h6'>{membership}</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			))}
		</div>
	)
}
