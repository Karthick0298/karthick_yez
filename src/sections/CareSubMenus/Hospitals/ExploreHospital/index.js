import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import MoreCard from '../../../../components/ExploreMoreCard'
const useStyles = makeStyles(theme => ({
	mainone: {
		display: 'flex',
		background: 'aliceblue',
		paddingBlock: 45,
		// marginBlock: 100,
		marginInline: 124,
		justifyContent: 'space-around',
		background: 'transparent linear-gradient(102deg, #FAFAFACC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		border: '1px solid #FFFFFF80',
		borderRadius: 10,
		paddingInline: 20,
		[theme.breakpoints.down('xs')]: {
			paddingInline: 20,

			marginInline: 32,
			flexDirection: 'column',
		},
		[theme.breakpoints.down('md')]: {
			// paddingInline: 20,
			// marginBlock: 33,
			// marginInline: 100,
			// flexDirection:'column',
			paddingInline: 20,
			// marginBlock: 33,
			marginInline: 10,
			flexDirection: 'column',
		},
		// [theme.breakpoints.down('md')]: {
		// 	paddingInline: 20,
		// 	// marginBlock: 33,
		// 	marginInline: 96,
		// 	flexDirection: 'row',
		// 	justifyContent: 'space-around',
		// },
	},
}))
export default function HomeExploreMore() {
	const classes = useStyles()
	return (
		<div className={classes.mainone}>
			<MoreCard image={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/hospital-care/findplus.svg'} heading={'Find Hospital'} subheading={'Select your medical concern for the consultation'} />
			<MoreCard image={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/hospital-care/hand-hospital.svg'} heading={'Select Speciality'} subheading={'Instant appointment with your preferred doctor'} />
			<MoreCard image={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/tvicon.svg'} heading={'Book Appointment'} subheading={'Book slot for preferred clinical consult doctor'} />
		</div>
	)
}
