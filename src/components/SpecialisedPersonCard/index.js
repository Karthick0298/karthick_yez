import {CardContent, Card, CardActionArea, CardMedia, makeStyles, CardActions, Typography} from '@material-ui/core'
import Button from '../../../src/components/GradientButton'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
	root: {
		[theme.breakpoints.down('sm')]: {
			paddingInline: 10,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInlineStart: 100,
			paddingInlineEnd: 30,
			paddingBlock: 18,
		},
		[theme.breakpoints.up('md')]: {
			paddingInline: 100,
		},
	},

	cardContainer: {
		paddingTop: 14,
		display: 'flex',
		flexDirection: 'row',
		gap: 26,
		justifyContent: 'space-evenly',
		flexWrap: 'wrap',
		[theme.breakpoints.down('sm')]: {},
		[theme.breakpoints.up('sm')]: {},
		[theme.breakpoints.up('md')]: {
			justifyContent: 'space-around',
		},
		[theme.breakpoints.up('lg')]: {
			justifyContent: 'space-between',
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
		'& .MuiCardMedia-media': {
			width: '80%',
		},
		'& .MuiCardContent-root': {
			height: 134,
			background: 'transparent linear-gradient(288deg, #FAFAFA40 0%, #FFFFFFCC 100%) 0% 0% no-repeat padding-box',
			boxShadow: '0px 4px 15px #0000000D',
			borderRadius: 10,
			opacity: 1,
			backdropFilter: 'blur(1px)',
			transform: 'translateY(-10px)',
			paddingBlock: 8,
			paddingInline: 8,
			marginBlockStart: -8,
			'& .MuiTypography-h5': {
				color: '#475677',
				fontSize: 16,
				textAlign: 'left',
				fontWeight: 600,
				letterSpacing: 0.15,
				paddingBlock: 4,
				paddingInline: 8,
			},
			'& .MuiTypography-h6': {
				color: '#475677',
				fontSize: 14,
				textAlign: 'left',
				fontWeight: 500,
				// paddingBlock: 4,
				paddingInline: 8,
			},
		},
		'& .MuiPaper-root': {
			backgroundColor: 'transparent',
			boxShadow: 'none',
		},
		'& .MuiCard-root': {
			borderRadius: 10,
			opacity: 1,
			// backdropFilter: 'blur(6)',
		},
		'& .MuiTypography-body1': {
			color: '#475677',
			fontWeight: 600,
			fontSize: 14,
		},

		'& .MuiCardActions-root': {
			padding: 0,
			paddingBlockStart: 4,
		},
	},

	card: {
		width: '100%',
		minWidth: 260,
		maxWidth: 260,
		[theme.breakpoints.down('sm')]: {
			minWidth: 300,
			maxWidth: 300,
		},

		'& .MuiTypography-h4': {
			color: '#475677',
			fontSize: 14,
			fontWeight: 'bold',
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
	},
}))

export default function SpecialisedPersonCard({CardData, btnColor, onClick}) {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<div className={classes.cardContainer}>
				{CardData.map(({id, image, heading, content, buttonContent, linkTo}) => (
					<div key={id} className={classes.card}>
						<Card key={id}>
							<CardActionArea>
								<CardMedia component='img' image={image} />
								<CardContent>
									<Typography variant='h5'>{heading}</Typography>
									<Typography variant='h6'>{content}</Typography>
								</CardContent>
							</CardActionArea>
							{/* <Link href={linkTo}> */}
							<CardActions>
								<Button onClick={() => onClick(id)} findMorebtn={btnColor}>
									{buttonContent}
								</Button>
							</CardActions>
							{/* </Link> */}
						</Card>
					</div>
				))}
			</div>
		</div>
	)
}
