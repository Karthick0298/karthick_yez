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
					Benefits of <span style={{fontWeight: '600'}}>Online Consultation</span>
				</Typography>
			</div>
			<div className={classes.cardsection}>
				<NumberList Number={'1'} color={'#FEC56C'} Heading={'Consult top doctor consultant '} Subheading={'Connecting instantly through video/audio call and job gets done '} />
				<NumberList Number={'4'} color={'#E0474E'} Heading={'Convenient and Easy'} Subheading={'Instant way of consultation and gets job to be done through online itself.'} />
				<NumberList Number={'2'} color={'#E0474E'} Heading={'100% Safe consultations'} Subheading={'Assurance will be given that it will be fully private and secure'} />
				<NumberList Number={'5'} color={'#00B592'} Heading={'Similar Clinic Experience'} Subheading={'Experiencing clinic like through video call consult itself. '} />
				<NumberList
					Number={'3'}
					color={'#00B592'}
					Heading={'Free Follow-up'}
					Subheading={'Digitalized description will be given for the consult and a addon of 7 days free follow up will be given for further clarifications.'}
				/>
				<NumberList Number={'6'} color={'#FEC56C'} Heading={'Similar Clinic Experience'} Subheading={'Experiencing clinic like through video call consult itself. '} />
			</div>
		</div>
	)
}
