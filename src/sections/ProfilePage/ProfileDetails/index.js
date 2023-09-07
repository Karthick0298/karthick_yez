import Search from '../../../components/Search'
import {makeStyles, Typography} from '@material-ui/core'
import ProfileDetailstabView from '../../../components/ProfileDetailsTabView'
import ProfileCardDetails from '../../../components/ProfileCardDetails'
import AppointmentSlotPickerWidget from '../../../components/AppointmentSlotPickerWidget'
// import Breadcrumbs from "../../../components/Breadcrumbs";
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from 'next/link'
import {NavigateNext} from '@material-ui/icons'
const useStyles = makeStyles(theme => ({
	Positionroot: {
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/care-bg.svg'})`,
		backgroundPosition: 'right',
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
		padding: 8,
		// transform: 'translateY(67px)',
	},
	searchroot: {
		paddingBlock: 12,
		marginInline: 100,
		[theme.breakpoints.down('xs')]: {
			marginInline: 0,
		},
	},
	flexsplitdivision: {
		marginInlineStart: 86,
		display: 'flex',
		gap: 12,
		paddingBlock: 24,
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.down('961')]: {
			marginInlineStart: 0,
		},
	},
	flexsubsivision1: {
		flex: 3,
		[theme.breakpoints.down('xs')]: {
			order: 1,
		},
		[theme.breakpoints.down('sm')]: {
			order: 1,
		},
	},
	flexsubsivision2: {
		flex: 1,
		padding: 5,
		[theme.breakpoints.down('xs')]: {
			marginInlineStart: 0,
			padding: 0,
		},
		[theme.breakpoints.up('sm')]: {
			marginInlineStart: 88,
			padding: 0,
		},
		[theme.breakpoints.up('md')]: {
			marginInlineStart: 0,
		},
	},
	Breadcrumbscs: {
		paddingInline: 100,
		cursor: 'pointer',
	},
	breadCrumbaContainer: {
		paddingInline: 100,
	},
	breadCrumbsNavigation: {
		paddingBlockStart: 8,

		[theme.breakpoints.down('sm')]: {
			paddingBlock: 4,
			paddingBlockEnd: 6,
		},

		'& a': {
			fontSize: 16,
			color: '#475677',
			textDecoration: 'none',
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
		'& .MuiSvgIcon-root': {
			color: '#475677',
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			fontSize: 16,
			color: '#253252',
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
	},
}))

const items = [
	{to: '/care', label: 'careee'},
	{to: '/care/DoctorProfile', label: 'Doctorlist'},
	{to: '/care/DoctorProfile/MapFilter', label: 'Maplist'},
	{to: '#', label: 'DoctorDetails'},
]
export default function ProfileDetails({mastTentUuid, tentUserUuid, availableData, consultFee}) {
	const classes = useStyles()
	return (
		<div className={classes.Positionroot}>
			<div className={classes.breadCrumbaContainer}>
				<Breadcrumbs separator={<NavigateNext fontSize='small' />} aria-label='breadcrumb' className={classes.breadCrumbsNavigation}>
					<Link href='/care'>Care</Link>
					<Link href='/care/DoctorProfile'>Doctor list</Link>
					<Typography variant='h5'>Doctor Details</Typography>
				</Breadcrumbs>
			</div>

			<div className={classes.flexsplitdivision}>
				<div className={classes.flexsubsivision1}>
					<ProfileCardDetails />
					<ProfileDetailstabView />
				</div>
				<div className={classes.flexsubsivision2}>
					<AppointmentSlotPickerWidget
						mastTentUuid={mastTentUuid}
						tentUserUuid={tentUserUuid}
						availableData={availableData}
						consultFee={consultFee}
					/>
				</div>
			</div>
		</div>
	)
}
