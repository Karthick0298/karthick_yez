import {Card, makeStyles, Typography} from '@material-ui/core'
import ClinicalCardData from '../../model/ClinicalCardData/data'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
	cardmain: {
		paddingInline: 218,
		position: 'relative',
		marginTop: -31,
		'& .MuiCard-root': {
			background: 'transparent linear-gradient(102deg, #FAFAFACC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
			border: '1px solid #FFFFFF80',
			borderRadius: 10,
			display: 'flex',
			padding: 36,
			[theme.breakpoints.down('xs')]: {
				paddingInline: 12,
				flexDirection: 'column',
				padding: 0,
			},
			[theme.breakpoints.up('sm')]: {
				position: 'relative',
				marginTop: -31,
				justifyContent: 'center',
			},
		},
		'& .MuiTypography-h5': {
			fontFamily: theme.typography.h3.fontFamily,
			fontSize: theme.typography.subtitle1.fontSize,
			color: '#475677',
			paddingBottom: 8,
			fontWeight: theme.typography.h2.fontWeight,
		},
		'& .MuiTypography-h6': {
			fontFamily: theme.typography.h3.fontFamily,
			fontSize: theme.typography.h6.fontSize,
			paddingBottom: 8,
			color: '#475677',
			textAlign: 'center',
		},
		[theme.breakpoints.down('xs')]: {
			paddingInline: 12,
			paddingBlock: 36,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInline: 100,
			paddingBlock: 74,
		},
		[theme.breakpoints.up('md')]: {
			// paddingInline: 215,
			paddingInline: 153,
			paddingBlock: 38,
		},
	},
	cardsection: {
		display: 'flex',
		justifyContent: 'space-evenly',
		flexDirection: 'column',
		alignItems: 'center',
	},
}))
export default function Clinicalcard() {
	const classes = useStyles()
	return (
		<div className={classes.cardmain}>
			<Card>
				{ClinicalCardData.map(ClinicalCardDatas => (
					<div className={classes.cardsection} key={ClinicalCardDatas.id}>
						<Image src={ClinicalCardDatas.image} alt='icons' width={52} height={52} />
						<Typography variant='h5'>{ClinicalCardDatas.heading}</Typography>
						<Typography variant='h6'>{ClinicalCardDatas.subheading}</Typography>
					</div>
				))}
			</Card>
		</div>
	)
}
