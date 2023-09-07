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
export default function List() {
	const classes = useStyles()
	return (
		<div className={classes.mainsection}>
			<div className={classes.headSection}>
				<Typography variant='h3'>
					Benefits of <span style={{fontWeight: '600'}}>Clinical Consultation</span>
				</Typography>
			</div>
			<div className={classes.cardsection}>
				<NumberList
					Number={'1'}
					color={'#FEC56C'}
					Heading={'Consult Top Doctors 24x7 '}
					Subheading={'Connect instantly with a 24x7 specialist or choose to video visit a particular doctor. '}
				/>
				<NumberList
					Number={'4'}
					color={'#E0474E'}
					Heading={'Convenient and Easy'}
					Subheading={'Start an instant consultation within 2 minutes or do video consultation at the scheduled time.'}
				/>
				<NumberList Number={'2'} color={'#E0474E'} Heading={'100% Safe Consultations'} Subheading={'Be assured that your online consultation will be fully private and secured.'} />
				<NumberList Number={'5'} color={'#00B592'} Heading={'Similar Clinic Experience'} Subheading={'Experiencing clinic like through video call consult itself. '} />
				<NumberList
					Number={'3'}
					color={'#00B592'}
					Heading={'Free Follow-up'}
					Subheading={'Get a valid digital prescription and a 3-day, free follow-up for further clarifications.'}
				/>
			</div>
		</div>
	)
}
