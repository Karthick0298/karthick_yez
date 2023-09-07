import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import NumberList from '../../../../components/NumberGridList'
const useStyles = makeStyles(theme => ({
	mainsection: {
		marginBlock: 30,
		marginInline: 124,
		[theme.breakpoints.down('sm')]: {
			marginInline: 2,
		},
		[theme.breakpoints.down('sm')]: {
			marginInline: 20,
		},
	},
	healthcardheading: {
		display: 'flex',
		justifyContent: 'center',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'row',
		},
	},
	healthcardheadingone: {},
	healthcardheadingtwo: {},
	cardsection: {
		alignItems: 'baseline',
		position: 'relative',
		left: 50,
		marginInline: 100,
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		rowGap: 30,
		[theme.breakpoints.down('xs')]: {
			gridTemplateColumns: '1fr',
			marginInline: 0,
			left: 0,
		},
		[theme.breakpoints.down('sm')]: {
			gridTemplateColumns: '1fr',
			marginInline: 0,
			left: 0,
		},
	},
	headSection: {
		marginBlock: 30,
		'& .MuiTypography-h3': {
			fontSize: 28,
			fontWeight: 400,
			color: theme.palette.care.main,
		},
	},
}))
export default function HomeServiceBenefits() {
	const classes = useStyles()
	return (
		<div className={classes.mainsection}>
			<div className={classes.headSection}>
				<Typography variant='h3'>
					Benefits of <span style={{fontWeight: '600'}}>Home service</span>
				</Typography>
			</div>
			<div className={classes.cardsection}>
				<NumberList
					Number={'1'}
					color={'#FEC56C'}
					Heading={'Avoid hospitalization'}
					Subheading={'Home service also helps in managing chronic health conditions to avoid unnecessary hospitalization'}
				/>
				<NumberList Number={'4'} color={'#E0474E'} Heading={'Convenient and Easy'} Subheading={'Experiencing clinic like in home itself.'} />
				<NumberList Number={'2'} color={'#E0474E'} Heading={'Support'} Subheading={'It offers one – on – one personal support'} />
				<NumberList Number={'5'} color={'#00B592'} Heading={'Better time management'} Subheading={'you could save time from getting support instantly from the experts.'} />
				<NumberList Number={'3'} color={'#00B592'} Heading={'Enquire'} Subheading={'Enquire about health and any sort of pain experienced'} />
				<NumberList Number={'6'} color={'#FEC56C'} Heading={'Better time management'} Subheading={'you could save time from getting support instantly from the experts.'} />
			</div>
		</div>
	)
}
